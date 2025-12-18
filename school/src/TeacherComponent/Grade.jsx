import "./Grade.css";
import { Trash2Icon } from "lucide-react";

export default function Grade({
  student,
  course,
  assignment,
  grade,
  onDelete,
}) {
  return (
    <div className="Box">
      <div className="Aboutt">
        <div>
          <h3 className="Title">{student}</h3>
          <p className="teacher">
            {course} – {assignment}
          </p>
        </div>

        <div className="Grade">
          <p>{grade}</p>
        </div>
      </div>

      <button className="delete-btn" onClick={onDelete}>
        <Trash2Icon size={16} /> Delete Grade
      </button>
    </div>
  );
}
