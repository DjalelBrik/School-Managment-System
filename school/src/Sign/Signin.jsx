import "./Signin.css";
import { Mail, Lock, BookOpen } from "lucide-react";
import {Link} from "react-router-dom"
export default function Signin() {
  return (
    <>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-icon">
            <BookOpen size={28} />
          </div>

          <h2>Welcome Back</h2>
          <p className="auth-subtitle">
            Sign in to your Language School Portal account
          </p>

          <label>Email</label>
          <div className="input-group">
            <Mail size={18} />
            <input type="email" placeholder="Enter your email" />
          </div>

          <label>Password</label>
          <div className="input-group">
            <Lock size={18} />
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="options-row">
            <label className="checkbox">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

<Link to="/role" className="primary-btn link-btn">
  Sign in
</Link>

          <p className="auth-footer">
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}
