import React, { useEffect, useState } from "react";
import "../css/Row.css";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.table(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log("else getting run ");
      console.log("getting url of", movie?.name || movie?.original_name);
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
          console.log(url);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      // console.log("movies:", request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchMovies();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
                key={movie?.id}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {/* <Youtube videoId="0DAmWHxeoKw" opts={opts} /> */}
      {trailerUrl && (
        <Youtube className="row__trailer" videoId={trailerUrl} opts={opts} />
      )}
    </div>
  );
}

export default Row;
