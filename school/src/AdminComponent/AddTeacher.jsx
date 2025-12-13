import { useState } from "react";
import "./AddTeacher.css";
import Teachers from "./Teachers.jsx";

export default function AddTeacher() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");

  const [teachersList, setTeachersList] = useState([]);

  const handleAddTeacher = () => {
    if (!fullName || !email || !specialization) {
      alert("Please fill all fields");
      return;
    }

    const newTeacher = { fullName, email, specialization };

    setTeachersList([...teachersList, newTeacher]);

    setFullName("");
    setEmail("");
    setSpecialization("");
  };

  const handleDeleteTeacher = (indexToDelete) => {
    if (!window.confirm("Delete this teacher?")) return;

    setTeachersList(
      teachersList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Add New Teacher</h3>
          <p className="sub">Register a new teacher in the system</p>
        </div>

        <div className="form">
          <label>Full Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name of Teacher"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            className="input"
            placeholder="teacher@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Specialization</label>
          <select
            className="input"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="" disabled hidden>
              Select specialization
            </option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
          </select>

          <div className="btn">
            <button
              type="button"
              className="add-btn"
              onClick={handleAddTeacher}
            >
              + Add Teacher
            </button>
          </div>
        </div>
      </div>

      <Teachers
        teachers={teachersList}
        onDelete={handleDeleteTeacher}
      />
    </>
  );
}
