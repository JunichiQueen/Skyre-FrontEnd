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