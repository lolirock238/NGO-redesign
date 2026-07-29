import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        {/* Contact Form */}

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <p>
            We'd love to hear from you. Fill out the form below and
            our team will get back to you as soon as possible.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
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

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="detail">
            <h4>Office Address</h4>

            <p>
              Kenya NPO Working Group
              <br />
              Nairobi, Kenya
            </p>
          </div>

          <div className="detail">
            <h4>Email</h4>

            <p>info@npoworkinggroup.or.ke</p>
          </div>

          <div className="detail">
            <h4>Phone</h4>

            <p>+254 XXX XXX XXX</p>
          </div>

          <div className="detail">
            <h4>Office Hours</h4>

            <p>
              Monday – Friday
              <br />
              8:00 AM – 5:00 PM
            </p>
          </div>

          <div className="social-section">

            <h4>Follow Us</h4>

            <div className="social-links">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (Twitter)
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;