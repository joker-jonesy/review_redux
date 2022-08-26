import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function MoviePage(){
    const params = useParams();
    const movies = useSelector(state=>state.movies.data);
    const movie = movies.find(itm => Number(params.id)===itm.id);

    return(
        <div>
            <h1>{movie.name}</h1>
            <p>Year: {movie.year}</p>
        </div>
    )
}

export default MoviePage;