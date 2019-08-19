import React, { useState } from 'react';
import {Tab, Tabs, Modal, Button, ModalBody} from 'react-bootstrap';



export default function SearchSaveModal (props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>

        
        <p>{props.firstname + " "}{props.lastname}</p>
        <p>{props.address}</p>
        {/* <p>{props.citizenId}</p>   */}
        
        

        <Button variant="primary" onClick={handleShow}>
        More details
      </Button>
      {/* <Modal.Title>X's record</Modal.Title> */}
      <Modal size="lg" 
            show={show} 
            onHide={handleClose} 
            dialogClassName="modal-150w"
            >
        <Modal.Header closeButton><Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="Biography" title="Biography">
           
        <Modal.Body class="modal-body">
            
                <ModalBody><b>Citizen Id:</b>{" " + props.citizenId}</ModalBody>
                
                <ModalBody><b>Name:</b> {"\n"} {" " + props.firstname + " "}{props.lastname}</ModalBody>
            
                <ModalBody><b>Address:</b>{" " + props.address}</ModalBody>

                <ModalBody><b>Sex:</b>{" " + props.sex}</ModalBody>

                <ModalBody><b>Place Of Birth:</b>{" " + props.placeOfBirth}</ModalBody>
            
                <ModalBody><b>Date Of Birth:</b>{" " + props.dateOfBirth}</ModalBody>
            
            
        </Modal.Body>

    
        
    </Tab>
    <Tab eventKey="Financial details" title="Financial details">
        
    <Modal.Body class="modal-body2">
            
            <ModalBody><b>Bank</b>{" " + props.bank}</ModalBody>
            
            <ModalBody><b>Bank card number:</b> {" " + props.bankCardNumber}</ModalBody>
        
            <ModalBody><b>Payee account:</b>{" " + props.payeeAccount}</ModalBody>

            <ModalBody><b>Transactions:</b>{" " + props.transactions}</ModalBody>

            
        
    </Modal.Body>

    </Tab>
    <Tab eventKey="ANPR" title="ANPR">
    
    <Modal.Body class="modal-body3">
            
            <ModalBody><b>ANPR Point Id:</b>{" " + props.anprPointId}</ModalBody>
            
            <ModalBody><b>Timestamp:</b> {" " + props.timestamp}</ModalBody>
        
            <ModalBody><b>Vehicle Registration number:</b>{" " + props.vehicleRegistrationNumber}</ModalBody>

            

            
    </Modal.Body>

    </Tab>
    
    <Tab eventKey="Associates" title="Associates">
    
    <Modal.Body class="modal-body2">
            
            <ModalBody><b>ANPR Point Id:</b>{" " + props.anprPointId}</ModalBody>
            
            <ModalBody><b>Timestamp:</b> {" " + props.timestamp}</ModalBody>
        
            <ModalBody><b>Vehicle Registration number:</b>{" " + props.vehicleRegistrationNumber}</ModalBody>

            

            
    </Modal.Body>
</Tab>
    
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
        <Modal.Footer class="modal-footer">
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