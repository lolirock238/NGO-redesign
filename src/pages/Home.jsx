import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import FocusAreas from "../components/FocusAreas/FocusAreas";
import Team from "../components/Team/Team";
import Partner from "../components/Partner/Partner";
import Resources from "../components/Resources/Resources";
import Media from "../components/Media/Media";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <FocusAreas />

      <Team />

      <Partner />

      <Resources />

      <Media />

      <JoinUs />

      <Footer />
    </>
  );
}

export default Home;
