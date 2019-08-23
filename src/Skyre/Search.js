import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SearchSave from './SearchSave';
import BasicSearch from './BasicSearch.js';
import AdvancedSearch from './AdvancedSearch.js';
import ResultList from './ResultList.js';

import './SearchStyle.css';

export default class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            showAdvanced: "",
            collapse: false
        };
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

    openNav() {
        document.getElementById("mySidebar").style.width = "400px";
        document.getElementById("main").style.marginLeft = "400px";
    }

    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }



    render() {

        return (
            <div>
                <div id="mySidebar" class="sidebar">
                    
                    <Button color="danger" onClick={this.closeNav}>CloseSavebar</Button>
                    <SearchSave data={this.props.data} />
                </div>
                <div id="main">
                    <Button color="primary" onClick={this.openNav} style={{ 
                        float: "left",
                        padding: "0px",
                     }}>OpenSaveBar</Button>

                    {this.state.showAdvanced ? <AdvancedSearch getAdvanced={this.props.getAdvanced} /> : <BasicSearch getBasic={this.props.getBasic} />}
                    <br></br>
                    <Button outline onClick={this.openAdvancedSearch} size="sm">ToggleAdvanced</Button>

                    <ResultList data={this.props.data} collectAllData={this.props.collectAllData}/>
                </div>
            </div>
        );
    }
}
