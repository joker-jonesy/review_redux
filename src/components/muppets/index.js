import React from "react";
import Muppet from "./Muppet";
import {useSelector} from "react-redux";

function Muppets(){

   const muppets = useSelector(state=>state.muppets.data)

    return(
        <>
            {muppets.map(itm=>
                <Muppet key={itm.id} data={itm}/>
            )}
        </>
    )
}

export default Muppets