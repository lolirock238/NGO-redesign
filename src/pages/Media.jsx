import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Page.css";
import "./Media.css";

function Media() {
  return (
    <>
      <Navbar />

      <header className="page-header media-header">
        <div className="container">
          <h1>Media Centre</h1>

          <p>
            Stay informed with our latest news, publications, events and
            highlights from the Kenya NPO Working Group.
          </p>
        </div>
      </header>

      <section className="media-page">
        <div className="container">
          <div className="media-section-title">
            <h2>Latest News</h2>

            <p>Recent updates from our programmes, partnerships and events.</p>
          </div>

          <div className="news-grid">
            <article className="news-card">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
                alt="Stakeholder Meeting"
              />

              <div className="news-content">
                <span>July 2026</span>

                <h3>Stakeholder Consultation Meeting</h3>

                <p>
                  Civil society organizations met to discuss strengthening
                  collaboration and policy advocacy.
                </p>
              </div>
            </article>

            <article className="news-card">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800"
                alt="Workshop"
              />

              <div className="news-content">
                <span>June 2026</span>

                <h3>Capacity Building Workshop</h3>

                <p>
                  Organizations participated in governance, compliance and
                  leadership training.
                </p>
              </div>
            </article>

            <article className="news-card">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
                alt="Conference"
              />

              <div className="news-content">
                <span>May 2026</span>

                <h3>Regional Partnership Conference</h3>

                <p>
                  Development partners explored opportunities for future
                  collaboration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="media-section-title">
            <h2>Photo Gallery</h2>

            <p>
              Highlights from meetings, workshops and community engagement
              activities.
            </p>
          </div>

          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=700"
              alt="Gallery 1"
            />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
              alt="Gallery 2"
            />

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700"
              alt="Gallery 3"
            />

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700"
              alt="Gallery 4"
            />

            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700"
              alt="Gallery 5"
            />

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
              alt="Gallery 6"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Media;
