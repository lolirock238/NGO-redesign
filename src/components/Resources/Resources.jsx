import "./Resources.css";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <section className="resources">
      <div className="section-heading">
        <span>RESOURCES</span>

        <h2>Reports & Publications</h2>

        <p>
          Access reports, policy briefs, research publications and
          guidance documents that support Kenya's non-profit sector.
        </p>
      </div>

      <div className="resource-grid">

        <div className="resource-card">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Annual Report"
          />

          <div className="resource-content">
            <h3>Annual Report</h3>

            <p>
              Discover our annual achievements, programmes,
              partnerships and organizational impact.
            </p>

            <Link to="/resources" className="resource-link">
              Read More →
            </Link>
          </div>

        </div>

        <div className="resource-card">

          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700"
            alt="Policy Brief"
          />

          <div className="resource-content">
            <h3>Policy Briefs</h3>

            <p>
              Read policy recommendations that strengthen
              governance and the non-profit sector.
            </p>

            <Link to="/resources" className="resource-link">
              Read More →
            </Link>
          </div>

        </div>

        <div className="resource-card">

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=700"
            alt="Research Publications"
          />

          <div className="resource-content">
            <h3>Research Publications</h3>

            <p>
              Explore research reports and publications that
              promote evidence-based decision making.
            </p>

            <Link to="/resources" className="resource-link">
              Read More →
            </Link>
          </div>

        </div>

      </div>

      <div className="resource-button">
        <Link className="section-btn" to="/resources">
          View All Resources
        </Link>
      </div>
    </section>
  );
}

export default Resources;