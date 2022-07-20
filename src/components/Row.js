import React, { useEffect, useState } from "react";
import "../css/Row.css";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Loading from "../images/loading.gif";
import { useDispatch } from "react-redux";
import { notFound } from "../features/errorSlice";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
      console.log("getting url of", movie?.name || movie?.original_name);
      setIsLoading(true);
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
          setIsLoading(false);
          console.log(url);
        })
        .catch((error) => {
          console.log(error);
          dispatch(notFound(true));
          setIsLoading(false);
        });
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
                alt=""
                key={movie?.id}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {trailerUrl ? (
        <Youtube className="row__trailer" videoId={trailerUrl} opts={opts} />
      ) : (
        isLoading && (
          <div className="row__loading">
            <img src={Loading} alt="loading..." />
          </div>
        )
      )}
    </div>
  );
}

export default Row;
