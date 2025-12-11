import "./Navbar.css";
  import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav">
    <nav>
      <Link to="/course" >My Courses</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/lecture" >Add Lectures</Link>
      <Link to="/grade">Manage Grades</Link>
      <Link to="/list" >Class List</Link>
    </nav>
    </div>
  );
}