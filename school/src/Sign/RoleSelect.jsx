import "./RoleSelect.css";
import { GraduationCap, User, Shield } from "lucide-react";
import {Link} from "react-router-dom"
export default function RoleSelect() {
  return (
    <>
      <div className="role-container">
        <div className="role-card">
          <h2>Choose Your Role</h2>
          <p className="role-subtitle">
            Select how you want to access the platform
          </p>

          <div className="role-options">
            <Link to="/student" className="role-option">
              <GraduationCap size={36} />
              <h3>Student</h3>
              <p>Access courses, lessons, and progress</p>
              </Link>
            <Link to="/teacher" className="role-option">
              <User size={36} />
              <h3>Teacher</h3>
              <p>Manage classes and students</p>
            </Link>

            <Link to="/admin"  className="role-option admin">
              <Shield size={36} />
              <h3>Admin</h3>
              <p>Full system administration</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}