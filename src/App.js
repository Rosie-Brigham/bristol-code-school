import React, { Component } from 'react';
import './App.css';

import logo from './images/blue-logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={logo} 
            alt="Bristol Code School"
            className="main-logo vw-100" />
        </header>
        <section className="strapline background-pink">
          <h1 className="f1 tc blue">
            Bristol based coding tution, tailored to your needs
          </h1>
        </section>
        <section className="enrol">
          <button className="yellow tc">Book your place now!</button>
        </section>
        <section>
          About
        </section>
        <section>
          syllabus
        </section>
        <section>
          enrol again
        </section>
      </div>
    );
  }
}

export default App;
