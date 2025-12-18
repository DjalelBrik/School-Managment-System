import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <nav>
        <NavLink
          to="/admin/course"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Courses
        </NavLink>

        <NavLink
          to="/admin/teacher"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Teacher
        </NavLink>

        <NavLink
          to="/admin/student"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Student
        </NavLink>

        <NavLink
          to="/admin/schedule"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Schedules
        </NavLink>
      </nav>
    </div>
  );
}
