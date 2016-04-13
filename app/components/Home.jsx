import React from 'react';
import $ from 'jquery';

import Header from './Home/Header';
import Problems from './Home/Problems';
import AppShowcase from './Home/AppShowcase';
import NotepadShowcase from './Home/NotepadShowcase';
import CTA from './Home/CTA';
import Footer from './common/Footer';

export default class Home extends React.Component {

  scrollHandler = () => {
    const interval = [50, 200];
    const transitionPercentage = ($(window).scrollTop() - interval[0]) / (interval[1] - interval[0]);

    if (transitionPercentage < 0) {
      $('.navbar').css('background-color','transparent');
    } else if (transitionPercentage > 1) {
      $('.navbar').css('background-color','#313f70');
    } else {
      $('.navbar').css('background-color',`rgba(49,63,112,${transitionPercentage})`);
    }
  }

  componentDidMount = () => {
    $('#content').css('margin-top','0');
    $(window).on("scroll", this.scrollHandler);
    if ($(window).scrollTop() === 0) {
      $('.navbar').css('background-color','transparent');
    }
    const viewportHeight = $(window).height();
    $('.header').css('height', `${viewportHeight}px`);
  }

  componentWillUnmount() {
    $('.navbar').css('background-color','#313f70');
    $('#content').css('margin-top','50px');
    $(window).off("scroll", this.scrollHandler);
  }

  render() {
    return (
      <div className="home">
        <Header />
        <Problems />
        <AppShowcase />
        <NotepadShowcase />
        <CTA />
        <Footer />
      </div>
    );
  }
}
