import React from 'react';

export default function BasicSearch(){
    return(
        <div>
            <p>Forename</p>
            <input placeholder="forename"></input>
            <p>Surname</p>
            <input placeholder="surname"></input>
            <br></br>
            <button type="submit">Search</button>
        </div>
    )
}