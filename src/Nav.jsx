import React, {useContext} from "react";
import {MovieContext} from "./MovieContext"

function Nav(){
    const [movies, setMovies] = useContext(MovieContext)

    return(
        <div className="nav">
            <h3>Victor Ribera</h3>
            <p>Total movies: {movies.length}</p>
        </div>
    )
}

export default Nav