import React, { useState, useEffect, useRef } from "react";
import "./Styles/Row.css";
import backArrow from "../assets/Back.png";
import forwardArrow from "../assets/Forward.png";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const baseUrl = "https://api.themoviedb.org/3";
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}${fetchUrl}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        const data = await response.json();
        setMovies(data.results);
        console.log("Movies data: ", data.results);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    }
    fetchData();
  }, [API_KEY, fetchUrl]);

  const trimDate=(date)=>{
    return date.substring(0,4) || "N/A";
  }
  
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="row">
    <h1>{title}</h1>
  <img
    className="backArrow"
    src={backArrow}
    alt="Scroll Backward"
    onClick={() => scroll("left")}
  />
  <div className="row-posters" ref={scrollContainerRef}>
    {movies.map((movie) => (
      <div className="poster" key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />
        <h2>{movie.title || ""}</h2>
        <section className="movie-details">
          <p>{trimDate(movie.release_date)}</p>
          <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <p>rating: {movie.vote_average.toFixed(1)}</p>
        </section>
      </div>
    ))}
  </div>
  <img
    className="forwardArrow"
    src={forwardArrow}
    alt="Scroll Forward"
    onClick={() => scroll("right")}
  />
</div>

  );
}

export default Row;
