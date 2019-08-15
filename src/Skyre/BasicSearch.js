import React from 'react';

export default function BasicSearch (props){
    return(
        <div>
            <form onSubmit={props.getAll}>
                <p>Forename</p>
                <input placeholder="forename"></input>
                <p>Surname</p>
                <input placeholder="surname"></input>
                <br></br>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}