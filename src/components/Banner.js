import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import axios from "../axios";
import requests from "../Requests";

console.log(process.env.REACT_APP_API_KEY);

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return requests;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <header
        className="banner"
        style={{
          background: `center/cover  url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <p className="banner__description">
            {truncate(movie?.overview, 150)}
          </p>
        </div>

        <div className="banner--fadeButtom"></div>
      </header>
    </div>
  );
}

export default Banner;
