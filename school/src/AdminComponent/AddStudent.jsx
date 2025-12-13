import { useState } from "react";
import "./AddStudent.css";
import Students from "./Students.jsx";

export default function AddStudent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [studentsList, setStudentsList] = useState([]);

  const handleAddStudent = () => {
    if (!fullName || !email) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = { fullName, email };

    setStudentsList([...studentsList, newStudent]);

    setFullName("");
    setEmail("");
  };

  const handleDeleteStudent = (indexToDelete) => {
    if (!window.confirm("Delete this student?")) return;

    setStudentsList(
      studentsList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Add New Student</h3>
          <p className="sub">Register a new student in the system</p>
        </div>

        <div className="form">
          <label>Full Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            className="input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="btn">
            <button
              type="button"
              className="add-btn"
              onClick={handleAddStudent}
            >
              + Add Student
            </button>
          </div>
        </div>
      </div>

      <Students
        students={studentsList}
        onDelete={handleDeleteStudent}
      />
    </>
  );
}
