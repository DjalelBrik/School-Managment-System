import "./MyRegister.css";
import Register from "./Register";

export default function MyRegister() {
  return (
    <div className="Box">
      <div className="Title">
        <h3>Available Courses</h3>
        <p>Register for new language courses</p>
      </div>

      <div className="Course">
        <Register />      

      </div>
    </div>
  );
}
