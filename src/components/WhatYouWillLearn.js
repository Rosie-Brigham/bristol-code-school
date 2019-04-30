import React, { Component } from 'react';

class WhatYouWillLearn extends Component {
  render() {
    return (
      <section className="background-light-blue flex flex-wrap pb4 pb6-ns w-100">
        <h2 className="f2 f1-ns center tc ma0 pv4 w-100 pink">What you will learn</h2>
        <div className="w-100 w-50-ns tc tr-ns f3">
          <h3 className="ma0 ph4 pv3 pink">HTML</h3>
        </div>
        <div className="w-100 w-50-ns">
          <p className="ph4 pl3-ns pr6-ns lh-copy">
            Start off by learning to how create simple and effective HTML, the most basic building block of web pages.
          </p>
        </div>
        <div className="w-100 w-50-ns tc tr-ns f3">
          <h3 className="ma0 ph4 pv3 pink">CSS</h3>
        </div>
        <div className="w-100 w-50-ns">
          <p className="ph4 pl3-ns pr6-ns lh-copy">
            Introduce design onto your website by adding simple but effective styles. We will go over the latest developments so you can get the most dramatic designs.
          </p>
        </div>
        <div className="w-100 w-50-ns tc tr-ns f3">
          <h3 className="ma0 ph4 pv3 pink">Github</h3>
        </div>
        <div className="w-100 w-50-ns">
          <p className="ph4 pl3-ns pr6-ns lh-copy">
            Learn how to store, manage and share your code like a pro, and publish your website on github pages.
          </p>
        </div>
        <div className="w-100 w-50-ns tc tr-ns f3">
          <h3 className="ma0 ph4 pv3 pink">Javascript</h3>
        </div>
        <div className="w-100 w-50-ns">
          <p className="ph4 pl3-ns pr6-ns lh-copy">
            Add some functionality to your site with one of the most popular programming languages, Javascript. We will look at 'traditional' javascript, as well as librarys such as jquery and look at frameworks like react.
          </p>
        </div>
        <div className="w-100 w-50-ns tc tr-ns f3">
          <h3 className="ma0 ph4 pv3 pink">Designed for you</h3>
        </div>
        <div className="w-100 w-50-ns">
          <p className="ph4 pl3-ns pr6-ns lh-copy">
            Have a project at work? A website you want to copy? Tell us and we will try and design the syllabus either to support you building your dream website or give you the know-how for all the latest buzzwords to secure that next promotion.
          </p>
        </div>
      </section>
    )
  }
}

export default WhatYouWillLearn;
