import "./JoinUs.css";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <section className="join-us">

      <div className="join-container">

        <h2>Become Part of the Network</h2>

        <p>
          Join organizations and individuals working together
          to strengthen Kenya's non-profit sector.
        </p>

        <Link to="/join-us" className="section-btn">
          Join Us
        </Link>

      </div>

    </section>
  );
}

export default JoinUs;