import React from 'react';

export default class Hexagon extends React.Component {
  render() {
    const hexagonSize = this.props.size;
    const hexagonColor = this.props.color;
    const triangleHeight = ((hexagonSize/2) * (1/Math.sqrt(3))).toFixed(0);

    let styles = {
      container: {
        position: 'relative',
        width: `${hexagonSize}px`,
      },
      body: {
        backgroundColor: hexagonColor,
        width: `${hexagonSize}px`,
        height: `${triangleHeight * 2}px`,
      },
      topTriangle: {
        width: '0',
        borderBottom: `${triangleHeight}px solid ${hexagonColor}`,
        borderLeft: `${hexagonSize / 2}px solid transparent`,
        borderRight: `${hexagonSize / 2}px solid transparent`,
      },
      bottomTriangle: {
        width: '0',
        borderTop: `${triangleHeight}px solid ${hexagonColor}`,
        borderLeft: `${hexagonSize / 2}px solid transparent`,
        borderRight: `${hexagonSize / 2}px solid transparent`,
      },
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100%',
      }, 
    }

    if (this.props.style) {
      styles.container = Object.assign(styles.container, this.props.style);
    }
    return (
      <div style={styles.container}>
        <div style={styles.topTriangle}></div>
        <div style={styles.body}></div>
        <div style={styles.bottomTriangle}></div>
        <div style={styles.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Hexagon.defaultProps = {
  size: 240,
  color: 'red',
}