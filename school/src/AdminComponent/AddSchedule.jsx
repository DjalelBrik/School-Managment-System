import { useState } from "react";
import "./AddSchedule.css";
import Schedules from "./Schedules.jsx";

export default function AddSchedule() {
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");
  const [day, setDay] = useState("");
  const [room, setRoom] = useState("");
  const [time, setTime] = useState("");

  const [schedulesList, setSchedulesList] = useState([]);

  const handleAddSchedule = () => {
    if (!course || !teacher || !day || !room || !time) {
      alert("Please fill all fields");
      return;
    }

    const newSchedule = { course, teacher, day, room, time };

    setSchedulesList([...schedulesList, newSchedule]);

    setCourse("");
    setTeacher("");
    setDay("");
    setRoom("");
    setTime("");
  };

  const handleDeleteSchedule = (indexToDelete) => {
    if (!window.confirm("Delete this schedule?")) return;

    setSchedulesList(
      schedulesList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Create New Schedule</h3>
          <p className="sub">Add a class schedule to the system</p>
        </div>

        <div className="form">
          <label>Course</label>
          <input
            type="text"
            className="input"
            value={course}
            placeholder="Enter Course name"
            onChange={(e) => setCourse(e.target.value)}
          />

          <label>Teacher</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Name of Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />

          <label>Day</label>
          <select
            className="input"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="" disabled hidden>Select day</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <label>Room</label>
          <select
            className="input"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="" disabled hidden>Select room</option>
            <option>Room101</option>
            <option>Room102</option>
            <option>Room103</option>
            <option>Room201</option>
            <option>Room202</option>
            <option>Room203</option>
            <option>Room301</option>
          </select>

          <label>Time</label>
          <input
            type="text"
            placeholder="9:00 - 11:30"
            className="input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <div className="btn">
            <button type="button" className="add-button" onClick={handleAddSchedule}>
              + Create Schedule
            </button>
          </div>
        </div>
      </div>

      <Schedules
        schedules={schedulesList}
        onDelete={handleDeleteSchedule}
      />
    </>
  );
}
