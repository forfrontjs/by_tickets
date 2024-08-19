import React, { useEffect, useRef, useState } from "react";
import "./Details.scss";
import Carousel from "./Carousel/Carousel";


const Details = () => {
  const imageContainerRef = useRef(null);
  const fixedRef = useRef(null);
  const [fixedStyle, setFixedStyle] = useState({ top: 0 });

  const scheduleContainerRef = useRef(null);
  const fixedScheduleRef = useRef(null);
  const [fixedScheduleStyle, setFixedScheduleStyle] = useState({ top: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = imageContainerRef.current;
      const fixed = fixedRef.current;

      const scheduleContainer = scheduleContainerRef.current;
      const fixedSchedule = fixedScheduleRef.current;

      if (!imageContainer || !fixed) return;
      if (!scheduleContainer || !fixedSchedule) return;

      const scheduleContainerRect = scheduleContainer.getBoundingClientRect();
      const fixedScheduleHeight = fixedSchedule.offsetHeight;
      const scheduleContainerTop = scheduleContainerRect.top;
      const scheduleContainerBottom =
        scheduleContainerRect.bottom - fixedScheduleHeight;

      const containerRect = imageContainer.getBoundingClientRect();
      const fixedHeight = fixed.offsetHeight;
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom - fixedHeight;

      if (containerTop < 0 && containerBottom > 0) {
        setFixedStyle({
          position: "fixed",
          top: 0,
          left: containerRect.left,
          width: (containerRect.width / 100) * 80,
        });
      } else if (containerTop >= 0) {
        setFixedStyle({ position: "absolute", top: 0 });
      } else if (containerBottom <= 0) {
        setFixedStyle({
          position: "absolute",

          top: imageContainer.offsetHeight - fixedHeight,
        });
      }

      if (scheduleContainerTop < 0 && scheduleContainerBottom > 0) {
        setFixedScheduleStyle({
          position: "fixed",
          top: 0,
          left: scheduleContainerRect.left,
          width: (scheduleContainerRect.width / 100) * 80,
        });
      } else if (scheduleContainerTop >= 0) {
        setFixedScheduleStyle({ position: "absolute", top: 0 });
      } else if (scheduleContainerBottom <= 0) {
        setFixedScheduleStyle({
          position: "absolute",

          top: scheduleContainer.offsetHeight - fixedScheduleHeight,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slides = [
    { image: "https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Slide+1" },
    { image: "https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Slide+2" },
    { image: "https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Slide+3" },
    { image: "https://via.placeholder.com/600x300/FFFF00/FFFFFF?text=Slide+4" },
    { image: "https://via.placeholder.com/600x300/00FFFF/FFFFFF?text=Slide+5" },
    { image: "https://via.placeholder.com/600x300/FF00FF/FFFFFF?text=Slide+6" },
    { image: "https://via.placeholder.com/600x300/800000/FFFFFF?text=Slide+7" },
    { image: "https://via.placeholder.com/600x300/008000/FFFFFF?text=Slide+8" },
    { image: "https://via.placeholder.com/600x300/000080/FFFFFF?text=Slide+9" },
    {
      image: "https://via.placeholder.com/600x300/808000/FFFFFF?text=Slide+10",
    },
    {
      image: "https://via.placeholder.com/600x300/800080/FFFFFF?text=Slide+11",
    },
    {
      image: "https://via.placeholder.com/600x300/008080/FFFFFF?text=Slide+12",
    },
    {
      image: "https://via.placeholder.com/600x300/808080/FFFFFF?text=Slide+13",
    },
    {
      image: "https://via.placeholder.com/600x300/FF8080/FFFFFF?text=Slide+14",
    },
    {
      image: "https://via.placeholder.com/600x300/80FF80/FFFFFF?text=Slide+15",
    },
  ];

  return (
    <div className="details-container">
      <div className="movie__poster"></div>
      <div className="movie-content">
        <div className="movie-image_part" ref={imageContainerRef}>
          <div
            className="testing-div"
            ref={fixedRef}
            style={{ ...fixedStyle }}
          ></div>
          <button className="trailer-button"> Watch the Thailer</button>
        </div>

        <div className="movie-description_part">
          <h1>deadpool</h1>
          <div className="movie-description_top">
            <div className="movie-description_leftside">
              <p className="description">Director:</p>
              <p className="description">Release Date:</p>
              <p className="description">Duration:</p>
              <p className="description">Genre:</p>
              <p className="description">Cast:</p>
            </div>
            <div className="movie-desctioption_rightside">
              <p className="description">Roma</p>
              <p className="description">August</p>
              <p className="description">1hour 15minute</p>
              <p className="description">Comedy, XXX</p>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                numquam, animi nobis blanditiis nihil quam?
              </p>
            </div>
          </div>
          <div className="movie-description_bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quod facilis quo quas reprehenderit minima possimus expedita
              impedit ipsa? Quo, eum est ea debitis voluptatibus pariatur quidem
              vitae ipsam officia quibusdam voluptates, sit doloremque eos dolor
              doloribus iusto sunt accusamus optio suscipit. Dolor optio minima
              sed ea vel porro vitae.
            </p>
          </div>
        </div>

        <div className="movie-schedule_part" ref={scheduleContainerRef}>
          <div
            className="schedule"
            ref={fixedScheduleRef}
            style={fixedScheduleStyle}
          ></div>
        </div>
      </div>
      <div className="movie-carousel">
        <Carousel slides={slides} slidesToShow={5} />
      </div>
    </div>
  );
};

export default Details;
