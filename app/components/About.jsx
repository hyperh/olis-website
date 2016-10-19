import React from 'react';
import $ from 'jquery';

import Footer from './common/Footer';
import Hexagon from './common/Hexagon';

export default class About extends React.Component {
  
  renderContactSection() {
    let hexagonSize = 360;
    if ($( window ).width() < 768) {
      hexagonSize = 260;
    }
    return (
      <div className="contact-section">
        <Hexagon
          size={hexagonSize}
          style={{margin: 'auto'}}
          // color="#34A0DE"
          color="rgba(8,190,213,0.5)"
        >
          <Hexagon
            size={hexagonSize * 0.9}
            style={{margin: 'auto'}}
            // color="#08BED5"
            color="rgba(8,190,213,1)"
          >
          <div className="contact-container">
            <div className="contact-title">Contact Us</div>
            <div className="contact-subtitle">Send us mail:</div>
            <div className="contact-email">
              <a href="mailto:info@getolis.com">
                info@getolis.com
              </a>
            </div>
          </div>
          </Hexagon>
        </Hexagon>
      </div>
    );
  }

  render() {
    return (
      <div className="about">
        <div className="about-header">
          <div className="about-header-container">
            <div className="text-content">
              <div className="title">Our Vision</div>
              <div className="subtitle">Breaking down barriers to save your company time and money.</div>
              <div className="description">
                <p>Olis brings a solution to the table to allow companies to harness the power and productivity of their workforce.</p>
                <p>Eliminate time-wasting meetings and say goodbye to overbearing email chains. You can cut through the noise and get to what you need to know.</p>
                <p>Olis will allow you to break down departmental barriers and seamlessly collaborate with your own team or even across different organizations.</p>
              </div>
            </div>
            <div className="img-content">
              <img src="assets/img/about-devices.png" alt="" className="img-responsive"/>
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="title-container">
            <h1>Meet the Team</h1>
            <h2>The people behind Olis.</h2>
          </div>
          <div className="members-container">
            <div className="member-item">
              <div className="member-face"><img src="assets/img/adrian.jpg" alt=""/></div>
              <div className="member-name">Adrian Li</div>
              <div className="member-role">Front-end development, Design</div>
              <div className="member-social"></div>
              <hr/>
              <div className="member-description">
                <p>Adrian holds a BASc in Mechanical Engineering from The University of Toronto and a JD in Law from The University of British Columbia in Canada.</p>
                <p>Having learned programming by himself as a teenager, he has always been passionate about solving problems and has built multiple websites and self-published two books online generating passive revenue. Adrian has also worked in the mining engineering industry.</p>
              </div>
            </div>
            <div className="member-item">
              <div className="member-face"><img src="assets/img/clifton.jpg" alt=""/></div>
              <div className="member-name">Clifton Cheung</div>
              <div className="member-role">Business Development</div>
              <div className="member-social"></div>
              <hr/>
              <div className="member-description">
                <p>Clifton has followed his passion for entrepreneurship founding numerous startups across various technology and manufacturing sectors both in the San Francisco Bay Area and across Asia. With over 13 years of business development and entrepreneurship experience.</p>
              </div>
            </div>
            <div className="member-item">
              <div className="member-face"><img src="assets/img/heyse.png" alt=""/></div>
              <div className="member-name">Heyse Li</div>
              <div className="member-role">Back-end development, Design</div>
              <div className="member-social"></div>
              <hr/>
              <div className="member-description">
                <p>Heyse holds a BASc and MASc in Industrial Engineering from The University of Toronto.</p>
                <p>During his time as a research associate, he published multiple academic papers on the subjects of applied optimization, machine learning, and lung cancer. He has also published several Android apps after teaching himself how to program.</p>
              </div>
            </div>
          </div>
        </div>

        { this.renderContactSection() }

        <Footer />
      </div>
    );
  }
}
