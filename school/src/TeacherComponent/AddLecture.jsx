import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import "./AddLecture.css";
import MyLecture from "./MyLecture";

export default function AddLecture() {
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const [lectures, setLectures] = useState([]);

  const fileInputRef = useRef(null);

  const handleAddLecture = () => {
    if (!course || !title || !date || !content) {
      alert("Please fill all required fields");
      return;
    }

    const newLecture = {
      course,
      title,
      date,
      content,
      file,
    };

    setLectures([...lectures, newLecture]);

    setCourse("");
    setTitle("");
    setDate("");
    setContent("");
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDeleteLecture = (indexToDelete) => {
    if (!window.confirm("Delete this lecture?")) return;

    setLectures(
      lectures.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <p className="title">
            <Plus size={20} /> Add New Lecture
          </p>
          <p className="sub">Create lecture materials for your students</p>
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

          <label>Lecture Title</label>
          <input
            className="input"
            type="text"
            placeholder="e.g., Introduction to Past Tense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Date</label>
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Lecture Content</label>
          <textarea
            className="input textarea-field"
            placeholder="Enter the lecture content and materials..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label>Upload Materials</label>
          <input
            ref={fileInputRef}
            className="input file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button className="add-btn" onClick={handleAddLecture}>
            + Add Lecture
          </button>
        </div>
      </div>

      <MyLecture lectures={lectures} onDelete={handleDeleteLecture} />
    </>
  );
}
