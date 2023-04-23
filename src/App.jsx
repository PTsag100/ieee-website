import "./App.css";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import { useState } from "react";
import OurMission from "./OurMissionPage/OurMission";
import WhyJoin from "./WhyJoinPage/WhyJoin";
import AboutUs from "./AboutUsPage/AboutUs";
import OurJourney from "./OurJourney/OurJourney";
import Footer from "./Footer/Footer";
import Socials from "./components/Socials/Socials";
import GoogleMapComponent from "./components/GoogleMap/GoogleMap";
import ContactForm from "./ContactForm/ContactForm";
function App() {
  const [disableScroll, setDisableScroll] = useState(false);
  return (
    <div
      className="App"
      style={
        disableScroll
          ? { height: "100vh", overflow: "hidden" }
          : { overflow: "auto" }
      }
    >
      <Navbar setDisableScroll={setDisableScroll}></Navbar>
      <LandingPage></LandingPage>
      <AboutUs></AboutUs>
      <OurMission></OurMission>
      <WhyJoin></WhyJoin>
      <OurJourney />
      <ContactForm></ContactForm>
      <GoogleMapComponent />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
