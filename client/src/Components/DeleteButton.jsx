import React from 'react';
import axios from "axios";
import { navigate } from '@reach/router';

const DeleteButton = (props) => {

    const removeAdoption = (e,id) => {
        e.preventDefault();
        console.log(id);
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            console.log(res);
            if(window.location.pathname === "/"){
                props.getPets();
            }else{
                navigate("/")
            }
            
        })
        .catch(err => console.log(err));
    }

    return(

        <button onClick={(e) => removeAdoption(e,props.id)} className="btn btn-outline-danger btn-sm lead">Adopt!</button>
    )
}

export default DeleteButton;