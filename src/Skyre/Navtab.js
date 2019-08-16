import React, { Component } from 'react';
import { Tab, Tabs }  from 'react-bootstrap';
import Search from './Search.js';
import Map from './Map.js';
import ANPR from './ANPR.js';
import axios from 'axios';

export default class NavTab extends Component {
    constructor(){
        super();
        this.state=({
            data: [],
        })
    }

    getBasic = (e) => {
        e.preventDefault();
        let forenames = "forenames=" + e.target[0].value + "&";
        let surname = "surname=" + e.target[1].value + "&";
        let appender = "" + forenames + surname;
        axios
        .get(`http://localhost:8081/Citizen/getCitizens?${appender}`).then(response => {
            this.setState({
                data: response.data
            })
        }).catch(e=>{
            console.log(e);
        })
    }

    getAdvanced = (e) => {
        e.preventDefault();
        let forenames = "forenames=" + e.target[0].value + "&";
        let surname = "surname=" + e.target[1].value + "&";
        let citizenId = "citizenId=" + e.target[2].value + "&";
        let homeAddress = "homeAddress=" + e.target[3].value + "&";
        let dateOfBirth = "dateOfBirth=" + e.target[4].value + "&";
        let placeOfBirth = "placeOfBirth=" + e.target[5].value + "&";
        let sex = "sex=" + e.target[6].value + "&";
        let appender = "" + forenames + surname + citizenId + homeAddress + dateOfBirth + placeOfBirth + sex;
        // let entry = {
        //     fornames: e.target[0].value,
        //     surname: e.target[1].value,
        //     citizenId: e.target[2].value,
        //     homeAddress: e.target[3].value,
        //     dateOfBirth: e.target[4].value,
        //     placeOfBirth: e.target[5].value,
        //     sex: e.target[6].value
        // }
        axios
        .get(`http://localhost:8081/Citizen/getCitizens?${appender}`).then(response => {
            this.setState({
                data: response.data
            })
        }).catch(e => {console.log(e);})
    }


    render(){
        return (
            <div>
                <Tabs style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} fill variant="tabs" defaultActiveKey="profile" transition={false} id="uncontrolled-tab-example">
                    <Tab eventKey="search" title="Search">
                        <Search getBasic={this.getBasic} getAdvanced={this.getAdvanced} addToSave={this.addToSave} data={this.state.data}/>
                    </Tab>
                    <Tab eventKey="map" title="Map">
                        <Map />
                    </Tab>
                    <Tab eventKey="anpr" title="ANPR">
                        <ANPR />
                    </Tab>
                </Tabs>
            </div>
      

        );

    }

}
