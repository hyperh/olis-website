import React from 'react';

import { Grid, Row, Col, Input } from 'react-bootstrap';
import RaisedButton from 'material-ui/lib/raised-button';

import FontIcon from 'material-ui/lib/font-icon';
import EyeIcon from 'material-ui/lib/svg-icons/image/remove-red-eye';
import TermsIcon from 'material-ui/lib/svg-icons/av/library-books';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div>
          <div className="contact-us">Contact Us</div>
          <div className="contact-email">
            <a href="mailto:info@getolis.com">
              <i className="glyphicon glyphicon-envelope" style={{marginRight: '10px', verticalAlign: 'middle'}}/>
              info@getolis.com
            </a>
          </div>
          <div className="footer-links">
            <div><a href="#"><EyeIcon color='white'/><br />Privacy</a></div>
            <div><a href="#"><TermsIcon color='white'/><br />Terms</a></div>
          </div>
          <div className="copyright-text">© 2016 OlisApp</div>
        </div>
      </div>
    );
  }
}
