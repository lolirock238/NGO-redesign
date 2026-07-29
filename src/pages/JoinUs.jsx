import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function JoinUs() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Join Us</h1>
          <p>
            Become part of a growing network committed to strengthening
            Kenya's non-profit sector.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Get Involved</h2>

          <p>
            Join our initiatives, participate in events, contribute your
            expertise and collaborate with organizations making a
            difference.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JoinUs;