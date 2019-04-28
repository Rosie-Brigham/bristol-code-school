import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <section>
        <h2 className="f1 center tc pink background-blue ma0 pv5">Questions or queries? Give us a bell!</h2>
        <div className="background-blue">
          <form action="https://formspree.io/rosiebrigham@gmail.com" method="POST" />
          <form className="w-40 center flex flex-wrap">
            
            <input className="w-100 pa2 ma3" type="text" id="name" name="firstname" placeholder="Your name"/>

            <input className="w-100 pa2 ma3" type="text" id="email" name="lastname" placeholder="Your email address"/>

            <input className="w-100 pa2 ma3 h3" type="text" id="lname" name="lastname" placeholder="Fill me with questions!"/>

            <input className="submit center ph5 pv3  mv5" type="submit" value="Submit"/>

          </form>


        </div>
      </section>
    )
  }
}

export default ContactForm;
