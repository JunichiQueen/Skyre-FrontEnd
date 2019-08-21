import React, { Component } from 'react';
import {Tab, Tabs, Modal, Button, ModalBody} from 'react-bootstrap';
import axios from 'axios';



export default class Individual extends Component {
    constructor(props){
        super();
        this.state={
            show: false,
            financeData: [],
            mobileData: [],
            vehicleData: []
        }
    }

    getFinance = () => {
        let forenames = "forenames=" + this.props.firstname + "&";
        let surname = "surname=" + this.props.lastname + "&";
        //let homeAddress = "homeAddress=" + this.props.address + "&";
        //let dateOfBirth = "dateOfBirth=" + this.props.dateOfBirth + "&";
        let appender = "" + forenames + surname;
        //console.log(appender);
        axios
        .get(`http://localhost:5000/Citizen/getFinance/${appender}`)
        .then(response => {
            this.setState({
                financeData: response.data
            })
        })
        .catch(err => console.log(err))
    }

    getMobile = () => {
        let forenames = "forenames=" + this.props.firstname + "&";
        let surname = "surname=" + this.props.lastname + "&";
        //let homeAddress = "homeAddress=" + this.props.address + "&";
        let appender = "" + forenames + surname;
        console.log(appender);
        axios
        .get(`http://localhost:5000/Citizen/getMobile/${appender}`)
        .then(response => {
            this.setState({
                mobileData: response.data
            })
        })
        .catch(err => console.log(err))
    }

    getVehicle = () => {
        let forenames = "forenames=" + this.props.firstname + "&";
        let surname = "surname=" + this.props.lastname + "&";
        //let homeAddress = "homeAddress=" + this.props.address + "&";
        let appender = "" + forenames + surname;
        axios
        .get(`http://localhost:5000/Citizen/getVehicle/${appender}`)
        .then(response => {
            this.setState({
                vehicleData: response.data
            })
        })
        .catch(err => console.log(err))
    }
  
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.getFinance();
        this.getMobile();
        this.getVehicle();
        this.setState({
            show: true
        })
    }

    render(){
        const {
            citizenId,
            firstname,
            lastname,
            address,
            dateOfBirth,
            placeOfBirth,
            sex,
        } = this.props;
        return (
            <div>
      
                <p>{firstname + " "}{lastname}</p>
                <p>{address}</p>               
                
                <Button variant="primary" onClick={this.handleShow}>
                More details
                </Button>
                <Modal size="lg" 
                    show={this.state.show} 
                    onHide={this.handleClose} 
                    dialogClassName="modal-150w"
                    >
                <Modal.Header closeButton>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="Biography" title="Biography">
                    
                        <Modal.Body class="modal-body">
                            
                                <ModalBody><b>Citizen Id:</b>{" " + citizenId}</ModalBody>
                                
                                <ModalBody><b>Name:</b> {"\n"} {" " + firstname + " "}{lastname}</ModalBody>
                            
                                <ModalBody><b>Address:</b>{" " + address}</ModalBody>

                                <ModalBody><b>Sex:</b>{" " + sex}</ModalBody>

                                <ModalBody><b>Place Of Birth:</b>{" " + placeOfBirth}</ModalBody>
                            
                                <ModalBody><b>Date Of Birth:</b>{" " + dateOfBirth}</ModalBody>
                            
                            
                        </Modal.Body>

                
                    
                    </Tab>
                    <Tab eventKey="Financial Details" title="Financial Details">
                    
                        <Modal.Body class="modal-body2">

                            <ModalBody><b>Bank Account Id:</b>{" " + this.state.financeData.map((item) => item.bankAccountId)}</ModalBody>

                            <ModalBody><b>Bank Account Number:</b> {" " + this.state.financeData.map((item => item.accountNumber))}</ModalBody>
                            
                            <ModalBody><b>Bank</b>{" " + this.state.financeData.map((item) => item.bank)}</ModalBody>                 
                            
                        
                        </Modal.Body>

                    </Tab>
                    <Tab eventKey="Mobile" title="Mobile">
                
                        <Modal.Body class="modal-body3">
                            
                            <ModalBody><b>Phone Number:</b>{" " + this.state.mobileData.map((item) => item.phoneNumber)}</ModalBody>
                            
                            <ModalBody><b>Network:</b> {" " + this.state.mobileData.map((item) => item.network)}</ModalBody>

                        </Modal.Body>

                    </Tab>
                
                    <Tab eventKey="ANPR" title="ANPR">
                
                        <Modal.Body class="modal-body2">
                            
                            <ModalBody><b>Registration Id:</b>{" " + this.state.vehicleData.map((item) => item.registrationId)}</ModalBody>

                            <ModalBody><b>Drivers License Id:</b> {" " + this.state.vehicleData.map((item) => item.driverLicenceId)}</ModalBody>
                            
                            <ModalBody><b>Vehicle Registration No:</b> {" " + this.state.vehicleData.map((item) => item.vehicleRegistrationNo)}</ModalBody>

                            <ModalBody><b>Registration Date:</b> {" " + this.state.vehicleData.map((item) => item.registrationDate)}</ModalBody>

                            <ModalBody><b>Make:</b> {" " + this.state.vehicleData.map((item) => item.make)}</ModalBody>

                            <ModalBody><b>Model:</b> {" " + this.state.vehicleData.map((item) => item.model)}</ModalBody>

                            <ModalBody><b>Colour:</b> {" " + this.state.vehicleData.map((item) => item.colour)}</ModalBody>

                        </Modal.Body>
                    </Tab>
                
                </Tabs>
                
                <Modal.Title></Modal.Title>
                </Modal.Header>


                    <Modal.Footer class="modal-footer">
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
    );       

    }
}