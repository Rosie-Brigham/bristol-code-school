import React, { Component } from 'react';
// import './App.css';

// import logo from './images/blue-logo.png'

class WhyLearn extends Component {
  render() {
    return (
      <section className="why-learn  background-blue">
        <h2 className="center tc ma0 pt4 pb3 w-100 pink background-blue">Why learn to Code?</h2>

        <section className="why-learn-scroll pt5 h-100 ">  
          <div className="mh6 why-one">
            <h3 className="grey f1 mt0">Stand out from the crowd</h3>
            <p className="grey w-60 f2 lh-copy ">
              A basic knowledge of programming is crucial to the modern workplace. It is the extra string to your bow that is crucial in small creative companies where your job encompasses a little bit of everything.
            </p>
          </div>

          <div className="why-two">
            <div className="fr tr w-60">
              <h3 className="grey f1 mt0">Understand other aspects of tech</h3>
              <p className="grey f2 lh-copy">
                Knowledge of programming processes will enable you to engage in other concepts that underpin the tech you encounter everyday. Learning how to code doesn't have to lead into being a programmer, but improving digital literacy can be invaluble. 
              </p>
            </div>
          </div>

          <div className="why-three">
            <h3 className="grey f1 mt0">Empower yourself</h3>
            <p className="grey f2 w-50 lh-copy">
              Have hundred of ideas the next big thing? Learn to code so you can make that dream your reality without having to rely on someone else. 
            </p>
          </div>

          <div className="why-four">
            <div className="fr tr w-60">
              <h3 className="pink f1 mt0">You can do it</h3>
              <p className="grey f2 lh-copy">
                Coding isn't a club only for elite mathematicians, but something that anyone can pick up with time and patience, just like any other skill
              </p>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default WhyLearn;
