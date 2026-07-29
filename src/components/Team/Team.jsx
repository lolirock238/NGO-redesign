import "./Team.css";
import { Link } from "react-router-dom";

function Team() {
  return (
    <section className="team">
      <div className="team-container">

        <div className="section-heading">
          <span>OUR TEAM</span>
          <h2>Meet the Leadership Team</h2>
          <p>
            Our team is committed to strengthening Kenya's non-profit
            sector through leadership, collaboration and advocacy.
          </p>
        </div>

        <div className="team-grid">

          <div className="team-card">
            <div className="team-image"></div>
            <h3>Executive Director</h3>
            <p>Leadership & Strategy</p>
          </div>

          <div className="team-card">
            <div className="team-image"></div>
            <h3>Programme Manager</h3>
            <p>Programme Coordination</p>
          </div>

          <div className="team-card">
            <div className="team-image"></div>
            <h3>Communications Lead</h3>
            <p>Media & Partnerships</p>
          </div>

        </div>

        <Link className="section-btn" to="/team">
          Meet the Team
        </Link>

      </div>
    </section>
  );
}

export default Team;