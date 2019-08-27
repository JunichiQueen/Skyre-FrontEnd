import React, { Component } from 'react';
import { Tab, Tabs, Modal, Button, p } from 'react-bootstrap';
import axios from 'axios';



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

        axios.get(`http://localhost:9003/scenario1/getFinance?${toSend}`, {
            headers: { Authorization: `JWT ${accessString}` },
        }).then(response => {
            let accountNumber = "accountNumber=" + response.data[0].accountNumber
            this.setState({
                financeData: response.data
            })
            axios.get(`http://localhost:9003/scenario1/getTransactions?${accountNumber}`, {
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

        axios.get(`http://localhost:9003/scenario1/getMobile?${toSend}`, {
            headers: { Authorization: `JWT ${accessString}` },
        }).then(response => {
            let phoneNumber = "phoneNumber=" + response.data[0].phoneNumber
            this.setState({
                mobileData: response.data
            })
            axios.get(`http://localhost:9003/scenario1/getAssociates?${phoneNumber}`, {
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

        axios.get(`http://localhost:9003/scenario1/getVehicle?${toSend}`, {
            headers: { Authorization: `JWT ${accessString}` },
        })
            .then(response => {
                let vehicleRegistrationNo = "vehicleRegistrationNo=" + response.data[0].vehicleRegistrationNo
                this.setState({
                    vehicleData: response.data
                })
                axios.get(`http://localhost:9003/scenario1/getVehicleLocation?${vehicleRegistrationNo}`, {
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
                    <Modal.Header closeButton>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="Biography" title="Biography">

                                <Modal.Body class="modal-body">

                                    <br></br>

                                    <p><b>Citizen Id:</b>{" " + citizenId}</p>

                                    <p><b>Name:</b> {"\n"} {" " + firstname + " "}{lastname}</p>

                                    <p><b>Address:</b>{" " + address}</p>

                                    <p><b>Sex:</b>{" " + sex}</p>

                                    <p><b>Place Of Birth:</b>{" " + placeOfBirth}</p>

                                    <p><b>Date Of Birth:</b>{" " + dateOfBirth}</p>


                                </Modal.Body>



                            </Tab>
                            <Tab eventKey="Financial Details" title="Financial Details">

                                <Modal.Body class="modal-body">

                                    <br></br>

                                    <p><b>Bank Account Id:</b>{" " + this.state.financeData.map((item) => item.bankAccountId)}</p>

                                    <p><b>Bank</b>{" " + this.state.financeData.map((item) => item.bank)}</p>

                                    <p><b>Bank Account Number:</b> {" " + this.state.financeData.map((item => item.accountNumber))}</p>

                                    {this.state.transactionData.map((item) => (
                                        <div style={{ borderTop: "3px dotted blue"}}>
                                            <p><b>StreetName:</b>{item.streetName}</p>
                                            <p><b>Latitude:</b>{item.latitude}</p>
                                            <p><b>Longitude:</b>{item.longitude}</p>
                                            <p><b>Company:</b>{item.company}</p>
                                            <p><b>Type:</b>{item.type}</p>
                                            <p><b>Amount:</b>{item.amount}</p>
                                            <p><b>TimeStamp:</b>{item.timestamp}</p>
                                        </div>
                                    ))}

                                </Modal.Body>

                            </Tab>
                            <Tab eventKey="Mobile" title="Mobile">

                                <Modal.Body class="modal-body">

                                    <br></br>

                                    <p><b>Phone Number:</b>{" " + this.state.mobileData.map((item) => item.phoneNumber)}</p>

                                    <p><b>Network:</b> {" " + this.state.mobileData.map((item) => item.network)}</p>

                                </Modal.Body>

                            </Tab>

                            <Tab eventKey="Vehicle" title="Vehicle">

                                <Modal.Body class="modal-body">

                                    <br></br>
                                    <br></br>
                                    <br></br>

                                    <p><b>Registration Id:</b>{" " + this.state.vehicleData.map((item) => item.registrationId)}</p>

                                    <p><b>Registration Date:</b> {" " + this.state.vehicleData.map((item) => item.registrationDate)}</p>

                                    <p><b>Drivers License Id:</b> {" " + this.state.vehicleData.map((item) => item.driverLicenceId)}</p>

                                    <p><b>Make:</b> {" " + this.state.vehicleData.map((item) => item.make)}</p>

                                    <p><b>Model:</b> {" " + this.state.vehicleData.map((item) => item.model)}</p>

                                    <p><b>Colour:</b> {" " + this.state.vehicleData.map((item) => item.colour)}</p>

                                    <p><b>Vehicle Registration No:</b> {" " + this.state.vehicleData.map((item) => item.vehicleRegistrationNo)}</p>

                                    {this.state.vehicleLocationData.map((item) => (
                                        <div style={{ borderTop: "3px dotted blue"}}>
                                            <p><b>StreetName:</b>{item.streetName}</p>
                                            <p><b>Latitude:</b>{item.latitude}</p>
                                            <p><b>Longitude:</b>{item.longitude}</p>
                                            <p><b>TimeStamp:</b>{item.timestamp}</p>
                                        </div>
                                    ))}

                                </Modal.Body>
                            </Tab>

                            <Tab eventKey="Associates" title="Associates">
                                
                                    {this.state.associateData.map((item) => (
                                    <Modal.Body class="modal-body">
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <p><b>Name: </b>{" " + item.forenames + " " + item.surname}</p>
                                        <p><b>Address: </b>{" " + item.address}</p>
                                        <p><b>Date Of Birth: </b>{" " + item.dateOfBirth}</p>
                                        <p><b>Time: </b>{" " + item.timestamp}</p>
                                        <p><b>CallType: </b>{" " + item.callType}</p>
                                        <br></br>
                                    </Modal.Body>
                                    ))}

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