import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <nav>
        <NavLink
          to="/teacher/course"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Courses
        </NavLink>

        <NavLink
          to="/teacher/schedule"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Schedule
        </NavLink>

        <NavLink
          to="/teacher/lecture"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Add Lectures
        </NavLink>

        <NavLink
          to="/teacher/grade"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Manage Grades
        </NavLink>

        <NavLink
          to="/teacher/list"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Class List
        </NavLink>
      </nav>
    </div>
  );
}
