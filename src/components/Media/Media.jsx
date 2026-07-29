import "./Media.css";
import { Link } from "react-router-dom";

function Media() {
  return (
    <section className="media">

      <div className="section-heading">

        <span>MEDIA</span>

        <h2>Latest News & Events</h2>

        <p>
          Stay updated with news,
          events and activities from
          Kenya NPO Working Group.
        </p>

      </div>

      <div className="media-grid">

        <div className="media-card">
          <div className="media-image"></div>
          <h3>Upcoming Event</h3>
        </div>

        <div className="media-card">
          <div className="media-image"></div>
          <h3>Latest News</h3>
        </div>

        <div className="media-card">
          <div className="media-image"></div>
          <h3>Photo Gallery</h3>
        </div>

      </div>

      <Link className="section-btn" to="/media">
        View Media
      </Link>

    </section>
  );
}

export default Media;