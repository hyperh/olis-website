import React from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col, Input } from 'react-bootstrap';
import RaisedButton from 'material-ui/lib/raised-button';

export default class NotepadShowcase extends React.Component {

  render() {
    const highlightColor = "#00bcd4";
    return (
      <div className="notepad-showcase">
        <div className="section-title">Introducing the Notepad.</div>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <div className="section-explanation">No more scrolling up, the Notepad is the single place to summarize key decisions and action items for everyone to see.</div>
            </Col>
          </Row>
          <Row>
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
          </Row>
          <Row>
            <div className="center">
              <Link to="/features">
                { /*
                <RaisedButton
                  label="Take a closer look"
                  labelStyle={{color: highlightColor}}
                  style={{marginTop: '50px'}}
                />
              */}
              </Link>
            </div>
          </Row>
        </Grid>
        <div className="white-bar"></div>
      </div>
    );
  }
}
