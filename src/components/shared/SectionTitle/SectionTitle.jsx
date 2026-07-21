import React from "react";
import "./SectionTitle.css";

export const SectionTitle = ({ title, color = "dark" }) => {
  return (
    <div className="title-container">
      <h1 className={`section-title ${color}`}>{title}</h1>
    </div>
  );
};
