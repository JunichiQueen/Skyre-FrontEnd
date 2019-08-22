import React from 'react';
import { Button } from 'reactstrap';

export default function AdvancedSearch (props){
    return(
        <div>
            <form onSubmit={props.getAdvanced}>
                <p>Forename</p>
                <input placeholder="forename"></input>
                <p>Surname</p>
                <input placeholder="surname"></input>
                <p>Citizen ID</p>
                <input placeholder="citizen id"></input>
                <p>Address</p>
                <input placeholder="address"></input>
                <p>Date Of Birth</p>
                <input placeholder="date of birth"></input>
                <p>Place Of Birth</p>
                <input placeholder="place of birth"></input>
                <p>Sex</p>
                <input placeholder="sex"></input>
                <br></br>
                <Button color="info"type="submit">Search</Button>
            </form>
        </div>
    )
}