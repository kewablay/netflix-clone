import React from "react";
import requests from "../Requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { selectNotFound } from "../features/errorSlice";

function HomeScreen() {
  const movieNotFound = useSelector(selectNotFound);

  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="Neftlix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetctTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchNetflixOriginals} />

      {movieNotFound && <Modal movieNotFound={movieNotFound} />}
    </>
  );
}
export default HomeScreen;
