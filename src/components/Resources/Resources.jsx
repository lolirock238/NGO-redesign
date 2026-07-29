import "./Resources.css";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <section className="resources">

      <div className="section-heading">

        <span>RESOURCES</span>

        <h2>Reports & Publications</h2>

        <p>
          Explore publications, policy briefs,
          research papers and useful resources.
        </p>

      </div>

      <div className="resource-grid">

        <div className="resource-card">
          <h3>Annual Report</h3>
          <p>Latest annual report.</p>
        </div>

        <div className="resource-card">
          <h3>Policy Brief</h3>
          <p>Current policy recommendations.</p>
        </div>

        <div className="resource-card">
          <h3>Research</h3>
          <p>Sector research publications.</p>
        </div>

      </div>

      <Link className="section-btn" to="/resources">
        View Resources
      </Link>

    </section>
  );
}

export default Resources;