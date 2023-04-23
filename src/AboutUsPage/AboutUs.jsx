import React from "react";
import "./AboutUs.css";
import SectionHeading from "../components/SectionHeading";

function AboutUs() {
  return (
    <section id="about-us">
      <SectionHeading
        greek={"Ποιοί Είμαστε"}
        english={"About us"}
      ></SectionHeading>
      <div className="about-us-body">
        <div className="about-us-info">
          <h1>IEEE University of Piraeus</h1>
          <p>
            The Institute of Electrical and Electronics Engineers (IEEE) is the
            world’s largest professional association dedicated to advancing
            technological innovation and excellence for the benefit
          </p>
          <p>
            IEEE’s core purpose is to foster technological innovation and
            excellence for the benefit of humanity association dedicated to
            advancing technological innovation and excellence for the benefit
          </p>
          <a className="call-to-action-link" href="#our-mission">
            Μαθε Περισσότερα
          </a>
        </div>
        <img src="./ieee_logo_blue.png" alt="" />
      </div>
    </section>
  );
}

export default AboutUs;
