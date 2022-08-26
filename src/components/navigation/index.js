import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return(
        <nav>
            <Link to={"/"}>Muppets</Link>
            <Link to={"/movies"}>Movies</Link>
        </nav>
    )
}

export default Navigation