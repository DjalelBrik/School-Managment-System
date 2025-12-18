import "./Signup.css";
import { Mail, Lock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <BookOpen size={28} />
          </div>

          <h2>Create Account</h2>
          <p className="auth-subtitle">
            Join the Language School Portal today
          </p>

          <label>Full Name</label>
          <div className="input-group">
            <User size={18} />
            <input type="text" placeholder="Enter your full name" />
          </div>

          <label>Email</label>
          <div className="input-group">
            <Mail size={18} />
            <input type="email" placeholder="Enter your email" />
          </div>

          <label>Password</label>
          <div className="input-group">
            <Lock size={18} />
            <input type="password" placeholder="Create a password" />
          </div>

          <label>Confirm Password</label>
          <div className="input-group">
            <Lock size={18} />
            <input type="password" placeholder="Confirm your password" />
          </div>

          <label className="checkbox terms">
            <input type="checkbox" />
            I agree to the Terms of Service and Privacy Policy
          </label>


<Link to="/role" className="primary-btn link-btn">
Create Account
</Link>
          <p className="auth-footer">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
