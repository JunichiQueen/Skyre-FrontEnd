import React, { Component } from 'react';
import { Table } from 'reactstrap';

import Individual from './Individual.js';

export default class ResultList extends Component{
    render(){
        return(
            <div>
                <h2 className="text-center">Result List</h2>
                <Table className="text-center" striped>
                    <tbody>
                        {this.props.data.map((item) => (
                            <tr key={item.citizenId}><td><Individual firstname={item.fornames} lastname={item.surname} address={item.homeAddress} /></td></tr>
                        )
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}