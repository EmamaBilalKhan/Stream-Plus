import React, { useState, useEffect, useRef} from "react";
import "./Styles/Row.css";
import backArrow from "../assets/Back.png";
import forwardArrow from "../assets/Forward.png";

function Row({ title, fetchUrl,ComingSoon }) {
  const scrollContainerRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [Loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  useEffect(() => {
    setError(null)
    setLoading(true)
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
        setLoading(false);
        console.log("Movies data: ", data.results);
      } catch (error) {
        console.error("Error fetching movies: ", error);
        setError("Error Getting Movies");
        setLoading(false);
      }
    }
    fetchData();
  }, [API_KEY, fetchUrl]);

  const trimDate=(date)=>{
    return date.toString().substring(0,4);
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
    <section className="row-top">
    <h1 className="row-title">{title}</h1>
    {!Loading&&!error &&<div className="arrows">
      <img
    className="backArrow"
    src={backArrow}
    alt="Scroll Backward"
    onClick={() => scroll("left")}
    />
     <img
    className="forwardArrow"
    src={forwardArrow}
    alt="Scroll Forward"
    onClick={() => scroll("right")}
    />
    </div>}</section>
  {Loading && <div className="LoadingError"> {!error?
  <p>Loading..</p>
  :
  <p>{error}</p>
  }</div>}  
  {!Loading &&<>  
  <div className="row-posters" ref={scrollContainerRef}>
    {movies.map((movie) => (
      <div className="poster" key={movie.id} onClick={()=>{
        window.location.href = `/movie/${movie.id}`
      }}>
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />
        <h2>{movie.title || ""}</h2>
        <section className={ComingSoon ? "movie-details-coming-soon" : "movie-details"}>
        {ComingSoon && <p className="movie-details-p">Coming:&nbsp;&nbsp;{movie.release_date}</p>}
          {!ComingSoon&&<p className="movie-details-p">{trimDate(movie.release_date)}</p>}
          {!ComingSoon && <p className="movie-details-p">&nbsp;&nbsp;|&nbsp;&nbsp;</p>}
          <p className="movie-details-p">rating: {movie.vote_average.toFixed(1)}</p>
        </section>
      </div>
    ))}
    <div className="spacer"></div>
  </div>
  </>}
</div>

  );
}

export default Row;