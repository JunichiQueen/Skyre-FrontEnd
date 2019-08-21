import React, { Component } from 'react';

export default class Admin extends Component {

    registerUser = () => {
        let body = {

        }
        axios
            .post("http://localhost:3000/registerUser", body)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err))
    }

    deleteUser = () => {
        axios
            .delete("http://localhost:3000/deleteUser", body)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err))
    }

    updateUser = () => {
        axios
            .put("http://localhost:3000/updateUser", body)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Admin Page</h2>

            </div>
        )
    }
}