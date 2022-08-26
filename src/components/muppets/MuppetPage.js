import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function MuppetPage(){
    const params = useParams();
    const muppets = useSelector(state=>state.muppets.data);
    const muppet = muppets.find(itm => Number(params.id)===itm.id);

    return(
        <div>
            <h1>{muppet.name}</h1>
            <p>Type: {muppet.type}</p>
        </div>
    )
}

export default MuppetPage;