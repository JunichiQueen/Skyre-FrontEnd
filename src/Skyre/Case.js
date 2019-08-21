import React, { Component } from 'react';
import axios from 'axios';

export default class Case extends Component {
    constructor(props){
        super();
        this.state={
            caseData: []
        }
    }

    getCase = () => {
        axios
        .get("http://localhost:5000/suspect")
        .then(response => {
            this.setState=({
                caseDate: response.data
            })                
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getCase();
    }


    saveCase = () => {
        let suspect = {
            citizenId: this.props[0].citizenId,
            forenames: this.props[0].forenames,
            surname: this.props[0].surname,
            address: this.props[0].address,
            dateOfBirth: this.props[0].dateOfBirth,
            placeOfBirth: this.props[0].placeOfBirth,
            sex: this.props[0].sex,
            bankAccountId: this.props[1].bankAccountId,
            accountNumber: this.props[1].accountNumber,
            bank: this.props[1].bank,
            phoneNumber: this.props[2].phoneNumber,
            network: this.props[2].network,
            registrationId: this.props[3].registrationId,
            driverlicenseId: this.props[3].driverlicenceId,
            vehicleRegistrationNo: this.props[3].vehicleRegistrationNo,
            registrationDate: this.props[3].registrationDate,
            make: this.props[3].make,
            model: this.props[3].model,
            colour: this.props[3].colour,
        }
        axios
        .post("http://localhost:5000/suspect/addSuspect", suspect)
        .then(response => {
            this.getCase();
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <h3>Cases</h3>
                {this.props.collectedData ? this.saveCase : null}
            </div>
        )
    }
}