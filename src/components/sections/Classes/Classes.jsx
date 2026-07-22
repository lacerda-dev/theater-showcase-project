import React from "react";
import "./Classes.css";

import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { ClassCard } from "./ClassCard/ClassCard";
import { classesData } from "./classesData";

export const Classes = () => {
  return (
    <section id="classes" className="classes-section">
      <SectionTitle title="Turmas" />

      <span className="classes-divider"></span>

      <h2 className="classes-subtitle">Encontre a turma ideal para você.</h2>

      <div className="classes-list">
        {classesData.map((classItem) => (
          <ClassCard key={classItem.id} classItem={classItem} />
        ))}
      </div>
    </section>
  );
};
