import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
<nav>
<NavLink
  to="/student/course"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Course
</NavLink>

<NavLink
  to="/student/register"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Register
</NavLink>

<NavLink
  to="/student/lecture"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Lecture
</NavLink>

<NavLink
  to="/student/grade"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Grade
</NavLink>

<NavLink
  to="/student/schedule"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Schedule
</NavLink>
</nav>
    </div>
  );
}
