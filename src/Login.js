import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component{
    login = (e) => {
        e.preventDefault();
        let body = {
            username: e.target[0].value,
            password: e.target[1].value
        }
        axios
        .post("http://localhost:3000/loginUser", body).then(response => {
            console.log("You have logged in")
        }).then(err => console.log(err));
    }
    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <p>Username</p>
                    <input></input>
                    <p>Password</p>
                    <input></input>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
            </div>
        )

    }

}