import React, {useState, Modal, Button } from 'react';
import Axios from 'axios';
import { default as NumberFormat } from 'react-number-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentes/modalpagamentos.css'
import ModalPagamentos from '../componentes/ModalPagamentos'

const Pagamentos = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalPagamentos