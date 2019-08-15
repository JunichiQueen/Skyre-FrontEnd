import React, { Component } from 'react';
import { Table } from 'reactstrap';

import Search from './Search.js';
// import Individual from './Skyre/Individual.js'

export default class ResultList extends Component{
    render(){
        return(
            <div>
                <h2 className="text-center">Result List</h2>
                <Table className="text-center" striped>
                    <tbody>
                        {this.props.data.map((item) => (
                            <tr key={item._id}><td><Search firstname={item.firstname} lastname={item.lastname} address={item.address} /></td></tr>
                        )
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}