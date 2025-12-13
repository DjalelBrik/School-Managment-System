import "./Teachers.css";
import Teacher from "./Teacher.jsx";

export default function Teachers({ teachers, onDelete }) {
  return (
    <div className="box">
      <div className="Title">
        <h3>All Teachers</h3>
        <p>Manage teaching staff</p>
      </div>

      <div className="Container-courses">
        {teachers.length > 0 ? (
          teachers.map((teacher, index) => (
            <Teacher
              key={index}
              nameteacher={teacher.fullName}
              email={teacher.email}
              language={teacher.specialization}
              onDelete={() => onDelete(index)}   
            />
          ))
        ) : (
          <p className="No">No teachers added yet.</p>
        )}
      </div>
    </div>
  );
}
