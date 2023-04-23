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
        <source src="/glob3 (1).mp4" type="video/mp4"></source>
      </video>
      <div className="landing-page-container">
        <div className="ieee-logo">
          <img src="/ieee mb white png.png" alt="IEEE Logo" />

          {/* <h1>
            <span>I</span>EEE
          </h1> */}
        </div>
        <p>
          Το IEEE, ή το Ινστιτούτο Ηλεκτρολόγων και Ηλεκτρονικών Μηχανικών,
          είναι ο μεγαλύτερος τεχνικός επαγγελματικός οργανισμός στον κόσμο
          αφιερωμένος στην πρόοδο της τεχνολογίας προς όφελος της ανθρωπότητας.{" "}
        </p>
        <p>
          Η συμμετοχή στο IEEE προσφέρει πολλά οφέλη, όπως πρόσβαση σε έρευνα
          αιχμής, ευκαιρίες δικτύωσης με ομοϊδεάτες επαγγελματίες και πρόσβαση
          σε πολύτιμους εκπαιδευτικούς πόρους.
        </p>
        <div className="button-container">
          <a href="#about-us">Μάθε Περισσότερα</a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
