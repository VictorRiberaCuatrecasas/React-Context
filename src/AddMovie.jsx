import React, {useState, useContext} from "react";
import {MovieContext} from "./MovieContext"





function AddMovie(){

    const [movies, setMovies] = useContext(MovieContext)
    const [movie , setMovie] = useState({
        name: "",
        price: ""
    });
    
    
    function handleChange(evt){
        const{name, value} = evt.target;
        
        setMovie( prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }
    

    function Adder(e){
        e.preventDefault();
        setMovies( prev => [
            ...prev,
            movie
        ])
        setMovie({
            name: "",
            price: ""
        })
    }

    return(
        <form onSubmit={Adder}>
            <p>Add a Movie:</p>
            <input onChange={handleChange} placeholder="name" name="name" value={movie.name} type="text"/>
            <input onChange={handleChange} placeholder="price" name="price" value={movie.price} type="text"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddMovie