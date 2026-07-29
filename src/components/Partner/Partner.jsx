import "./Partner.css";
import { Link } from "react-router-dom";

function Partner() {
  return (
    <section className="partner">
      <div className="partner-header">
        <span className="section-tag">OUR PARTNERS</span>

        <h2>Working Together for Greater Impact</h2>

        <p>
          We collaborate with civil society organizations,
          development partners, government institutions and
          international agencies to strengthen Kenya's
          non-profit sector through meaningful partnerships.
        </p>
      </div>

      <div className="partner-grid">

        <div className="partner-card">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="Development Partners"
          />

          <div className="partner-content">

            <h3>Development Partners</h3>

            <p>
              Supporting sustainable development through
              innovation, strategic funding and long-term
              collaboration with organizations across Kenya.
            </p>

          </div>

        </div>

        <div className="partner-card">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Civil Society Organizations"
          />

          <div className="partner-content">

            <h3>Civil Society Organizations</h3>

            <p>
              Building stronger networks that promote
              accountability, transparency, knowledge
              sharing and collective action.
            </p>

          </div>

        </div>

        <div className="partner-card">

          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
            alt="Government Agencies"
          />

          <div className="partner-content">

            <h3>Government Agencies</h3>

            <p>
              Working closely with public institutions
              to create an enabling environment for
              Kenya's non-profit sector.
            </p>

          </div>

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