import React from "react";
import "./ClassCard.css";

import { ScheduleItem } from "../ScheduleItem/ScheduleItem";

export const ClassCard = ({ classItem }) => {
  return (
    <article className="class-card">
      <div className="class-card-header">
        <h3>{classItem.name}</h3>

        <span>{classItem.age}</span>
      </div>

      <span className="class-card-divider"></span>

      <div className="schedule-list">
        {classItem.schedules.map((schedule, index) => (
          <ScheduleItem key={index} schedule={schedule} />
        ))}
      </div>
    </article>
  );
};
