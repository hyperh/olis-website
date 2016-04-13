import React from 'react';
import { Link } from 'react-router';

import SectionWrapper from './Problems/SectionWrapper';
import RaisedButton from 'material-ui/lib/raised-button';
import Footer from './common/Footer';

export default class Problems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sourcesMenuOpen: false,
    };
  }

  toggleMenuOpen() {
    const currentState = this.state.sourcesMenuOpen;
    this.setState({
      sourcesMenuOpen: !currentState,
    });
  }

  renderSourcesMenu() {
    const menuOpen = this.state.sourcesMenuOpen;
    const menuStyle = {
      bottom: menuOpen ? '0' : '-280px',
    };
    const tabText = menuOpen ? 'Hide Sources' : 'Show Sources';
    return (
      <div className="sources-menu" style={menuStyle}>
        <div className="toggle-tab" onClick={this.toggleMenuOpen.bind(this)}>{ tabText }</div>
        <div className="content-container">
          <p><a href="http://emailstatcenter.com/Usage.html" target="_blank">Email Usage/Penetrations</a> &bull; EmailStatCounter</p>
          <p><a href="http://www.ics.uci.edu/~gmark/Home_page/Research_files/CHI%202012.pdf" target="_blank">A Pace Not Dictated by Electrons</a> &bull; University of California</p>
          <p><a href="http://research.microsoft.com/en-us/um/people/horvitz/chi_2007_iqbal_horvitz.pdf" target="_blank">Disruption and Recovery of Computing Tasks</a> &bull; Microsoft Research</p>
          <p><a href="http://news.bbc.co.uk/1/hi/uk/4471607.stm" target="_blank">'Infomania' worse than marijuana</a> &bull; BBC News</p>
          <p><a href="https://e-meetings.verizonbusiness.com/global/en/meetingsinamerica/uswhitepaper.php" target="_blank">Meetings in America</a> &bull; Verizon Business</p>
          <p><a href="http://www.effectivemeetings.com/meetingbasics/meetstate.asp" target="_blank">State of Meetings Today</a> &bull; EffectiveMeetings</p>
          <p><a href="http://business.salary.com/why-how-your-employees-are-wasting-time-at-work/" target="_blank">Why & How Your Employees are Wasting Time at Work</a> &bull; Salary.com</p>
          <p><a href="http://www.keyorganization.com/time-management-statistics.php" target="_blank">Time Management Statistics</a> &bull; Key Organization Systyems</p>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className="problems-page">
        <SectionWrapper imgSrc='/assets/img/problems/time.jpg'>
          <h1 className="section-title">YOUR TIME IS BEING WASTED</h1>
          <div className="section-subtitle">At least <span style={{color: '#F012BE'}} className="big-number">40%</span> of time at work is unproductive.</div>
        </SectionWrapper>
        <SectionWrapper imgSrc='/assets/img/problems/emails.jpg'>
          <h1 className="section-title">THERE ARE TOO MANY EMAILS</h1>
          <div className="section-subtitle">Workers check their email <span style={{color: '#FFDC00'}} className="big-number">35</span> times an hour.</div>
          <div className="section-subtitle">It also takes them <span style={{color: '#FFDC00'}} className="big-number">16</span> minutes to refocus.</div>
        </SectionWrapper>
        <SectionWrapper imgSrc='/assets/img/problems/interruptions.jpg'>
          <h1 className="section-title">YOU ARE CONSTANTLY INTERRUPTED</h1>
          <div className="section-subtitle">Up to <span style={{color: '#01FF01'}} className="big-number">80%</span> of all emails, calls, and other disruptions are not needed.</div>
        </SectionWrapper>
        <SectionWrapper imgSrc='/assets/img/problems/meetings.jpg'>
          <h1 className="section-title">TOO MANY UNPRODUCTIVE MEETINGS</h1>
          <div className="section-subtitle">Workers spend <span style={{color: '#BA01FF'}} className="big-number">31</span> hours a month in meetings.</div>
          <div className="section-subtitle">And in those meetings, <span style={{color: '#BA01FF'}} className="big-number">39%</span> fall asleep.</div>
        </SectionWrapper>
        <SectionWrapper imgSrc='/assets/img/problems/skyline.jpg'>
          <h1 className="section-title">BILLIONS LOST EVERY YEAR</h1>
          <div className="section-subtitle">In the US alone, <span style={{color: '#0074D9'}} className="big-number">37 billion dollars</span> are lost to unproductivity every year.</div>
          <Link to="/">
            <RaisedButton
              label="We can help"
              primary={true}
              style={{margin: '25px 0 25px'}}
            />
          </Link>
        </SectionWrapper>
        <Footer />
        { this.renderSourcesMenu() }
      </div>
    );
  }
}
