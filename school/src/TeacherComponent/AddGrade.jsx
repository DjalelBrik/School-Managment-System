import { useState } from "react";
import { Plus } from "lucide-react";
import "./AddGrade.css";
import MyGrade from "./MyGrade";

export default function AddGrade() {
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState("");
  const [assignment, setAssignment] = useState("");
  const [grade, setGrade] = useState("");

  const [gradesList, setGradesList] = useState([]);

  const handleAddGrade = () => {
    if (!course || !student || !assignment || !grade) {
      alert("Please fill all fields");
      return;
    }

    const newGrade = {
      course,
      student,
      assignment,
      grade,
      
    };

    setGradesList([...gradesList, newGrade]);

    setCourse("");
    setStudent("");
    setAssignment("");
    setGrade("");


  };

  const handleDeleteGrade = (indexToDelete) => {
    if (!window.confirm("Delete this grade?")) return;

    setGradesList(
      gradesList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <p className="title">
            <Plus size={20} /> Add Student Grade
          </p>
          <p className="sub">Record grades for student assignments</p>
        </div>

        <div className="form">
          <label>Course</label>
          <select
            className="input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="" disabled hidden>
              Select a course
            </option>
            <option>English</option>
            <option>Spanish</option>
            <option>German</option>
          </select>

          <label>Student</label>
          <input
            className="input"
            type="text"
            placeholder="Student name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />

          <label>Assignment Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.g., Vocabulary Quiz 2"
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
          />

          <label>Grade</label>
          <input
            className="input"
            type="number"
            placeholder="85"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />

          <button className="add-btn" onClick={handleAddGrade}>
            + Add Grade
          </button>
        </div>
      </div>

      <MyGrade grades={gradesList} onDelete={handleDeleteGrade} />
    </>
  );
}
