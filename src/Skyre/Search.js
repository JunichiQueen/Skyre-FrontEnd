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
            collapse: true
        };
    }

    toggleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }
    openAdvancedSearch = () => {
        this.setState({
            showAdvanced: !this.state.showAdvanced
        })
    }

    toggleNav = () => {
        this.toggleCollapse();
        if (this.state.collapse) {
            document.getElementById("mySidebar").style.width = "400px";
            document.getElementById("main").style.marginLeft = "400px";
        } else {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
        }
    }



    render() {

        return (
            <div>
                <div id="mySidebar" class="sidebar">
                    <SearchSave data={this.props.data} />
                </div>
                <div id="main">
                    <Button color="primary" onClick={this.toggleNav} style={{ 
                        float: "left",
                        padding: "0px",
                        borderRadius: "100%"
                     }}>SaveBar</Button>

                    {this.state.showAdvanced ? <AdvancedSearch getAdvanced={this.props.getAdvanced} /> : <BasicSearch getBasic={this.props.getBasic}/>}
                    <br></br>
                    <Button outline onClick={this.openAdvancedSearch} size="sm">ToggleAdvanced</Button>

                    <ResultList data={this.props.data} collectAllData={this.props.collectAllData} spinner={this.props.spinner}/>
                </div>
            </div>
        );
    }
}
