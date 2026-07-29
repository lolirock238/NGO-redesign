import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        <div className="contact-info">

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>Let's Work Together</h2>

          <p>
            Whether you're a non-profit organization,
            development partner, donor, or stakeholder,
            we'd love to hear from you and explore
            opportunities for collaboration.
          </p>

          <div className="contact-details">

            <div className="detail">
              <h4>Email</h4>
              <p>info@npoworkinggroup.or.ke</p>
            </div>

            <div className="detail">
              <h4>Phone</h4>
              <p>+254 XXX XXX XXX</p>
            </div>

            <div className="detail">
              <h4>Location</h4>
              <p>Nairobi, Kenya</p>
            </div>

          </div>

          <Link to="/contact" className="contact-btn">
            Get in Touch
          </Link>

        </div>

        <div className="contact-card">

          <h3>Work With Us</h3>

          <p>
            We believe collaboration creates stronger
            communities and a more vibrant civil society.
            Reach out and let's make an impact together.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;