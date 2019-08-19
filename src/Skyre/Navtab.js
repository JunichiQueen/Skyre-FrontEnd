import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Search from './Search.js';
import Map from './Map.js';
import ANPR from './ANPR.js';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import {
    logoutButton,
    HeaderBar,
} from '../components';

const title = {
    pageTitle: 'Home',
};

const loading = {
    margin: '1em',
    fontSize: '24px',
};

class NavTab extends Component {
    constructor() {
        super();
        this.state = ({
            data: [],
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            isLoading: true,
            deleted: false,
            error: false,
        })
    }

    async componentDidMount() {
        const accessString = localStorage.getItem('JWT');
        const {
            username = localStorage.getItem('username')
    } = this.props;
        if (accessString == null) {
            this.setState({
                isLoading: false,
                error: true,
            });
        } else {
            try {
                const response = await axios.get('http://localhost:3003/findUser', {
                    params: {
                        username,
                    },
                    headers: { Authorization: `JWT ${accessString}` },
                });
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    username: response.data.username,
                    password: response.data.password,
                    isLoading: false,
                    error: false,
                });
            } catch (error) {
                this.setState({
                    error: true
                });
            }
        }
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('JWT');
        this.setState({
            deleted: true
        })
    };

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
            }).catch(e => {
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
            }).catch(e => { console.log(e); })
    }


    render() {
        const {
            error,
            isLoading,
            deleted,
        } = this.state;
        if (error) {
            return <Redirect to="/" />
        }
        if (isLoading) {
            return (
                <div>
                    <HeaderBar title={title} />
                    <div style={loading}>Loading User Data...</div>
                </div>
            );
        }
        if (deleted) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <Tabs style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} fill variant="tabs" defaultActiveKey="profile" transition={false} id="uncontrolled-tab-example">
                    <Tab eventKey="search" title="Search">
                        <Search getBasic={this.getBasic} getAdvanced={this.getAdvanced} addToSave={this.addToSave} data={this.state.data} />
                    </Tab>
                    <Tab eventKey="map" title="Map">
                        <Map />
                    </Tab>
                    <Tab eventKey="anpr" title="ANPR">
                        <ANPR />
                    </Tab>
                    <Tab eventKey="user" title="User">
                        <Button
                            style={logoutButton}
                            variant="contained"
                            color="primary"
                            onClick={this.logout}
                        ></Button>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavTab;