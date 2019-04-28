import React, { Component } from 'react';

class AboutTheInstructor extends Component {
  render() {
    return (
      <section className="background-dpink ph6 pv5 flex flex-wrap">
        <div className="w-20">
          <img 
            src="https://rosie-brigham.github.io/images/mecodesquare.jpg" 
            className="br-100" 
          />
        </div>
        <div className="w-60 ph5 lh-copy">
          <p className="grey">
            Rosie first learnt to code in 2013 after graduating from History of Art as a devout technophobe. She discovered that programming and 'computer stuff' didn't have to be scary and inaccessible, but rather fun and empowering.
            </p>
            <p className="grey">
            She has been working as a programmer and teaching people how to code ever since. She has previously worked with educational companies such as Decoded, Code First: Girls, Superhi and Enspiral Dev Academy before setting up Bristol Code School.
          </p>
        </div>
        <div className="w-20 grey">
          <h2 className="f1">About the Instructor</h2>
        </div>
      </section>
    )
  }
}

export default AboutTheInstructor;
