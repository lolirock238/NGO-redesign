import "./FocusAreas.css";
import { Link } from "react-router-dom";

function FocusAreas() {
  return (
    <section className="focus-areas">

      <div className="focus-header">

        <span className="section-tag">
          OUR WORK
        </span>

        <h2>Focus Areas</h2>

        <p>
          We work with stakeholders across Kenya to strengthen
          the non-profit sector through collaboration,
          advocacy, research and capacity development.
        </p>

      </div>

      <div className="focus-grid">

        <div className="focus-card">
          <h3>Policy & Advocacy</h3>

          <p>
            Promoting policies that create an enabling
            environment for non-profit organizations.
          </p>
        </div>

        <div className="focus-card">
          <h3>Research</h3>

          <p>
            Producing evidence-based research that supports
            informed decision-making across the sector.
          </p>
        </div>

        <div className="focus-card">
          <h3>Capacity Building</h3>

          <p>
            Supporting organizations through training,
            networking and knowledge sharing.
          </p>
        </div>

      </div>

      <div className="focus-button">

        <Link to="/focus-areas">
          View All Focus Areas
        </Link>

      </div>

    </section>
  );
}

export default FocusAreas;