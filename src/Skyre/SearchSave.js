import React, { Component } from 'react';
import { Tab, Tabs, Nav, Col, Row }  from 'react-bootstrap';

export default class SearchSave extends Component{
    constructor(){
        super();
        this.state=({
            Nav : []
        })
    }
    counter = 1;

    addToState = () => {
        this.setState({
            Nav: this.state.Nav.concat("Tab" + this.counter)
        })
        this.counter += 1;
    }
    render(){
        return(
            <div>
            <button onClick={this.addToState}>SaveSearch</button>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    {this.state.Nav.map((item) => (
                        console.log(item),
                        <Nav.Item><Nav.Link eventKey={`${item}`}>{item}</Nav.Link></Nav.Item>))}
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    {this.state.Nav.map((item) => (
                        console.log(item),
                        <Tab.Pane eventKey={`${item}`}><p>{item}</p></Tab.Pane>
                    ))}
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </div>
        )
    }
}