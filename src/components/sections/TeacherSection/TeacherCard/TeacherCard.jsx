import React from "react";
import "./TeacherCard.css";

export const TeacherCard = ({ teacher, reverse }) => {
  return (
    <article className={`teacher-card ${reverse ? "reverse" : ""}`}>
      <div className="teacher-image-container">
        <div className="teacher-image-decoration"></div>

        <img src={teacher.image} alt={teacher.name} className="teacher-image" />
      </div>

      <div className="teacher-content">
        <span className="teacher-experience">
          {teacher.experience}+ anos de experiência
        </span>

        <h3>{teacher.name}</h3>

        <h4>{teacher.role}</h4>

        <span className="teacher-line"></span>

        <p>{teacher.bio}</p>
      </div>
    </article>
  );
};
