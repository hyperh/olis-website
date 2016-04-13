import React from 'react';

import { Grid, Row, Col, Input } from 'react-bootstrap';
import RaisedButton from 'material-ui/lib/raised-button';

import RotatingText from 'react-rotating-text';

export default class CTA extends React.Component {

  render() {
    const words = [
      'productive',
      'efficient',
      'actionable',
      'precise',
    ]
    return (
      <div className="cta">
        <div>
          <Grid>
            <Row>
              <Col sm={10} smOffset={1}>
                <div className="section-title">Chat less.<br />Be more <RotatingText items={words} color="#00bcd4"/></div>
              </Col>
            </Row>
            <Row>
              <Col sm={4} smOffset={2}>
                <Input type="email" placeholder="Enter email" className="cta-input"/>
              </Col>
              <Col sm={4}>
                <RaisedButton
                  label="Get on the waiting list!"
                  secondary={true}
                  fullWidth={true}
                  style={{height: '50px'}}
                />
                </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
