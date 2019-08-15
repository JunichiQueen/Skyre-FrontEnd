import React, { Component } from 'react';
import { Tab, Tabs, Nav, Container, Col, Row }  from 'react-bootstrap';
import SearchSave from './SearchSave';
import BasicSearch from './BasicSearch.js';
import AdvancedSearch from './AdvancedSearch.js';
import ResultList from './ResultList.js';

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
                {console.log(this.props.getAll)}
                <Container>
                    <Row>
                        <Col>
                            <button style={{
                                display: 'flex',
                                justifyContent: 'left',
                            }} onClick={this.openSaveBar}>OpenSaveBar</button>
                            { this.state.showSaver ? <SearchSave /> : null}
                        </Col>
                        <Col>
                            {this.state.showAdvanced ? <AdvancedSearch /> : <BasicSearch getAll={this.props.getAll}/>}
                            <br></br>
                            <button onClick={this.openAdvancedSearch}>AdvancedSearch</button>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <ResultList data={this.props.data}/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }


    

}