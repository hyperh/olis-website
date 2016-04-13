import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from 'components/App';
import Home from 'components/Home';
import Problems from 'components/Problems';
import About from 'components/About';
import Features from 'components/Features';

import $ from 'jquery';

const handleNewPageLoad = () => {
  // Scroll to top on new page loads
  window.scrollTo(0, 0);

  // Close the navbar menu if it is open
  const navCollapse = $('.navbar-collapse')[0];
  if ( navCollapse.classList.length === 3 ) {
    $('.navbar-toggle').click();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <Router history={hashHistory} onUpdate={handleNewPageLoad}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="features" component={Features} />
        <Route path="problems" component={Problems} />
      </Route>
    </Router>
  ), document.querySelector('#app'));
});
