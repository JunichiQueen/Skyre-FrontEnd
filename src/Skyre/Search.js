import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SearchSave from './SearchSave';
import BasicSearch from './BasicSearch.js';
import AdvancedSearch from './AdvancedSearch.js';
import ResultList from './ResultList.js';

export default class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            showSaver: "",
            showAdvanced: "",
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

    render() {

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={3}>
                            <button style={{
                                display: 'flex',
                                justifyContent: 'left',
                            }} onClick={this.openSaveBar}>OpenSaveBar</button>
                            {this.state.showSaver ? <SearchSave data={this.props.data} /> : null}
                        </Col>
                        <Col xs={6}>
                            {this.state.showAdvanced ? <AdvancedSearch getAdvanced={this.props.getAdvanced} /> : <BasicSearch getBasic={this.props.getBasic} />}
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
                            <ResultList data={this.props.data} collectAllData={this.props.collectAllData}/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
