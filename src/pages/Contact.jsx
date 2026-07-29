import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Reach Out</h2>

          <p>Email: info@npoworkinggroup.or.ke</p>

          <p>Phone: +254 XXX XXX XXX</p>

          <p>Location: Nairobi, Kenya</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;