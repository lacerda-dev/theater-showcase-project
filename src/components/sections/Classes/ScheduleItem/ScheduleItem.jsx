import "./ScheduleItem.css";

export const ScheduleItem = ({ schedule }) => {
  return (
    <div className="schedule-item">
      <span className="schedule-day">{schedule.day}</span>

      <span className="schedule-time">{schedule.time}</span>

      <span className="schedule-location">{schedule.location}</span>
    </div>
  );
};
