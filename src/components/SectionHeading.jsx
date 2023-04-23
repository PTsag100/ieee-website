import React from "react";
import "./SectionHeading.css";
export default function SectionHeading({ greek, english }) {
  return (
    <div className="papei-heading">
      <h2 className="greek-heading">{greek}</h2>
      <h2 className="english-heading">{english}</h2>
    </div>
  );
}
