import "./Partner.css";
import { Link } from "react-router-dom";

function Partner() {
  return (
    <section className="partner">

      <div className="partner-header">

        <span className="section-tag">
          PARTNER
        </span>

        <h2>Working Together for Greater Impact</h2>

        <p>
          We collaborate with civil society organizations,
          development partners, government institutions, and
          international agencies to strengthen Kenya's
          non-profit sector.
        </p>

      </div>

      <div className="partner-grid">

        <div className="partner-card">
          <h3>Development Partners</h3>

          <p>
            Supporting sustainable development initiatives
            through collaboration and shared expertise.
          </p>
        </div>

        <div className="partner-card">
          <h3>Civil Society Organizations</h3>

          <p>
            Building stronger networks that promote
            accountability, transparency, and collective action.
          </p>
        </div>

        <div className="partner-card">
          <h3>Government Agencies</h3>

          <p>
            Working together to create an enabling
            environment for the non-profit sector.
          </p>
        </div>

      </div>

      <div className="partner-button">

        <Link to="/partner">
          Become a Partner
        </Link>

      </div>

    </section>
  );
}

export default Partner;