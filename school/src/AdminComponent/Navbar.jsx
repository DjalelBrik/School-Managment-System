import "./Navbar.css";
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className="nav">
    <nav>
      <Link to="/course">Courses</Link>
      <Link to="/teacher">Teacher</Link>
      <Link to ="/student" >Student</Link>
      <Link to="/schedule">Schedules</Link>
    </nav>
    </div>
  );
}