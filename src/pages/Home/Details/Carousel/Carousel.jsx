import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ slides, slidesToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = slides.length;
  const maxIndex = totalSlides - slidesToShow;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
