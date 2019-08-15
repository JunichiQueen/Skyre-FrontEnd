import React, { Component, useState } from 'react';
import { Tab, Tabs }  from 'react-bootstrap';
import Search from './Search.js';
import Map from './Map.js';
import ANPR from './ANPR.js';
import axios from 'axios';

export default class NavTab extends Component {
    constructor(){
        super();
        this.state=({
            data: []
        })
    }

    getData = (e) => {
        e.preventDefault();
        let entry = {
            fornames: e.target[0].value
        }
        axios
        .get("http://localhost:8081/Citizen/getCitizens", entry).then(response => {
            this.setState({
                data: response.data
            })
        })
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
                        <Search getAll={this.getData} data={this.state.data}/>
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
