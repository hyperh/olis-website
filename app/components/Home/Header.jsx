import React from 'react';
import $ from 'jquery';

import { Grid, Row, Col, Input } from 'react-bootstrap';
import RaisedButton from 'material-ui/lib/raised-button';

import RotatingText from 'react-rotating-text';

export default class Header extends React.Component {

  render() {
    const words = [
      'noise',
      'distractions',
      'time wasted',
      'clutter',
      'chaos',
    ];
    return (
      <div className="header">
        <div className="header-content">
          <Grid>
            <Row>
              <Col sm={10} smOffset={1}>
                <div className="headline">
                  <span>Effective team collaboration <div className="headline-break"/>without all the <RotatingText items={words} color="#FF4081"/></span>
                </div>
                <div className="headline-blurb">Easily chat and extract key takeaways in one simple interface.</div>
              </Col>
            </Row>
            <Row style={{marginTop: '50px'}}>
              <Col sm={4} smOffset={2}>
                <Input type="email" placeholder="Enter email" className="headline-input"/>
              </Col>
              <Col sm={4}>
                <RaisedButton
                  label="Get on the waiting list!"
                  primary={true}
                  fullWidth={true}
                  style={{height: '50px'}}
                />
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="triangle-left"></div>
        <div className="triangle-right"></div>
      </div>
    );
  }
}
