import "./Students.css";
import Student from "./Student.jsx";

export default function Students({ students, onDelete }) {
  return (
    <div className="box">
      <div className="Title">
        <h3>All Students</h3>
        <p>Manage student record</p>
      </div>

      <div className="Container-courses">
        {students.length > 0 ? (
          students.map((student, index) => (
            <Student
              key={index}
              namestudent={student.fullName}
              email={student.email}
              onDelete={() => onDelete(index)}   
            />
          ))
        ) : (
          <p className="No">No students added yet.</p>
        )}
      </div>
    </div>
  );
}
