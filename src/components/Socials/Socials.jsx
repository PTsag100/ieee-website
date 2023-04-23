import React from "react";
import "./Socials.css";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="socials-container">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/groups/132835100779584"
        className="social-logo-container"
      >
        <AiFillFacebook className="hidden-icon" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/ieeeunipisb/"
        className="social-logo-container"
      >
        <AiFillInstagram />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/company/ieee-unipi-student-branch/about/"
        className="social-logo-container"
      >
        <AiFillLinkedin />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://discord.gg/pXqkFwVA"
        className="social-logo-container"
      >
        <FaDiscord />
      </a>
    </div>
  );
}
