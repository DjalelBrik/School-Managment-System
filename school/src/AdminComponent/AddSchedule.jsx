import "./AddSchedule.css";
import Schedules from "./Schedules.jsx"
export default function AddSchedule() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Create New Schedule</h3>
          <p className="sub">Add a class schedule to the system</p>
        </div>

        <div className="form">

          <label>Course</label>
        <input type="text" className="input" placeholder="Choose course" />

        <label htmlFor="">Teacher</label>
          <input type="text" className="input" placeholder="Choose Teacher" />
          <label>Day</label>
          <select className="input">
            <option value="" disabled selected hidden>Select day</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
          <label >Room</label>
           <select className="input">
            <option value="" disabled selected hidden>Select day</option>
            <option value="Room101">Room 101</option>
            <option value="Room102">Room 102</option>
            <option value="Room103">Room 103</option>
            <option value="Room201">Room 201</option>
            <option value="Room202">Room 202</option>
            <option value="Room203">Room 203</option>
            <option value="Room301">Room 301</option>
          </select>
          <label >Time</label>
          <input type="text"  placeholder="9:00 - 10:30" className="input"/>
                   <div className="btn">

          <button className="add-button">+ Create Schedule</button>
        </div>
       </div>

      </div>
<Schedules/>
    </>
  );
}
