import React from 'react';

export default class SectionWrapper extends React.Component {
  
  render() {
    const bgStyle = {
      backgroundImage: `url(${this.props.imgSrc})`,
    };
    return (
      <div className="problem-section">
        <div className="problem-bg" style={bgStyle}/>
        <div className="section-overlay" />
        <div className="section-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}