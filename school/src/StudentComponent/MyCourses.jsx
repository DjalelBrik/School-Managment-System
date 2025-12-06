import "./MyCourses.css";
import Course from "./Course";

export default function MyCourses() {
  return (
    <div className="Box">
      <div className="Title">
        <h3>My Enrolled Courses</h3>
        <p>Courses you are currently taking</p>
      </div>

      <div className="Course">
        <Course />      

      </div>
    </div>
  );
}
