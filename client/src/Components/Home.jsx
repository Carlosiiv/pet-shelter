import React,{ useState, useEffect } from "react";
import {Link} from "@reach/router"
import axios from "axios";
import DeleteButton from "./DeleteButton";

const Home = (props) => {
    const [allPets, setAllPets] = useState([]);
    
    const getPets = () => {

    axios.get("http://localhost:8000/api/pets")
         .then(res => {
           console.log(res);
           setAllPets(res.data.Pet);
         })
         .catch(err => console.log(err));

    }
    useEffect( () => {

      getPets();

    }, []);

    return(
      <div className=" mb-5">
      <hr/>
      <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
        {allPets.map(p =>
            <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td><Link className="btn btn-sm btn-outline-primary" to={`/pets/${p._id}`}> Details
                    </Link> | <Link className="btn btn-sm btn-outline-primary" to={`/pets/${p._id}/edit`}>
                    Edit</Link> | <DeleteButton id={p._id} getPets={getPets} /> </td>
            </tr>
        )} 
        </tbody>
    </table>
    </div>
    )
    
}

export default Home;