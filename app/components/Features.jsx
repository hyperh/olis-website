import React from 'react';
import $ from 'jquery';

import FindIcon from 'material-ui/lib/svg-icons/action/find-in-page';
import FontIcon from 'material-ui/lib/font-icon';

import Footer from './common/Footer';

export default class Features extends React.Component {

  scrollHandler = () => {
    const interval = [50, 300];
    const transitionPercentage = ($(window).scrollTop() - interval[0]) / (interval[1] - interval[0]);
    const ele = $('.features-header-content');
    const minScale = 0.8;
    if (transitionPercentage < 0) {
      ele.css('opacity','1');
      ele.css('transform','scale(1)');
    } else if (transitionPercentage > 1) {
      ele.css('opacity','0');
      ele.css('transform',`scale(${minScale})`);
    } else {
      ele.css('opacity', 1 - transitionPercentage);
      ele.css('transform', `scale(${(1-transitionPercentage) * (1-minScale) + minScale})`);
    }
  }

  componentDidMount = () => {
    $(window).on("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    $(window).off("scroll", this.scrollHandler);
  }

  renderFeaturesHeader() {
    return (
      <div className="features-header">
        <div className="features-header-overlay"></div>
        <div className="features-header-content">
          <h1 className="features-title">The Notepad</h1>
          <h4 className="features-subtitle">A Closer Look</h4>
        </div>
        <div className="top-bar" />
        <div className="bottom-bar" />
      </div>
    );
  }

  renderMiscItem(props){
    const { icon, title, desc } = props;
    const iconStyle = {
      fontSize: '64px',
      textAlign: 'center',
    };
    return(
      <div className="misc-item">
        <div className="feature-misc-icon">
          <FontIcon
            className="material-icons"
            style={iconStyle}
            color="#FF4081"
          >
            { icon }
          </FontIcon>
        </div>
        <div className="feature-misc-title">{ title }</div>
        <div className="feature-misc-desc">{ desc }</div>
      </div>
    );
  }

  renderMiscFeatures() {
    return (
      <div className="features-misc">
        <div className="features-misc-container">
          <h1>More Features</h1>
          <div className="misc-items-container">
            <this.renderMiscItem
              icon="question_answer"
              title="Flexible Chat Functionality"
              desc="Message your teammates directly or create an unlimited number of discussion groups."
            />
            <this.renderMiscItem
              icon="lock"
              title="Secure, Private, and Reliable"
              desc="Bank-level security ensures that your data is kept safe."
            />
            <this.renderMiscItem
              icon="mouse"
              title="Drag and Drop"
              desc="Easily share documents with your teammates."
            />
            <this.renderMiscItem
              icon="extension"
              title="Third-Party Integrations"
              desc="You can improve your productivty by using our integrations with third-party software."
            />
            <this.renderMiscItem
              icon="phonelink"
              title="Runs on Everything"
              desc="Olis is a complete multi-platform solution. Your data is seamlessly synced to all your connected devices."
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="features">

        { this.renderFeaturesHeader() }

        <div className="features-headline">
          The one place for all the information you need.
        </div>
        
        <div className="features-section" style={{backgroundColor: '#6082E6'}}>
          <div className="features-section-container">
            <div className="features-text">
              <h2>Find the Best Ideas</h2>
              <p>Harness the power of your team’s creativity by dropping in the Brainstorming widget. Your team can come up with ideas then vote for the best ones.</p>
            </div>
            <div className="features-img">
              <img src="/assets/img/features-vote.png" className="img-responsive"/>
            </div>
          </div>
          <div className="triangle triangle-bottom-left one"></div>
        </div>

        <div className="features-section reverse" style={{backgroundColor: '#5470C7'}}>
          <div className="features-section-container">
            <div className="features-text">
              <h2>Prioritize Important Contacts</h2>
              <p>Meeting with someone important? Don’t lose track of their information. Put a high visibility contact card on the Notepad.</p>
            </div>
            <div className="features-img">
              <img src="/assets/img/features-contact.png" className="img-responsive"/>
            </div>
          </div>
        </div>

        <div className="features-section" style={{backgroundColor: '#3D5291'}}>
          <div className="triangle triangle-top-left two"></div>
          <div className="features-section-container">
            <div className="features-text">
              <h2>Communicate Across Languages</h2>
              <p>Enterprises in Asia often have to interact with people from a variety of countries. We offer simple one-click translations of individual chat messages.</p>
              <p>Over 50 languages are supported so you'll never be left wondering what something means.</p>
            </div>
            <div className="features-img">
              <img src="/assets/img/features-translate.png" className="img-responsive"/>
            </div>
          </div>
          <div className="triangle triangle-bottom-left three"></div>
        </div>

        <div className="features-section reverse pb" style={{backgroundColor: '#2F3F70'}}>
          <div className="features-section-container">
            <div className="features-text">
              <h2>Work without Distractions</h2>
              <p>Another way to reduce phone calls, emails, and other interruptions of the day. Manage the path to your door by taking control of how information reaches you.</p>
            </div>
            <div className="features-img">
              <img src="/assets/img/features-notifications.png" className="img-responsive"/>
            </div>
          </div>
        </div>
        
        { this.renderMiscFeatures() }

        <Footer />

      </div>
    );
  }
}
