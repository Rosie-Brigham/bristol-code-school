import React, { Component } from 'react';
import logo from '../images/blue-logo.png'

class Header extends Component {
  render() {
    return (
      <section>
        <header 
          className="App-header 100vh">
          <div className="vh-50 vh-75-ns flex items-center">
            <img 
              src={logo} 
              alt="Bristol Code School"
              className="main-logo w-100" />
          </div>

          <div className="flex flex-column flex-row-ns">
            <h1 className="f2 f1-ns w-50-ns vh-25 ma0 ph6-ns tc white  background-blue flex items-center ">
              Bristol based coding tuition, tailored to you
            </h1>

            <div className="vh-25 flex items-center w-50-ns blue-background-ns">
              <a href="#courseDates" className="f2 f3-ns button center w-70 tc">Enrol now!</a>
            </div>
          </div>

        </header>
      </section>
    )
  }
}

export default Header;
