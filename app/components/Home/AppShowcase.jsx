import React from 'react';

import { Grid, Row, Col, Input } from 'react-bootstrap';

export default class AppShowcase extends React.Component {

  render() {
    return (
      <div className="app-showcase">
        <div className="section-title">Make chat productive.</div>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <div className="section-explanation">With our integrated chat and notepad solution, everyone in the team can now be on the same page no matter where they left off.</div>
            </Col>
          </Row>
        </Grid>
        <img
          src="/assets/img/main-app.png"
          alt="main app screenshot"
          className="img-responsive app-img"
        />
        <div className="white-bar"></div>
      </div>
    );
  }
}
