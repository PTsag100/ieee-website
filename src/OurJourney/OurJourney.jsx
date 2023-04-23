import React from "react";
import "./OurJourney.css";
import SectionHeading from "../components/SectionHeading";
export default function OurJourney() {
  return (
    <section id="our-journey">
      <SectionHeading greek={"Το ταξίδι μας"} english={"Our journey"} />
      <div className="image-grid">
        <div className="img-container">
          <img src="us1.jpg" alt="event" />
        </div>
        <div className="img-container">
          <img src="us2.jpg" alt="event" />
        </div>
        <div className="img-container">
          <img src="us3.jpg" alt="event" />
        </div>
        <div className="img-container">
          <img src="us4.jpg" alt="event" />
        </div>
        <div className="img-container">
          <img src="us5.jpg" alt="event" />
        </div>
        <div className="img-container">
          <img src="us6.jpg" alt="event" />
        </div>
      </div>
    </section>
  );
}
