import React, { Component } from 'react';
import { Tab, Nav, Col, Row } from 'react-bootstrap';

import SearchSaveModal from './SearchSaveModal.js';

export default class SearchSave extends Component {
    constructor(props) {
        super();
        this.state = {
            nav: []
        }
    }
    counter = 1;

    addToState = () => {
        for (let i = 0; i < this.state.nav.length; i++) {
            for (let j = 0; j < this.props.data.length; j++) {
                if (this.state.nav[i].citizenId === this.props.data[j].citizenId) {
                    this.props.data.splice(j, 1);
                }
            }
        }
        this.setState({
            nav: this.state.nav.concat(this.props.data)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.addToState}>SaveAllSearches</button>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {this.state.nav.map((item) => (
                                    <Nav.Item><Nav.Link eventKey={`${item.citizenId}`}>{item.forenames} {item.surname}</Nav.Link></Nav.Item>))}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {this.state.nav.map((item) => (
                                    <Tab.Pane eventKey={`${item.citizenId}`}><SearchSaveModal firstname={item.forenames} lastname={item.surname} address={item.homeAddress}
                                    placeOfBirth={item.placeOfBirth} dateOfBirth={item.dateOfBirth} sex={item.sex} citizenId={item.citizenId} /></Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
