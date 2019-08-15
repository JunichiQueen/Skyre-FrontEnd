import React, { useState } from 'react';
import {Container, Tab, Tabs, Nav, Col, Row, Modal, Button, ModalBody} from 'react-bootstrap';



export default function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div >
          
         {/* <p>{this.props.firstname}</p>
         <p>{this.props.lastname}</p>
         <p>{this.props.address}</p>  */}
        <Button variant="primary" onClick={handleShow}>
        More details
      </Button>
      {/* <Modal.Title>X's record</Modal.Title> */}
      <Modal size="lg" 
            show={show} 
            onHide={handleClose} 
            dialogClassName="modal-150w">
        <Modal.Header closeButton><Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab 
    // style = {{
    //     display: 'flex',
    //     allignItems: 'center',
    //     justifyContent: 'center',
    // }}
        eventKey="Biography" title="Biography">
     
    <Modal.Body>
        
           <Modal.Title>Name:</Modal.Title>
            <ModalBody>Josh</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Address:</Modal.Title>
            <ModalBody>123 Fake street</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Place of birth: </Modal.Title>
            <ModalBody>India</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Date of birth:</Modal.Title>
            <ModalBody>03/01/1994</ModalBody>
        </Modal.Body>
        
    </Tab>
    <Tab eventKey="Financial details" title="Financial details">
        <Modal.Body>
            <Modal.Title>Bank:</Modal.Title>
            <ModalBody>HSBC</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Bank card number:</Modal.Title>
            <ModalBody>123543</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Payee account:</Modal.Title>
            <ModalBody>India</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Transactions:</Modal.Title>
            <ModalBody></ModalBody>
        </Modal.Body>
    </Tab>
    <Tab eventKey="ANPR" title="ANPR">
    <Modal.Body>
            <Modal.Title>ANPRPointId</Modal.Title>
            <ModalBody>1</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Timestamp:</Modal.Title>
            <ModalBody>14:20:53</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Vehicle registration number</Modal.Title>
            <ModalBody>India</ModalBody>
        </Modal.Body>
    </Tab>
    <Tab eventKey="Associates" title="Associates">
    <Modal.Body>
            <Modal.Title>Associate 1</Modal.Title>
            <ModalBody>Jane doe</ModalBody>
        </Modal.Body>
        
    </Tab>
    <Modal.Body>
            <Modal.Title>Bank:</Modal.Title>
            <ModalBody>HSBC</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Bank card number:</Modal.Title>
            <ModalBody>123543</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Payee account:</Modal.Title>
            <ModalBody>India</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Transactions:</Modal.Title>
            <ModalBody></ModalBody>
        </Modal.Body>
    <Tab eventKey="Location" title="Location">
    </Tab>   
</Tabs>
          
          <Modal.Title></Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
            <Modal.Title>Name:</Modal.Title>
            <ModalBody>Josh</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Address:</Modal.Title>
            <ModalBody>123 Fake street</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Place of birth: </Modal.Title>
            <ModalBody>India</ModalBody>
        </Modal.Body>
        <Modal.Body>
            <Modal.Title>Date of birth:</Modal.Title>
            <ModalBody>03/01/1994</ModalBody>
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }