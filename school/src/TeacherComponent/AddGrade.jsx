import { Plus } from "lucide-react";
import "./AddLecture.css";

export default function AddLecture() {
  return (
    <div className="container">
      <div className="header">
        <p className="title">
          <Plus size={20} /> Add Student Grade
        </p>
        <p className="sub">Record grades for student assignments</p>
      </div>

      <div className="form">

        <label>Course</label>
        <select className="input">
          <option value="" disabled selected hidden>
            Select a course
          </option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Deutch">Deutch</option>
        </select>

        <label>Student</label>
        <input
          className="input"
          type="text"
          placeholder="Select a Student"
        />

        <label>Assignment Name</label>
        <input
          className="input"
          type="text"
          placeholder="e.g., Vocalbulary Quiz 2"
        />

        <label>Grade</label>
        <input
          className="input"
          type="Number"
          placeholder="85"
        ></input>
        <button className="add-btn">+ Add Grade</button>
      </div>
    </div>
  );
}
