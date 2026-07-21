import React from "react";
import "./Teachers.css";

import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { TeacherCard } from "./TeacherCard/TeacherCard.jsx";
import { teachers } from "./teacherData.js";

export const Teachers = () => {
  return (
    <section id="teachers" className="teacher-section">
      <div className="teacher-background-word">PESSOAS</div>

      <SectionTitle title="Professores" color="light" />

      <span className="teacher-divider"></span>

      <h2 className="teacher-subtitle">
        Pessoas que transformam talento em confiança, criatividade e crescimento
        através do teatro.
      </h2>

      <div className="teacher-list">
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};
