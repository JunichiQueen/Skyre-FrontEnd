import React, { Component } from 'react';
import { Tab, Tabs, Modal, Button, p } from 'react-bootstrap';
import axios from 'axios';

var URL = require('../User/const');

export default class Individual extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
            financeData: [],
            mobileData: [],
            vehicleData: [],
            associateData: [],
            vehicleLocationData: [],
            transactionData: []
        }
    }

    getFinance = () => {

        const accessString = localStorage.getItem('JWT');

        let forenames = "forenames=" + this.props.firstname + "&";
        let surname = "surname=" + this.props.lastname + "&";
        let toSend = "" + forenames + surname;

        axios.get(`${URL.URL}/scenario1/getFinance?${toSend}`, {
            headers: { Authorization: `JWT ${accessString}` },
        }).then(response => {
            let accountNumber = "accountNumber=" + response.data[0].accountNumber
            this.setState({
                financeData: response.data
            })
            axios.get(`${URL.URL}/scenario1/getTransactions?${accountNumber}`, {
                headers: { Authorization: `JWT ${accessString}`},
            }).then(response => {
                this.setState({
                    transactionData: response.data
                })
            }).catch(e => console.log(e))
        }).catch(e => {
            console.log(e);
        })
    }

    getMobile = () => {

        const accessString = localStorage.getItem('JWT');

        let forenames = "forenames=" + this.props.firstname + "&";
        let surname = "surname=" + this.props.lastname + "&";
        let toSend = "" + forenames + surname;

        axios.get(`${URL.URL}/scenario1/getMobile?${toSend}`, {
            headers: { Authorization: `JWT ${accessString}` },
        }).then(response => {
            let phoneNumber = "phoneNumber=" + response.data[0].phoneNumber
            this.setState({
                mobileData: response.data
            })
            axios.get(`${URL.URL}/scenario1/getAssociates?${phoneNumber}`, {
                headers: { Authorization: `JWT ${accessString}`},
            }).then(response => {
                this.setState({
                    associateData: response.data
                })
            }).catch(e => {
                console.log(e)
            })

        }).catch(e => {
            console.log(e);
        })
    }

    getVehicle = () => {

        const accessString = localStorage.getItem('JWT');

        let forenames = "forenames=" + this.props.firstname + "&";
        let surname = "surname=" + this.props.lastname + "&";
        let toSend = "" + forenames + surname;

        axios.get(`${URL.URL}/scenario1/getVehicle?${toSend}`, {
            headers: { Authorization: `JWT ${accessString}` },
        })
            .then(response => {
                let vehicleRegistrationNo = "vehicleRegistrationNo=" + response.data[0].vehicleRegistrationNo
                this.setState({
                    vehicleData: response.data
                })
                axios.get(`${URL.URL}/scenario1/getVehicleLocation?${vehicleRegistrationNo}`, {
                    headers: { Authorization: `JWT ${accessString}` },
                })
                .then(response => {
                    this.setState({
                        vehicleLocationData: response.data
                    })                    
                }).catch(e => console.log(e))
            }).catch(e => {
                console.log(e);
            })
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

    render() {
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

                <p style={{ color: "#f1f1f1"}}>{firstname + " "}{lastname}</p>
                <p style={{ color: "#f1f1f1"}}>{address}</p>

                <Button variant="primary" onClick={this.handleShow}>
                    More Details
                </Button>
                <Modal size="lg"
                    show={this.state.show}
                    onHide={this.handleClose}
                    dialogClassName="modal-150w"
                >
                    <Modal.Header closeButton><Modal.Title>{firstname}'s Details</Modal.Title>
                    </Modal.Header>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            
                            <Tab eventKey="Biography" title="Biography">

                                <div className="div">

                                    <br></br>

                                    <p><b>Citizen Id:</b>{" " + citizenId}</p>

                                    <p><b>Name:</b> {"\n"} {" " + firstname + " "}{lastname}</p>

                                    <p><b>Address:</b>{" " + address}</p>

                                    <p><b>Sex:</b>{" " + sex}</p>

                                    <p><b>Place Of Birth:</b>{" " + placeOfBirth}</p>

                                    <p><b>Date Of Birth:</b>{" " + dateOfBirth}</p>

                                </div>

                            </Tab>
                            
                            <Tab eventKey="Financial Details" title="Financial Details">

                                <div className="div">

                                    <br></br>

                                    {this.state.financeData.map((item) => (
                                        <div style={{ border: "3px dotted green"}}>
                                            <h6>Bank Information</h6>
                                            <p><b>Bank Account Id:</b>{" " + item.bankAccountId}</p>
                                            <p><b>Bank:</b>{" " + item.bank}</p>
                                            <p><b>Bank Account Number:</b>{" " + item.accountNumber}</p>
                                        </div>
                                    ))}

                                    {this.state.transactionData.map((item) => (
                                        <div style={{ border: "3px dotted blue"}}>
                                            <h6>Transaction</h6>
                                            <p><b>Bank Account Number:</b>{" " + item.accountNumber}</p>
                                            <p><b>StreetName:</b>{" " + item.streetName}</p>
                                            <p><b>Latitude:</b>{" " + item.latitude}</p>
                                            <p><b>Longitude:</b>{" " + item.longitude}</p>
                                            <p><b>Company:</b>{" " + item.company}</p>
                                            <p><b>Type:</b>{" " + item.type}</p>
                                            <p><b>Amount:</b>{" " + item.amount}</p>
                                            <p><b>TimeStamp:</b>{" " + item.timestamp}</p>
                                        </div>
                                    ))}

                                </div>

                            </Tab>

                            <Tab eventKey="Mobile" title="Mobile">

                                <div className="div">

                                    <br></br>

                                    {this.state.mobileData.map((item) => (
                                        <div>
                                            <br></br>
                                            <p><b>Phone Number:</b>{" " + item.phoneNumber}</p>
                                            <p><b>Network:</b>{" " + item.network}</p>
                                            <br></br>
                                        </div>
                                    ))}

                                </div>

                            </Tab>

                            <Tab eventKey="Vehicle" title="Vehicle">

                                <div className="div">

                                    <br></br>

                                    {this.state.vehicleData.map((item) => (
                                        <div style={{ border: "3px dotted green" }}>
                                            <h6>Vehicle Information</h6>
                                            <p><b>Registration Id:</b>{" " + item.registrationId}</p>
                                            <p><b>Registration Date:</b>{" " + item.registrationDate}</p>
                                            <p><b>Drivers License Id:</b>{" " + item.driverLicenceId}</p>
                                            <p><b>Make:</b>{" " + item.make}</p>
                                            <p><b>Model:</b>{" " + item.model}</p>
                                            <p><b>Colour:</b>{" " + item.colour}</p>
                                            <p><b>Vehicle Registration No:</b>{" " + item.vehicleRegistrationNo}</p>
                                        </div>                                            
                                    ))}

                                    {this.state.vehicleLocationData.map((item) => (
                                        <div style={{ border: "3px dotted blue"}}>
                                            <h6>Vehicle Location</h6>
                                            <p><b>Vehicle Registration No:</b>{" " + item.vehicleRegistrationNo}</p>
                                            <p><b>StreetName:</b>{" " + item.streetName}</p>
                                            <p><b>Latitude:</b>{" " + item.latitude}</p>
                                            <p><b>Longitude:</b>{" " + item.longitude}</p>
                                            <p><b>TimeStamp:</b>{" " + item.timestamp}</p>
                                        </div>
                                    ))}

                                </div>
                            </Tab>

                            <Tab eventKey="Associates" title="Associates">
                                
                                    {this.state.associateData.map((item) => (
                                    <div className="div">

                                        <br></br>
                                        <p><b>Name: </b>{" " + item.forenames + " " + item.surname}</p>
                                        <p><b>Address: </b>{" " + item.address}</p>
                                        <p><b>Date Of Birth: </b>{" " + item.dateOfBirth}</p>
                                        <p><b>Time: </b>{" " + item.timestamp}</p>
                                        <p><b>CallType: </b>{" " + item.callType}</p>
                                        <br></br>
                                    </div>
                                    ))}

                            </Tab>

                        </Tabs>

                    <Modal.Footer className="modal-footer">
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
}
