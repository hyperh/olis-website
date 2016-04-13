import React from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/lib/raised-button';

import TimeIcon from 'material-ui/lib/svg-icons/device/access-time';
import FindIcon from 'material-ui/lib/svg-icons/action/find-in-page';
import DirectionIcon from 'material-ui/lib/svg-icons/maps/directions';

export default class Problems extends React.Component {

  render() {
    const highlightColor = '#FF4081';
    const iconStyle = {
      width: '64px',
      height: '64px',
      textAlign: 'center',
    };
    return (
      <div className="problems">
        <Grid>
          <Row>
            <Col sm={4}>
              <div className="problem-headline">What's wrong with existing chat solutions?</div>
            </Col>
            <Col sm={8}>
              <Row>
                <Col sm={4}>
                  <div className="problem-icon"><TimeIcon color={highlightColor} style={iconStyle}/></div>
                  <div className="problem-item-title">Wasting Time</div>
                  <div className="problem-item-desc">You feel chained to the software, not being able to step away without missing out.</div>
                </Col>
                <Col sm={4}>
                  <div className="problem-icon"><FindIcon color={highlightColor} style={iconStyle}/></div>
                  <div className="problem-item-title">Digging for Information</div>
                  <div className="problem-item-desc">Having to dig through 100s of messages trying to find key decisions and relevant takeaways.</div>
                </Col>
                <Col sm={4}>
                  <div className="problem-icon"><DirectionIcon color={highlightColor} style={iconStyle}/></div>
                  <div className="problem-item-title">Lacking Action</div>
                  <div className="problem-item-desc">Spending too much time chatting and not enough time making decisions and planning actions.</div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <div className="center">
              <Link to="/problems">
                <RaisedButton
                  label="Why do I even need chat?"
                  labelStyle={{color: highlightColor}}
                  style={{margin: '25px 0 25px'}}
                />
              </Link>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
