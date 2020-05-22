import React, {useState,useEffect} from "react";
import {Link} from '@reach/router'
import axios from "axios"
import DeleteButton from "./DeleteButton";
import LikeButton from "./LikeButton";

const OneProduct = (props) => {
    const [oneP, setOneP] = useState([])
    
    useEffect(()=>{
        
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
             .then(res => {
             console.log(res);
             setOneP(res.data.Pet[0]);
        })
             .catch(err => console.log(err));
    },[props]);

    return(
        <div className="center_div ">
            <div className="card hhlite" style={{width: "24rem"}} key={oneP._id}>
                <Link to={`/pets/${oneP._id}/edit`}> Edit Pet?
                </Link>
                <div className="card-body">
                <h5 className="card-title">{oneP.name} : {oneP.category}</h5>
                <p className="card-text lead">Description:{oneP.description}</p>
                <p className="card-text lead">Skills: {oneP.skill1} {oneP.skill2} {oneP.skill3}</p>
                <DeleteButton id={oneP._id} /> | <LikeButton id= {oneP._id} />
                </div>
            </div>
            </div>
    )
}

export default OneProduct;