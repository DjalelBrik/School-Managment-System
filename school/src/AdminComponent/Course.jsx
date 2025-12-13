import "./Course.css";
import { Trash2Icon } from "lucide-react";

export default function Course({
  title,
  description,
  degree,
  onDelete
}) {
  return (
    <div className="Container">
      <div className="title">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <span>{degree}</span>
      </div>

      <div className="btn">
        <button
          type="button"
          onClick={onDelete}  
        >
          <Trash2Icon size={18} /> Delete Course
        </button>
      </div>
    </div>
  );
}
