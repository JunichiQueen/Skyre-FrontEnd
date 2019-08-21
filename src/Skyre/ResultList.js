import React, { Component } from 'react';
import { Table } from 'reactstrap';

import Individual from './Individual.js';

export default class ResultList extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <h2 className="text-center">Result List</h2>
                <Table className="text-center" striped>
                    <tbody>
                        {this.props.data.map((item) => (
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