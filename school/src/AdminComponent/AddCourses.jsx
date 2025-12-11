import "./AddCourses.css";
import Courses from "./Courses"
export default function AddCourses() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Create New Course</h3>
          <p className="sub">Add a new language course to the system</p>
        </div>

        <div className="form">

          <label>Language</label>
          <select className="input">
            <option value="" disabled selected hidden>Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
          </select>

          <label>Level</label>
          <select className="input">
            <option value="" disabled selected hidden>Select Level</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
          </select>

          <label>Course Name</label>
          <input type="text" className="input" placeholder="e.g., English - Beginner" />

          <label>Maximum Capacity</label>
          <input type="number" className="input" placeholder="Enter capacity" />
         <div className="btn">
          <button className="add-btn">+ Create Course</button></div>
        </div>
      </div >
      <div className="Box"><Courses/>
</div>
    </>
  );
}
