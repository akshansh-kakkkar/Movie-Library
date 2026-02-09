import React, { useState } from "react";
import moviesData from "./Movies.json";
const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("All");
  const [movie, setMovies] = useState(moviesData.movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortby, setSortby] = useState("title");

  const Rating = (rating) => {
    if (rating >= 8.5) {
      return "Super-hit";
    }
    if (rating >= 7) {
      return "hit";
    }
  };
  const filteredMovies = movie.filter((movies) => {
    const searchLower = searchTerm.toLowerCase();
    const MatchingSearch =
      movies.title.toLowerCase().includes(searchLower) ||
      movies.genre.toLowerCase().includes(searchLower) ||
      movies.director.toLowerCase().includes(searchLower) ||
      movies.cast.some((actor) => actor.toLowerCase().includes(searchLower)) ||
      movies.writer.toLowerCase().includes(searchLower) ||
      movies.year.toString().includes(searchLower);

    const Filter = genre === "All" || movies.genre === genre;
    return MatchingSearch && Filter;
  });
  const Genere = ["All", ...new Set(movie.map((movie) => movie.genre))];
  return (
    <>
      <div className="flex justify-center text-center text-6xl font-bold tracking-wider  p-8">
        <h1 className="text">Movie Hits</h1>
      </div>
      <div className="flex justify-center items-center flex-col p-5 w-full">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="outline-none font-bold p-3 placeholder:text-yellow-400 tracking-widest placeholder:shadow-none text2 text-center border-2 border-yellow-500 text-yellow-500 rounded-2xl w-1/2"
          placeholder="Start Searching..."
        />
        {searchTerm && (
          <p className="text-xl text2 font-bold">
            Found {filteredMovies.length} movie
            {filteredMovies.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>
      <div className="flex gap-2 justify-center flex-col">
        <div className="flex justify-center text tracking-widest text-4xl font-bold">
          Filters
        </div>
        <div className="flex gap-3 justify-around mb-9 mx-5 text-center">
          {Genere.map((gen) => (
            <button
              key={gen}
              onClick={() => setGenre(gen)}
              className="bg-yellow-500 text-2xl font-bold focus:bg-white outline-none focus:text-yellow-500 tracking-widest text-gray-200 text-center shadow rounded-xl px-4 w-full"
            >
              {gen}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        {loading ? (
          <div>
            <p>Loading....</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8   mx-auto max-w-7xl ">
            {filteredMovies.map((movies) => (
              <div
                key={movies.id}
                className="box sm:w-[100%] p-1 md:p-2 sm:h-[100%] rounded-xl cursor-pointer transition transform duration-300 hover:-translate-y-2"
              >
                <div className=" flex justify-center items-center ">
                  <img
                    src={movies.image}
                    alt={movies.alt}
                    className="rounded-xl"
                    style={{ width: 300, height: 300 }}
                  />
                </div>
                <div className="flex text-center justify-center text2 text-2xl mt-3 font-bold tracking-widest">
                  <h1>{movies.title}</h1>
                </div>
                <div className="flex justify-center flex-col text-center gap-4 mt-3 text-white text-md font-bold">
                  <p>Directed By - {movies.director}</p>
                  <p>Written By - {movies.writer}</p>
                  <p>Cast - {movies.cast.join(", ")}</p>
                  <p>Genre -{movies.genre}</p>
                  <p>Released in -{movies.year}</p>
                  <p className={Rating(movies.rating)}>{movies.rating}/10</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      
    </>
  );
};

export default Movies;
