import "./Styles/HomeScreen.css";
import Icon from "../assets/Icon.png";
import film from "../assets/film.png";
import calender from "../assets/calendar.png";
import heart from "../assets/heart.png";
import trending from "../assets/trending-up.png";
import { useState } from "react";
import Home from "../Components/Home"
import ComingSoon from "../Components/ComingSoon";
import Favourites from "../Components/Favourites";
import Trending from "../Components/Trending";
import AboutUs from "../Components/AboutUs";
export default function HomeScreen() {
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Home":
        return <Home/>
      case "Coming Soon":
        return <ComingSoon/>
      case "Trending":
        return <Trending/>
      case "Favourites":
        return <Favourites/>
      case "About Us":
        return <AboutUs/>
      default:
        return <h2>Welcome to StreamPlus</h2>;
    }
  };

  return (
    <div className="HomeScreen">
      <section className="Menu">
        <section className="Logo">
          <img className="logoImage" src={Icon} alt="logo" />
          <h1>StreamPlus</h1>
        </section>
        <section className="Menu-Items">
          <ul>
            <li onClick={() => setSelectedComponent("Home")}>
              <img src={film} alt="Home" />
              <h2>Home</h2>
            </li>
            <li onClick={() => setSelectedComponent("Coming Soon")}>
              <img src={calender} alt="Coming Soon" />
              <h2>Coming Soon</h2>
            </li>
            <li onClick={() => setSelectedComponent("Trending")}>
              <img src={trending} alt="Trending" />
              <h2>Trending</h2>
            </li>
            <li onClick={() => setSelectedComponent("Favourites")}>
              <img src={heart} alt="Favourites" />
              <h2>Favourites</h2>
            </li>
          </ul>
        </section>
        <section className="About">
          <h2 onClick={()=>setSelectedComponent("About Us")}>About Us</h2>
        </section>
      </section>

      <section className="Content">
        {renderComponent()}
      </section>
    </div>
  );
}
