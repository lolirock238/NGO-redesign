import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function Partner() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Partner With Us</h1>
          <p>
            Work together with us to strengthen Kenya's non-profit sector.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Become a Partner</h2>

          <p>
            We welcome collaborations with development partners,
            government agencies, private sector organizations and civil
            society organizations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Partner;