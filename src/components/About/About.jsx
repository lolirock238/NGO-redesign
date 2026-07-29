import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Kenya NPO Working Group"
          />

        </div>

        <div className="about-content">

          <span className="section-tag">
            ABOUT US
          </span>

          <h2>
            Strengthening Kenya's Non-Profit Sector
          </h2>

          <p>
            The Kenya NPO Working Group brings together
            non-profit organizations, development partners,
            and stakeholders to strengthen governance,
            advocate for an enabling environment, and
            promote collaboration across the sector.
          </p>

          <Link to="/about" className="about-btn">
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
}

export default About;