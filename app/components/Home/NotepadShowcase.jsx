import React from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col, Input } from 'react-bootstrap';
import RaisedButton from 'material-ui/lib/raised-button';

export default class NotepadShowcase extends React.Component {

  render() {
    const highlightColor = "#00bcd4";
    return (
      <div className="notepad-showcase features">
        <div className="section-title">Introducing the Notepad.</div>
        <div className="section-explanation">No more scrolling up, the Notepad is the single place to summarize key decisions and action items for everyone to see.</div>

        <div className="features-section reverse">
          <div className="features-section-container">
            <div className="features-text">
              <div className="notepad-text">
                <h2>The Notepad is here</h2>
                <p>Don’t lose track of the important things you need to do in the chaos of chat.</p>
                <p>The Notepad allows your whole team to write meeting minutes, manage tasks, track packages, analyze spreadsheets, brainstorm, and much more.</p>
                <p>Collaborate conveniently in an easy to access location.</p>
              </div>

              <div className="notepad-text">
                <h2>Bots are here to help</h2>
                <p>Bots are your business’ best friend.</p>
                <p>The Notepad isn’t just limited to simple collaborative tools. We at Olis are constantly developing the next generation of enterprise-use smart bots that can help your company efficiently and effectively automate important work so your team can focus on being more productive.</p>
                <p>An API will also be available soon for companies to quickly develop their own special bots to handle their own unique problems.</p>              
              </div>

            </div>
            <div className="features-img">
              <img
                src="/assets/img/main-notepad.png"
                alt="main app screenshot"
                className="img-responsive notepad-img notepad-img-desktop"
              />
              <img
                src="/assets/img/main-notepad.png"
                alt="main app screenshot"
                className="img-responsive notepad-img notepad-img-mobile"
              />
            </div>
          </div>
        </div>

        <div className="white-bar"></div>
      </div>
    );
  }
}
