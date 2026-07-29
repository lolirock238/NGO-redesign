import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";

function Media() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Media</h1>
          <p>
            Stay updated with our latest news, events and stories.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Latest Updates</h2>

          <p>
            Explore announcements, press releases, event highlights and
            photo galleries from the Kenya NPO Working Group.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Media;