import React from "react";
import "./JoinCard.css";
export default function JoinCard({ heading, text, children }) {
  return (
    <div className="join-card">
      <div className="icon-container">{children}</div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}
