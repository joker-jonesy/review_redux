import React from "react";
import Movie from "./Movie";
import {useSelector} from "react-redux";

function Movies(){

    const movies = useSelector(state=>state.movies.data)

    return(
        <>
            {movies.map(itm=>
                <Movie key={itm.id} data={itm}/>
            )}
        </>
    )
}

export default Movies