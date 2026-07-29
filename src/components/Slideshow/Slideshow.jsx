import { useEffect, useState } from "react";
import "./Slideshow.css";

import Slide1 from "../../assets/images/slideshow/slide1.png";
import Slide2 from "../../assets/images/slideshow/slide2.png";
import Slide3 from "../../assets/images/slideshow/slide3.png";
import Slide4 from "../../assets/images/slideshow/slide4.png";
import Slide5 from "../../assets/images/slideshow/slide5.png";

function Slideshow() {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={index === current ? "slide active" : "slide"}
        />
      ))}
    </div>
  );
}

export default Slideshow;
