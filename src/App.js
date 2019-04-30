import React, { Component } from 'react';
import './App.css';

import WhyLearn from './components/WhyLearn'
import WhatYouWillLearn from './components/WhatYouWillLearn'
import AboutTheInstructor from './components/AboutTheInstructor'
import ContactForm from './components/ContactForm'
import CourseDates from './components/CourseDates'
import Header from './components/Header'
import What from './components/What'

import logo from './images/blue-logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <What />
      <WhatYouWillLearn />
      
      <CourseDates />

      {/* <Where /> */}
      <WhyLearn/>
      <AboutTheInstructor />
      <ContactForm />
 
      </div>
    );
  }
}

export default App;
