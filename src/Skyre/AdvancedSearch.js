import React from 'react';

export default function AdvancedSearch(){
    return(
        <div>
            <form>
                <p>Citizen ID</p>
                <input placeholder="citizen id"></input>
                <p>Forename</p>
                <input placeholder="forename"></input>
                <p>Surname</p>
                <input placeholder="surname"></input>
                <p>Address</p>
                <input placeholder="address"></input>
                <p>Date Of Birth</p>
                <input placeholder="date of birth"></input>
                <p>Place Of Birth</p>
                <input placeholder="place of birth"></input>
                <p>Sex</p>
                <input placeholder="sex"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}