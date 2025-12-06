import { Plus } from "lucide-react";
import "./AddLecture.css";

export default function AddLecture() {
  return (
    <div className="container">
      <div className="header">
        <p className="title">
          <Plus size={20} /> Add New Lecture
        </p>
        <p className="sub">Create lecture materials for your students</p>
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

        <label>Lecture Title</label>
        <input
          className="input"
          type="text"
          placeholder="e.g., Introduction to Past Tense"
        />

        <label>Date</label>
        <input
          className="input"
          type="date"
          placeholder="mm/dd/yyyy"
        />

        <label>Lecture Content</label>
        <textarea
          className="input textarea-field"
          placeholder="Enter the lecture content and materials..."
        ></textarea>

        <label>Upload Materials</label>
        <input className="input file" type="file" />

        <button className="add-btn">+ Add Lecture</button>
      </div>
    </div>
  );
}
