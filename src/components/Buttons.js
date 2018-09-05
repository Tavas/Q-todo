import React from 'react';
import ReactModal from 'react-modal';
import Input from './Input';
import './modals/Modal.css';

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
  
  handleCloseModal () {
    this.setState({ showModal: false });
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
        <button className="btn btn-primary ma1">Edit</button>
        <button className="btn btn-primary ma1">Delete</button>
     </div>
    );
  }
}

export default ButtonsModal;