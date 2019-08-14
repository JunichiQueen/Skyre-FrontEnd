import React, { Component } from 'react';
import { Tab, Tabs, Nav, Col, Row }  from 'react-bootstrap';

export default class Search extends Component{
    addModal = () => {
        let newItem = document.createElement("Nav.Item");
        newItem.setAttribute("id", "NewLink");
        document.getElementById("Navbutton").appendChild(newItem);
        let newLink = document.createElement("Nav.Link");
        newLink.innerHTML = "Tab 3";
        document.getElementById("NewLink").appendChild(newLink);
    }
    render(){
        return(
        <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav id="Navbutton" variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <p>Modal1</p>
                    <button onClick={this.addModal}>Click</button>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <p>Modal2</p>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </div>
        )

    }


    

}