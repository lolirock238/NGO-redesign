import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function Team() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>
            Meet the leadership and professionals driving the Kenya NPO
            Working Group's mission.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Leadership Team</h2>

          <p>
            Our team provides strategic leadership, programme coordination,
            stakeholder engagement and communications to strengthen the
            non-profit sector across Kenya.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Team;