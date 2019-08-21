import React, { Component } from 'react';
import axios from 'axios';

export default class Case extends Component {
    constructor(props){
        super();
    }

    saveCase = () => {
        axios
        .post("mongoURL")
        .then(response => {
            console.log(response)                    
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <h3>Cases</h3>
                {this.props.collectedData ? this.saveCase : null}
            </div>
        )
    }
}