import React, { Component } from 'react';
import './App.css';

import logo from './images/blue-logo.png'
import balloon from './images/hot-air-balloon.jpg'
import ballonThree from './images/balloon3.jpg'
import blueBalloon from './images/blue-balloon.jpg'
// import codeImage from './images-codimage.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header 
        className="App-header"
        >
        <img 
          src={logo} 
          alt="Bristol Code School"
          className="main-logo vw-100" />
      </header>
      <section className="flex flex-wrap">
        <div className="strapline background-blue w-100 w-50-ns vh-25 flex justify-center items-center pa3">
          <h1 className="f3 f1-ns tc grey ma0 ">
            Bristol based coding tution, tailored to your needs
          </h1>
        </div>
        <div className="enrol background-blue w-100 w-50-ns vh-25 flex justify-center items-center">
          <button className="f3 f1-ns pink tc br2 ph4 pv2 border-pink">Enrol now!</button>
        </div>
      </section>


      <section className="about split-background pv5">
        <div className="w-100 w-60-ns pv4 ph5 ml6 background-dpink lh-copy">
          <p className="f3">
            Always wanted to learn to code but never got round to it? Here's your chance!
          </p>
          <p className="f3">
            Having a basic level of technical literacy is fundamental to getting your million pound project off the ground.    
          </p>
          <p className="f3">
            Bristol Code School is design around you, to give you the tools to empower you to make better technical decisions.
          </p>
          <p className="f3">
          In this 3 week course you will learn all about web development and create and publish your own website, from scratch!
          </p>
        </div>
        {/* <div className="w-100 w-50-ns">
          <img src={balloon} className="w-100"/>
        </div> */}
      </section>

      <section className="why-learn vh-100 background-blue">
        <h2 className="f1 center tc ma0 pt6 pb5 w-100 grey">Why learn to Code?</h2>

        <div className="mh6 why-one">
          <h3 className="grey f2">Stand out from the crowd</h3>
          <p className="grey w-50 f3 lh-copy ">
            A basic knowledge of programming is crucial to the modern workplace. It is the extra string to your bow that will be key to any jobs that touch the tech sector, especially in small creative companies where your job encompasses a little bit of everything.
          </p>
        </div>

        <div className="why-two">
          <div className="fr tr w-60">
            <h3 className="grey f2">Understand other aspects of tech</h3>
            <p className="grey f3 lh-copy">
              Knowledge of process of programming will mean you can learn other aspects of how tech works quicker. Learning how to code doesn't have to lead into being a programmer, but gaining a digital literacy that can be invaluble. 
            </p>
          </div>
        </div>

        <div className="why-three">
          <h3 className="grey f2">Empower yourself</h3>
          <p className="grey f3 w-50 lh-copy">
            Have hundered of ideas the next big thing? Learn to code so you can make that dream your reality without hving to rely on someone else. 
          </p>
        </div>

        <div className="why-four">
          <div className="fr tr w-60">
            <h3 className="grey f2">You can do it</h3>
            <p className="grey f2 lh-copy">
              Coding isn't a club only for elite mathematicians, but a set of skills that anyone can pick up with some time and patience, just like any other skill
            </p>
          </div>
        </div>
        
      </section>

      <section className="background-light-blue flex flex-wrap pb6 w-100">
        <h2 className="f1 center tc ma0 pv4 w-100 pink">What you will learn</h2>
        <div className="w-50 tr f3">
          <h3 className="ma0 ph4 pv3 pink">HTML</h3>
        </div>
        <div className="w-50">
          <p className="pl3 pr6 lh-copy">
            Start off by learning to how create simple and effective semantically written HTML, the most basic building block of web pages
          </p>
        </div>
        <div className="w-50 tr f3">
          <h3 className="ma0 ph4 pv3 pink">CSS</h3>
        </div>
        <div className="w-50">
          <p className="pl3 pr6 lh-copy">
            Introduce design onto your website by adding simple but effective styles. We will go over the latest developments so you can get the most dramatic designs
          </p>
        </div>
        <div className="w-50 tr f3">
          <h3 className="ma0 ph4 pv3 pink">Github</h3>
        </div>
        <div className="w-50">
          <p className="pl3 pr6 lh-copy">
            Learn how to store, manage and share your code like a pro, and publish your website on github pages
          </p>
        </div>
        <div className="w-50 tr f3">
          <h3 className="ma0 ph4 pv3 pink">Javascript</h3>
        </div>
        <div className="w-50">
          <p className="pl3 pr6 lh-copy">
            Add some functionality to your site with one of the most popular programming languages, Javascript. We will look at 'traditional' javascript, as well as librarys such as jquery and look at frameworks like react.
          </p>
        </div>
        <div className="w-50 tr f3">
          <h3 className="ma0 ph4 pv3 pink">Designed for you</h3>
        </div>
        <div className="w-50">
          <p className="pl3 pr6 lh-copy">
            Have a project at work? A website you want to copy? Tell us and we will try and design the syllabus either to support you building your dream website or give you the know-how for all the latest buzzwords to secure that next promotion.
          </p>
        </div>
      </section>
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

      <section>
        <h2 className="f1 center tc pink background-blue ma0 pv5">Questions or queries? Give us a bell!</h2>
        <div className="background-blue">
          <form className="w-40 center flex flex-wrap">
            <input className="w-100 pa2 ma3" type="text" id="name" name="firstname" placeholder="Your name"/>

            <input className="w-100 pa2 ma3" type="text" id="email" name="lastname" placeholder="Your email address"/>

            <input className="w-100 pa2 ma3 h3" type="text" id="lname" name="lastname" placeholder="Fill me with questions!"/>
          
            <input className="submit center ph5 pv3  mv5" type="submit" value="Submit"/>
          </form>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
