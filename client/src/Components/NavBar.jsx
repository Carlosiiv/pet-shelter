import React from "react";
import {Link} from "@reach/router"


const Navbar = () => {

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/pets/new">Create</Link>
    </nav>    
    )
}
export default Navbar