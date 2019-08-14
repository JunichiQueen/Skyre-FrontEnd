import React, { Component } from 'react';
import { Tab, Tabs, Nav, Col, Row }  from 'react-bootstrap';
import SearchSave from './SearchSave';
import AdvancedSearch from './AdvancedSearch.js';

export default class Search extends Component{
    constructor(){
        super();
        this.state=({
            showSaver: "",
            showAdvanced: ""
        })
    }
    openSaveBar = () => {
        this.setState({
            showSaver: !this.state.showSaver
        })
    }
    openAdvancedSearch = () => {
        this.setState({
            showAdvanced: !this.state.showAdvanced
        })
    }
    
    render(){
        return(
            <div>
                <input></input>
                <button>Search</button>
                <br></br>
                <button onClick={this.openAdvancedSearch}>AdvancedSearch</button>
                {this.state.showAdvanced ? <AdvancedSearch /> : null}

                <button style={{
                    display: 'flex',
                    justifyContent: 'left',
                }} onClick={this.openSaveBar}>OpenSaveBar</button>
                { this.state.showSaver ? <SearchSave /> : null}
            </div>
        )

    }


    

}