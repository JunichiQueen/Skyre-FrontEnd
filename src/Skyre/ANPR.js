import React, { useState } from 'react';
import { Button, Modal }  from 'react-bootstrap';

export default function ANPR(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <br></br>
            <p>Registration Number</p>
            <input placeholder="regNo" color="info"></input>
            <br></br>
            <Button>Search</Button>
        </div>
    )
}