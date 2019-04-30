import React, { Component } from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    'background-color'    : '#242582',
    color                 : '#f64372'
  }
};


class CourseDates extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <section className="courseDates background-dpink tc pt3 pb5">
        <h2 className="white ma0">Course Dates</h2>
        <p className="f4 lh-copy">The course will run Tuesday and Thursday evenings, from 6-8pm, for three weeks</p>
        <p className="f4 bold lh-copy">Next course start date:</p>
        <h3 className="white f2">
          July 23rd
        </h3>
        <button 
          onClick={this.openModal}
          className="ph4">Register your interest</button>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-100 flex justify-between mt3 mb4">
            <h2 
              className="ma0"
              ref={subtitle => this.subtitle = subtitle}>Register interest</h2>
            <button 
              className="button f2 fr"
              onClick={this.closeModal}>close</button>
          </div>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfgbVODy7CoCKQ348rdzagNCRO8q2uAHL81oTMWmeZeNsWNrg/viewform?embedded=true" 
            width="640" 
            height="750" 
            frameborder="0" 
            marginheight="0"
            marginwidth="0">Loading...</iframe>
        </Modal>
      </section>
    )
  }
}

export default CourseDates;
