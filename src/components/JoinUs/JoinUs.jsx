import "./JoinUs.css";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <section className="join-us">

      <div className="join-header">
        <span>GET INVOLVED</span>

        <h2>Become Part of the Network</h2>

        <p>
          Join organizations, development partners and individuals
          working together to strengthen Kenya's non-profit sector.
        </p>
      </div>

      <div className="join-grid">

        {/* Left Side */}

        <div className="join-info">

          <h3>Let's Work Together</h3>

          <p>
            Whether you're interested in collaboration, partnerships,
            membership or learning more about our work, we'd love
            to hear from you.
          </p>

          <div className="contact-details">

            <div className="detail">
              <h4>Office Address</h4>
              <p>
                Kenya NPO Working Group<br />
                Nairobi, Kenya
              </p>
            </div>

            <div className="detail">
              <h4>Email</h4>
              <p>info@kenyanpowg.org</p>
            </div>

            <div className="detail">
              <h4>Phone</h4>
              <p>+254 700 000 000</p>
            </div>

          </div>

          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>

        </div>

        {/* Right Side */}

        <div className="message-card">

          <h3>Send a Message</h3>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default JoinUs;