import React, { Component } from 'react';

class AboutTheInstructor extends Component {
  render() {
    return (
      <section id="#who" className="background-dpink ph3 ph6-ns pv5 flex flex-column-reverse flex-wrap-ns">
        <div className="center w-80 w-20-ns">
          <img 
            src="https://rosie-brigham.github.io/images/mecodesquare.jpg" 
            className="br-100" 
          />
        </div>
        <div className="w-100 w-60-ns ph3 ph5-ns lh-copy">
          <p className="grey">
            Rosie first learnt to code in 2013 after graduating from History of Art as a devout technophobe. She discovered that programming and 'computer stuff' didn't have to be scary and inaccessible, but rather fun and empowering.
            </p>
            <p className="grey">
            She has been working as a programmer and teaching people how to code ever since. She has previously worked with educational companies such as Decoded, Code First: Girls, Superhi and Enspiral Dev Academy before setting up Bristol Code School.
          </p>
        </div>
        <div className="w-100 w-20-ns tc grey">
          <h2 className="f1">About the Instructor</h2>
        </div>
      </section>
    )
  }
}

export default AboutTheInstructor;
