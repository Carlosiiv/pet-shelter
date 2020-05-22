import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from "@reach/router";
import Home from "./Components/Home";
import CreateForm from "./Components/CreateForm";
import EditPet from "./Components/EditForm";
import OnePet from "./Components/OnePet";
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-5">Pet Shelter</h1>
      <NavBar />
      <hr className="mb-5"/>
      
      <Router>
      <Home path="/" />
      <CreateForm path="/pets/new" />
      <OnePet path="/pets/:id"/>
      <EditPet path="/pets/:id/edit" />
    </Router>
    </div>
  );
}

export default App;
