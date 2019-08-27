import React, { Component } from 'react';
import { Button, Spinner }  from 'reactstrap';
import axios from 'axios';

export default class ANPR extends Component {
    constructor(){
        super();
        this.state={
            forenames: "",
            surname: "",
            homeAddress: "",
            dateOfBirth: "",
            vehicleRegistrationNo: "",
            registrationDate: "",
            driverLicenceId: "",
            make: "",
            model: "",
            colour: "",
            Spinner: false
        }
    }

    getCitizenFromRegistration = (e) => {
        e.preventDefault();

        this.setState({
            spinner: true
        })

        let vehicleRegNo = "vehicleRegistrationNo=" + e.target[0].value;

        const accessString = localStorage.getItem('JWT');

        axios.get("http://localhost:9003/scenario1/getCitizenFromRegistration?" + vehicleRegNo, {
            headers: { Authorization: `JWT ${accessString}` },
        }).then(response => {
            this.setState({
                forenames: response.data.forenames,
                surname: response.data.surname,
                homeAddress: "Home Address: " + response.data.homeAddress,
                dateOfBirth: "Date Of Birth: " + response.data.dateOfBirth,
                vehicleRegistrationNo: "Vehicle Registration Number: " + response.data.vehicleRegistrationNo,
                registrationDate: "Registration Date: " + response.data.registrationDate,
                driverLicenceId: "Drivers Licence ID: " + response.data.driverLicenceId,
                make: "Vehicle Manufacturer: " + response.data.make,
                model: "Vehicle Model: " + response.data.model,
                colour: "Vehicle Colour: " + response.data.colour,
                spinner: false
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                spinner: false
            })        
        })
    }
    render(){
        const {
            forenames,
            surname,
            homeAddress,
            dateOfBirth,
            vehicleRegistrationNo,
            registrationDate,
            driverLicenceId,
            make,
            model,
            colour
        } = this.state
        return(
            <div>
                <form onSubmit={this.getCitizenFromRegistration}>
                    <br></br>
                    <p>Registration Number</p>
                    <input placeholder="regNo"></input>
                    <br></br>
                    <Button color="info" type="submit">Search</Button>
                </form>
                <br></br>
                {this.state.spinner ? <Spinner /> : null}
                <p>{forenames + " " + surname}</p>
                <p>{homeAddress}</p>
                <p>{dateOfBirth}</p>
                <p>{vehicleRegistrationNo}</p> 
                <p>{registrationDate}</p> 
                <p>{driverLicenceId}</p>
                <p>{make}</p> 
                <p>{model}</p> 
                <p>{colour}</p>
            </div>
        )   

    }

}