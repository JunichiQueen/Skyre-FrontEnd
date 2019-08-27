import React, { Component } from 'react';
import { Table, Button, Spinner } from 'reactstrap';
import _ from 'lodash';

import Individual from './Individual.js';

export default class ResultList extends Component{
    constructor(props){
        super();
        this.state = {
            order: true
        }
    }

    toggle = () => {
        this.setState({
            order: !this.state.order
        })
    }

    render(){
        if(this.props.data.length === 0){
            return(null)
        } else{
            return(
                <div>
                    <h2 className="text-center">Citizens</h2>

                    <Button color="link" onClick={this.toggle} style={{ float: "right" }}>Asc/Desc</Button>
                    <br></br>
                    {this.props.spinner ? <Spinner /> : null}
                    <Table className="text-center" striped>
                        <tbody>
                            {this.state.order ? this.props.data.map((item) => (
                                <tr key={item.citizenId}><td><Individual 
                                firstname={item.forenames} lastname={item.surname} 
                                address={item.homeAddress} placeOfBirth={item.placeOfBirth} 
                                dateOfBirth={item.dateOfBirth} sex={item.sex}
                                citizenId={item.citizenId} collectAllData={this.props.collectAllData}/></td></tr>
                            )
                            ) : _.reverse(this.props.data).map((item) => (
                                <tr key={item.citizenId}><td><Individual 
                                firstname={item.forenames} lastname={item.surname} 
                                address={item.homeAddress} placeOfBirth={item.placeOfBirth} 
                                dateOfBirth={item.dateOfBirth} sex={item.sex}
                                citizenId={item.citizenId} collectAllData={this.props.collectAllData}/></td></tr>
                            )
                            )}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}