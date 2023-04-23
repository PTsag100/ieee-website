import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
function Navbar({ setDisableScroll }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav>
      <a
        href="https://www.unipi.gr/unipi/el/"
        target="_blank"
        rel="noreferrer"
        className="logo"
      >
        <img src="/papei_logo.png" alt="papei logo" />
        <div className="university-name">
          <span>ΠΑΝΕΠΙΣΤΗΜΙΟ ΠΕΙΡΑΙΩΣ</span>
          <span>UNIVERSITY OF PIRAEUS</span>
        </div>
      </a>
      <div
        className="links"
        style={showMobileMenu ? { right: "0" } : { right: "-100%" }}
      >
        <a
          href="#about-us"
          onClick={() => {
            setShowMobileMenu(false);
            setDisableScroll(false);
          }}
          className="about"
        >
          About
        </a>
        <a
          href="#membership"
          onClick={() => {
            setShowMobileMenu(false);
            setDisableScroll(false);
          }}
          className="about"
        >
          Memebership
        </a>
        <a
          href="#contact-page"
          onClick={() => {
            setShowMobileMenu(false);
            setDisableScroll(false);
          }}
          className="about"
        >
          Contact
        </a>
      </div>
      {!showMobileMenu ? (
        <HiMenu
          className="mobile-menu"
          onClick={() => {
            setShowMobileMenu(true);
            setDisableScroll(true);
          }}
        ></HiMenu>
      ) : (
        <VscChromeClose
          className="mobile-menu"
          onClick={() => {
            setShowMobileMenu(false);
            setDisableScroll(false);
          }}
        ></VscChromeClose>
      )}
    </nav>
  );
}

export default Navbar;
