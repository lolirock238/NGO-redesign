import "./Media.css";
import { Link } from "react-router-dom";

function Media() {
  return (
    <section className="media">

      <div className="section-heading">

        <span>MEDIA</span>

        <h2>Latest News & Events</h2>

        <p>
          Stay informed about our latest activities, events,
          publications and highlights from across Kenya.
        </p>

      </div>

      <div className="media-grid">

        <article className="media-card">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="Stakeholder Meeting"
          />

          <div className="media-content">

            <span>July 2026</span>

            <h3>Stakeholder Consultation Meeting</h3>

            <p>
              Representatives from civil society and development
              partners met to discuss strengthening collaboration
              within Kenya's non-profit sector.
            </p>

            <Link to="/media" className="media-link">
              Read More
            </Link>

          </div>

        </article>

        <article className="media-card">

          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
            alt="Workshop"
          />

          <div className="media-content">

            <span>June 2026</span>

            <h3>Capacity Building Workshop</h3>

            <p>
              Organizations participated in governance,
              compliance and leadership training.
            </p>

            <Link to="/media" className="media-link">
              Read More
            </Link>

          </div>

        </article>

        <article className="media-card">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900"
            alt="Conference"
          />

          <div className="media-content">

            <span>May 2026</span>

            <h3>Regional Partnership Conference</h3>

            <p>
              Development partners explored opportunities
              for future collaboration across Kenya.
            </p>

            <Link to="/media" className="media-link">
              Read More
            </Link>

          </div>

        </article>

      </div>

      <div className="media-buttons">

        <Link to="/media" className="media-btn">
          View All News
        </Link>

        <Link to="/media" className="media-btn-outline">
          View Gallery
        </Link>

      </div>

    </section>
  );
}

export default Media;