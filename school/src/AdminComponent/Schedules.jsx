import "./Schedules.css";
import Schedule from "./Schedule.jsx";

export default function Schedules({ schedules, onDelete }) {
  return (
    <div className="box">
      <div className="Title">
        <h3>All Schedules</h3>
        <p>Manage class schedules</p>
      </div>

      <div className="Container-schedule">
        {schedules.length > 0 ? (
          schedules.map((schedule, index) => (
            <Schedule
              key={index}
              course={schedule.course}
              teacher={schedule.teacher}
              day={schedule.day}
              room={schedule.room}
              time={schedule.time}
              onDelete={() => onDelete(index)}   
            />
          ))
        ) : (
          <p className="No">No schedules added yet.</p>
        )}
      </div>
    </div>
  );
}
