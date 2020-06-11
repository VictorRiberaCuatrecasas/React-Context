import React from "react";

function Movie({name , price}){

    return(
        <div style={{display: "flex", justifyContent: "center"}}>
           <h3 style={{margin: "20px"}}>{name}</h3>
           <p>{price}</p>
        </div>
    );
}

export default Movie