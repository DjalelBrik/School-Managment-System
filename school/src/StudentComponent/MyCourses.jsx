import "./MyCourses.css";
import Course from "./Course";
import { useContext } from "react";
import { CoursesContext } from "./CoursesContext";

export default function MyCourses() {
  const { courses } = useContext(CoursesContext);

  return (
    <div className="Box">
      <div className="Title">
        <h3>My Enrolled Courses</h3>
        <p>Courses you are currently taking</p>
      </div>

      <div className="Course">
        {courses.length === 0 && <p>No courses yet</p>}

        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
