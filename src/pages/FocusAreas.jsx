import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function FocusAreas() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Focus Areas</h1>
          <p>
            Discover the key areas through which we support Kenya's
            non-profit sector.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Our Areas of Work</h2>

          <p>
            Our work focuses on advocacy, policy, research, governance,
            collaboration, and capacity building for civil society
            organizations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FocusAreas;