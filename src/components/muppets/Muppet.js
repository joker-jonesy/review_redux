import React from "react";
function Muppet(props){
    return(
        <div>
            <h1>{props.data.name}</h1>
            <p>Type: {props.data.type}</p>
        </div>
    )
}

export default Muppet;