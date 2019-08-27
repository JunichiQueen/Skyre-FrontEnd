import React from 'react';
import { Button } from 'reactstrap';

export default function BasicSearch (props){
    return(
        <div>
            <br></br>
            <br></br>
            <form onSubmit={props.getBasic}>
                <p>Forename</p>
                <input placeholder="forename"></input>
                <p>Surname</p>
                <input placeholder="surname"></input>
                <br></br>
                <Button color="info"type="submit">Search</Button>
            </form>
        </div>
    )
}