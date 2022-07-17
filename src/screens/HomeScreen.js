import React from "react";
import requests from "../Requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";

function HomeScreen() {
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
    </>
  );
}
export default HomeScreen;
