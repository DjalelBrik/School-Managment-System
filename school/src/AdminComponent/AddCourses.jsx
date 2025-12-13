import { useState } from "react";
import "./AddCourses.css";
import Courses from "./Courses";

export default function AddCourses() {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");

  const [coursesList, setCoursesList] = useState([]);

  const handleCreate = () => {
    if (!language || !level || !name || !capacity) {
      alert("Please fill all fields");
      return;
    }

    const newCourse = { language, level, name, capacity };

    setCoursesList([...coursesList, newCourse]);

    setLanguage("");
    setLevel("");
    setName("");
    setCapacity("");
  };

  const handleDeleteCourse = (indexToDelete) => {
    if (!window.confirm("Delete this course?")) return;

    setCoursesList(
      coursesList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Create New Course</h3>
          <p className="sub">Add a new language course to the system</p>
        </div>

        <div className="form">
          <label>Language</label>
          <select
            className="input"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="" disabled hidden>Select a language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>German</option>
            <option>Italian</option>
            <option>Portuguese</option>
            <option>Japanese</option>
            <option>Chinese</option>
            <option>French</option>
          </select>

          <label>Level</label>
          <select
            className="input"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="" disabled hidden>Select Level</option>
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B2</option>
            <option>C1</option>
            <option>C2</option>
          </select>

          <label>Course Name</label>
          <input
            type="text"
            className="input"
            placeholder="Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Maximum Capacity</label>
          <input
            type="number"
            className="input"
            placeholder="Maximum Capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />

          <div className="btn">
            <button type="button" className="add-btn" onClick={handleCreate}>
              + Create Course
            </button>
          </div>
        </div>
      </div>

      <Courses
        courses={coursesList}
        onDelete={handleDeleteCourse}
      />
    </>
  );
}
