import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Team from "../pages/Team";
import FocusAreas from "../pages/FocusAreas";
import Partner from "../pages/Partner";
import JoinUs from "../pages/JoinUs";
import Resources from "../pages/Resources";
import Media from "../pages/Media";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/team" element={<Team />} />

        <Route path="/focus-areas" element={<FocusAreas />} />

        <Route path="/partner" element={<Partner />} />

        <Route path="/join-us" element={<JoinUs />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/media" element={<Media />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;