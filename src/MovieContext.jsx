import React, {useState, createContext} from "react"


 const MovieContext = createContext()

 function MovieProvider(props){
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "10€",
            id: 211212121
        },
        {
            name: "Matrix",
            price: "11€",
            id: 3242342
        },
        {
            name: "Inception",
            price:"20€",
            id: 32423445,
        }
    ])

    return(
      <MovieContext.Provider value={[movies, setMovies]}>
          {/* <Nav />
          <MovieList /> */}
          {props.children}
      </MovieContext.Provider>
    )
}

export {MovieContext , MovieProvider}