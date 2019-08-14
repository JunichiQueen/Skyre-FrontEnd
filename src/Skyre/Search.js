import React, { Component } from 'react';
import { Tab, Tabs, Nav, Col, Row }  from 'react-bootstrap';
import SearchSave from './SearchSave';

export default class Search extends Component{
    constructor(){
        super();
        this.state=({
            showSaver: ""
        })
    }
    openSaveBar = () => {
        this.setState({
            showSaver: !this.state.showSaver
        })
    }
    
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
                <button style={{
                    display: 'flex',
                    justifyContent: 'left',
                }} onClick={this.openSaveBar}>OpenSaveBar</button>
                { this.state.showSaver ? <SearchSave /> : null}
            </div>
        )

    }


    

}