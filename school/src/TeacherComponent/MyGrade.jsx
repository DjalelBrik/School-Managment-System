import "./MyGrade.css";
import Grade from "./Grade";
import { GraduationCap } from "lucide-react";

export default function MyGrade({ grades, onDelete }) {
  return (
    <div className="Page">
      <div className="Box">
        <div className="Title">
          <div className="Stick">
            <GraduationCap />
            <h3>My Grades</h3>
          </div>
          <p>View your academic performance</p>
        </div>

        <div className="Course">
          {grades.length > 0 ? (
            grades.map((item, index) => (
              <Grade
                key={index}
                student={item.student}
                course={item.course}
                assignment={item.assignment}
                grade={item.grade}
                onDelete={() => onDelete(index)}
              />
            ))
          ) : (
            <p className="No">No grades added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
