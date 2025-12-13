import "./Register.css";
import { BookOpen } from "lucide-react";
import { useContext } from "react";
import { CoursesContext } from "./CoursesContext";

export default function Register() {
  const { enrollCourse } = useContext(CoursesContext);

  const addCourse = () => {
    enrollCourse({
      id: Date.now(),
      title: "English-Beginer",
      nameteacher: "Ms-John",
      degree: "A1",
    });
  };

  return (
    <div className="Box">
      <div className="About">
        <div>
          <h3 className="Title">English-Beginer</h3>
          <p className="teacher">Ms-John</p>
        </div>
        <p className="Degree">A1</p>
      </div>

      <div className="Logo">
        <BookOpen />
        <p>Language Course</p>
      </div>

      <button onClick={addCourse}>Enroll Now</button>
    </div>
  );
}
