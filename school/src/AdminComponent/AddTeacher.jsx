import "./AddTeacher.css";
import Teachers from "./Teachers.jsx"
export default function AddTeacher() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h3 className="Tit">+ Add New Teacher</h3>
          <p className="sub">Register a new teacher in the system</p>
        </div>

        <div className="form">

          <label>Full Name</label>
        <input type="text" className="input" placeholder="Name of Teacher" />

        <label htmlFor="">Email Address</label>
          <input type="email" className="input" placeholder="teacher@gmail.com" />

          <label>Specialization</label>
               <select className="input">
            <option value="" disabled selected hidden>Select specialization</option>
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
          <button className="add-btn">+ Add Teacher</button>
        </div>
        </div>
      </div>
      <div className="">
        <Teachers/>
      </div>
    </>
  );
}
