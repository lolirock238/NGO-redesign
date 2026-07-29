import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function Resources() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Resources</h1>
          <p>
            Browse publications, reports and research materials.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Knowledge Hub</h2>

          <p>
            Access policy briefs, annual reports, research publications
            and practical resources that support Kenya's non-profit
            organizations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Resources;