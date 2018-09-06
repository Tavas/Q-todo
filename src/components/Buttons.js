import React from 'react';
import ReactModal from 'react-modal';
import Input from './Input';
import './modals/Modal.css';

const firebase = require("firebase");
require("firebase/firestore");

const $ = require('jquery');
$.DataTable = require('datatables.net');

ReactModal.setAppElement('#root')

class ButtonsModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  deleteOnClick () {
   $('#main').DataTable().row('.selected').remove().draw();
}
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  addUser(user) {
      firebase.firestore().collection("tasks").doc(user.id).set({
          jobtitle: user.jobtitle,
          description: user.description,
          created: new Date() * 1000
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      }); 
  }

  onAddClick(id, jobtitle, description, created) {
      this.addUser({
       id : id, 
       jobtitle : jobtitle,
       description : description, 
       created : created
     })
  }
 
  render() {
    return (
      <div className="center">
        <button onClick={this.handleOpenModal} 
            className="btn btn-primary ma1">
            Add</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Add Modal"
           shouldCloseOnOverlayClick={true}
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay">
            <button onClick={this.handleCloseModal} 
            className="btn btn-secondary f2m ma2 fr tc">
            Close</button>
            <Input onAddClick={(id, jobtitle, description, created) => {
             this.onAddClick(id, jobtitle, description, created);}} />
        </ReactModal>
        <button className="btn btn-info ma1">Edit</button>
        <button onClick={this.deleteOnClick} className="btn btn-danger ma1">Delete</button>
     </div>
    );
  }
}

export default ButtonsModal;