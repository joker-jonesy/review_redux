import React from "react";
function Movie(props){
    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>Year Released: {props.data.year}</p>
        </div>
    )
}

export default Movie;