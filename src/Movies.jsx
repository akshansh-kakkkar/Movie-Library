import React, { useState } from 'react'
import moviesData from "./Movies.json"
const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("All");
  const [movie, setMovies] = useState(moviesData.movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortby, setSortby] = useState("title")
  const Rating = ()=>{
    if(movie.rating >= 8){
      return "Super-hit";
    }
    if(movie.rating>=7){
      return "hit";
    }
    if(movie.rating>=6){
      return "average"
    }
    return "flop"
  }
  return (
    <>
        <div className='flex justify-center text-white text-5xl font-bold  p-5'>
      <h1 className='text-shadow-white text-shadow-2xl '>Movie Hits</h1>
    </div>
    <div className='flex justify-center '>
        {
      loading  ? (
        <div>
          <p>Loading....</p>
        </div>
      ) : (
        <div className='grid md:grid-cols-4'>
          {movie.map(movies=>(
            <div key={movies.id}>
              <h1>{movies.title}</h1>
              <div>
                <img src={movies.image} alt={movies.alt} style={{width:300, height:400}}/>
              </div>
              <div>
                <p>{movies.director}</p>
                <p>{movies.writer}</p>
                <p >{movies.cast.join(", ")}</p>
                <p>{movies.genre}</p>
                <p>{movies.year}</p>
                <p >{movies.rating}/10</p>
              </div>
              </div>
          ))}
        </div>
      )
    }
    </div>
    </>
  )
}

export default Movies