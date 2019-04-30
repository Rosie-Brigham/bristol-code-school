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

// Modal.setAppElement('questionModal')

class ContactForm extends Component {
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
      <section className="pink background-blue pv5">
        <h2 className="f0 center tc ma0 pb5">Questions or queries?</h2>
        <button 
          onClick={this.openModal}
          id="question-submit" 
          className="button pa3 ph4 flex center">Give us a bell!</button>

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
              ref={subtitle => this.subtitle = subtitle}>Give us a bell!</h2>
            <button 
              className="button f2 fr"
              onClick={this.closeModal}>close</button>
          </div>
          <iframe 
            id="questionIFrame"
            className="flex"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeA2FEap0pG0UVyWXtqPZklM75Lyr31kSJ92F9d3ELd4FbJ9w/viewform?embedded=true" 
            width="640" 
            height="650" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading...</iframe>
        </Modal>
      </section>
    )
  }
}

export default ContactForm;
