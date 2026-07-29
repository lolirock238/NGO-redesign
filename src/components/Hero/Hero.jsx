import "./Hero.css";
import Slideshow from "../Slideshow/Slideshow";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <Slideshow />

      <div className="hero-overlay">
        <div className="hero-content">

          <h1>
            Kenya NPO Working Group on the Financial Action Task Force
          </h1>

          <p>
            Strengthening Kenya's non-profit sector through collaboration,
            advocacy, research and policy engagement.
          </p>

          <div className="hero-buttons">

            <NavLink to="/about" className="primary-btn">
              Learn More
            </NavLink>

            <NavLink to="/join-us" className="secondary-btn">
              Join Us
            </NavLink>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;