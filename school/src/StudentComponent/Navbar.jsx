import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
    <nav>
      <Link to="/course">My Courses</Link>
      <Link to="/register">Register</Link>
      <Link to="/lecture">Lectures</Link>
      <Link to="/grade">Grades</Link>
      <Link to="/schedule">Schedule</Link>
    </nav>
    </div>
  );
}
