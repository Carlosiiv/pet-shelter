import React,{ useState, useEffect} from "react";
import axios from "axios";
import {navigate} from "@reach/router";

const EditForm = (props) => {
    const [pet,setPet] = useState([]);
    const[name,setName] = useState("");
    const[category,setCategory] = useState();
    const[description,setDescription] = useState("");
    const[skill1,setSkill1] = useState("");
    const[skill2,setSkill2] = useState("");
    const[skill3,setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const getOnePet = () => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
             .then(res => {
             console.log(res);
             setPet(res.data.Pet[0]);
             setName(res.data.Pet[0].name);
             setCategory(res.data.Pet[0].category);
             setDescription(res.data.Pet[0].description);
             setSkill1(res.data.Pet[0].skill1);
             setSkill2(res.data.Pet[0].skill2);
             setSkill3(res.data.Pet[0].skill3);
            })
             .catch(err => console.log(err));
    }

    useEffect(()=>{
        
        getOnePet();

    },[props]);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const updatedPet = {name,category,description,skill1,skill2,skill3};
        console.log(updatedPet);
        axios.put(`http://localhost:8000/api/pets/${props.id}`, updatedPet)
             .then(res => {
              console.log(res.data);
              if(res.data.error){
                setErrors(res.data.error.errors);
              }
              else{
              navigate("/")
              }
               
             })
             .catch(err => console.log(err))
      }

      return(
        
            <form onSubmit={onSubmitHandler}>
                <p className="lead text-center">Edit {name}!</p>
                    <hr/>
            <div className="row">
            <div className="col-sm-6">
            <div className="center_div">
                
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        {errors.name ? <p className="text-danger lead">{errors.name.message}</p> : ""}
                        <input type="text" value={name} name="name" className="form-control" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Price">Category:</label>
                        {errors.category ? <p className="text-danger lead">{errors.category.message}</p> : ""}
                        <select className="form-control" value={category} name="category" onChange={e => setCategory(e.target.value)} >
                            <option value="Tropical Fish">Tropical Fish</option>
                            <option value="Saltwater Fish">Saltwater Fish</option>
                            <option value="Bird">Bird</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Horse Breed">Horse Breed</option>
                            <option value="Reptile or Amphibian">Reptile/Amphibian</option>
                            <option value="Small Animal">Small Animal</option>
                        </select>
                    </div>
                    <div className="form-group">
                <label htmlFor="Description">Description:</label><br/>
                {errors.description ? <p className="text-danger lead">{errors.description.message}</p> : ""}
                <textarea value={description} className="form-control" name="Description"cols="66" rows="10" onChange={e => setDescription(e.target.value)} />
          </div>
          </div>
          </div>

          <div className="col-sm-6">
          <div className="center_div">
              <p className="lead text-center mb-4">(Optional)</p>
              <br/>
          <div className="form-group">
            <label htmlFor="name">Skill:</label>
            {errors.skill1 ? <p className="text-danger lead">{errors.skill1.message}</p> : ""}
            <input type="text" value={skill1} name="skill1" className="form-control" onChange={e => setSkill1(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Skill:</label>
            {errors.skill2 ? <p className="text-danger lead">{errors.skill2.message}</p> : ""}
            <input type="text" value={skill2} name="skill2" className="form-control" onChange={e => setSkill2(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Skill:</label>
            {errors.skill3 ? <p className="text-danger lead">{errors.skill3.message}</p> : ""}
            <input type="text" value={skill3} name="skill3" className="form-control" onChange={e => setSkill3(e.target.value)} />
          </div>
        </div>
        </div>
        </div>
        <input type="submit" value="New Pet" className="btn btn-outline-primary"/>
        </form> 
      )
}

export default EditForm;