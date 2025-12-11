import "./AddStudent.css";
import Students from "./Students.jsx"
export default function AddStudent() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Add New Student</h3>
          <p className="sub">Register a new Student in the system</p>
        </div>

        <div className="form">

          <label>Full Name</label>
        <input type="text" className="input" placeholder="Full Name of Student" />

        <label htmlFor="">Email Address</label>
          <input type="email" className="input" placeholder="student@gmail.com" />
          <div className="btn">
          <button className="add-btn">+ Add Teacher</button>
        </div>
        </div>
      </div>
<Students/>
    </>
  );
}
