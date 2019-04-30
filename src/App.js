import React, { Component } from 'react';
import './App.css';

import WhyLearn from './components/WhyLearn'
import WhatYouWillLearn from './components/WhatYouWillLearn'
import AboutTheInstructor from './components/AboutTheInstructor'
import ContactForm from './components/ContactForm'
import CourseDates from './components/CourseDates'
import Header from './components/Header'

import logo from './images/blue-logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <section className="about split-background pv5">
        <div className="w-100 w-60-ns pv4 ph5 ml6 background-dpink lh-copy">
          <p className="f3">
            Always wanted to learn to code but never got round to it? Here's your chance!
          </p>
          <p className="f3">
            Bristol Code School is designed around you, empowering you to make better technical decisions.
          </p>
          <p className="f3">
            In this 3 week course you will learn all about web development and how to create and publish your own website, from scratch!
          </p>
        </div>
      </section>

      <WhyLearn/>
      <CourseDates />
      <WhatYouWillLearn />
      <AboutTheInstructor />
      <ContactForm />
 
      </div>
    );
  }
}

export default App;
