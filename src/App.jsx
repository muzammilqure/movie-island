import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Loading from "./components/Loading";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "5ab77ffc";
  const searchMovies = async (title) => {
    setLoading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`
    );
    const data = await res.json();

    setMovies(data.Search);
    console.log(data.Search);
    setLoading(false);
  };
  useEffect(() => {
    searchMovies(`batman`);
  }, []);

  return (
    <>
      <section className="flex items-center justify-center flex-col mt-10 sm:m-0">
        <h1 className="text-4xl m-2 mt-10 cursor-default italic font-serif font-extrabold tracking-wider">
          MOVIE ISLAND
        </h1>
        <div className="search-container flex items-center justify-between gap-2 shadow-md  w-96 rounded-full mt-5 p-3 border border-black max-sm:w-72">
          <input
            className="border-none outline-none"
            type="text"
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" && searchMovies(searchTerm);
            }}
          />
          <img
            className="h-4 w-4 cursor-pointer hover:scale-110"
            src="./download.png"
            alt="search icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {loading && <Loading />}
      </section>
      {movies?.length > 0 ? (
        <div className="container flex flex-wrap items-center justify-center mb-5 ml-8 max-sm:ml-1 max-sm:mt-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbId}
              imdbId={movie.imdbId}
              Title={movie.Title}
              Year={movie.Year}
              Poster={movie.Poster}
              Type={movie.Type}
            />
          ))}
        </div>
      ) : (
        <div className="empty flex m-40 justify-center items-center text-lg font-bold italic ">
          <h2>No movies found, Try Again!</h2>
        </div>
      )}
    </>
  );
};
export default App;
