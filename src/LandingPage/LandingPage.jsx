import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        id="myVideo"
        preload="auto"
      >
        <source src="/glob4.mp4" type="video/mp4"></source>
      </video>
      <div className="blur"></div>
      <div className="landing-page-container">
        <div className="ieee-logo">
          <img src="/ieee mb white png.png" alt="IEEE Logo" />

          {/* <h1>
            <span>I</span>EEE
          </h1> */}
        </div>
        <h1>
          Empowering the future through innovation. Join IEEE Student Branch
          today!
        </h1>
        <div className="button-container">
          <a href="#about-us">Μάθε Περισσότερα</a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
