import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import CaseIndividual from './CaseIndividual.js';

export default class Case extends Component {
    constructor(props){
        super();
        this.state={
            getData: [],
        }
    }

    getCase = () => {
        axios
        .get("http://localhost:8085/suspect/")
        .then(response => {
            this.setState({
                getData: response.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getCase();
    }

    componentDidUpdate = (prevProps) => {
        if ( this.props.collectData !== prevProps.collectData ) {
            this.saveCase();
        }
    }

    //under construction, concat returned associate data into getData
    // saveAssociate = () => {
    //     let name = "";

    //     for (let i = 0; i < this.props.associateData.length; i++){
    //         name += this.props.associateData[i].forenames + " "
    //         name += this.props.associateData[i].lastname + ",  "
    //     }
    //     let associate = {
    //         associateName: name
    //     }
    //     axios
    //     .post("http://localhost:8085/suspect/addAssociate", associate)
    //     .then(response => {
    //         this.getCase();
    //     })
    //     .catch(err => console.log(err))
    // }

    saveCase = () => {
        let suspect = {
            citizenId: this.props.collectData[0].citizenId,
            forenames: this.props.collectData[0].forenames,
            surname: this.props.collectData[0].surname,
            homeAddress: this.props.collectData[0].homeAddress,
            dateOfBirth: this.props.collectData[0].dateOfBirth,
            placeOfBirth: this.props.collectData[0].placeOfBirth,
            sex: this.props.collectData[0].sex,
            bankAccountId: this.props.collectData[1].bankAccountId,
            accountNumber: this.props.collectData[1].accountNumber,
            bank: this.props.collectData[1].bank,
            phoneNumber: this.props.collectData[2].phoneNumber,
            network: this.props.collectData[2].network,
            registrationId: this.props.collectData[3].registrationId,
            driverLicenceId: this.props.collectData[3].driverLicenceId,
            vehicleRegistrationNo: this.props.collectData[3].vehicleRegistrationNo,
            registrationDate: this.props.collectData[3].registrationDate,
            make: this.props.collectData[3].make,
            model: this.props.collectData[3].model,
            colour: this.props.collectData[3].colour,
        }
        axios
        .post("http://localhost:8085/suspect/addSuspect", suspect)
        .then(response => {
            this.getCase();
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <h3>Suspects</h3>
                <Table>
                    <tbody>
                        {this.state.getData.map((item) => (
                            <tr key={item._id}><td><CaseIndividual forenames={item.forenames} surname={item.surname} homeAddress={item.homeAddress} dateOfBirth={item.dateOfBirth}
                            placeOfBirth={item.placeOfBirth} sex={item.sex} bankAccountId={item.bankAccountId} accountNumber={item.accountNumber} bank={item.bank}
                            phoneNumber={item.phoneNumber} network={item.network} registrationId={item.registrationId} driverLicenceId={item.driverLicenceId}
                            vehicleRegistrationNo={item.vehicleRegistrationNo} registrationDate={item.registrationDate} make={item.make} model={item.model} colour={item.colour}/></td></tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}