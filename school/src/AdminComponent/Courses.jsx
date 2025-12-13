import "./Courses.css";
import Course from "./Course.jsx";

export default function Courses({ courses, onDelete }) {
  return (
    <div className="box">
      <div className="Title">
        <h3>All Courses</h3>
        <p>Manage existing courses</p>
      </div>

      <div className="Container-courses">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <Course
              key={index}
              title={course.name}
              description={course.language}
              degree={course.level}
              onDelete={() => onDelete(index)}   
            />
          ))
        ) : (
          <p className="No">No courses available. Add a course to get started.</p>
        )}
      </div>
    </div>
  );
}
