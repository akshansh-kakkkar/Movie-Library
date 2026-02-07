import React, { useState } from 'react'
import moviesData from "./Movies.json"
const Movies = () => {
    
  return (
    <div>
        {moviesData.movies.map((movies)=>(
            <div key={movies.id}>
                <h1>{movies.title}</h1>
                <div><img src={movies.image} alt={movies.alt} style={{width:300}}/></div>
                <div>{movies.rating}</div>
                <div><h1>{movies.author}</h1></div>
                <div><h1>{movies.genre}</h1></div>
                <div><p>{movies.year}</p></div>
                <div>{movies.director}</div>
                <div>{movies.cast}</div> 
                        
            </div>
        ))}
    </div>
  )
}

export default Movies