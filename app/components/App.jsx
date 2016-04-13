import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Olis</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li><Link to="/problems">Why Use a Chat Tool?</Link></li>
              {/*<li><Link to="/features">Features</Link></li>*/}
              <li><Link to="/about">About Us</Link></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div id="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}
