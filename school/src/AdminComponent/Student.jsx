import "./Student.css";
import { Trash2Icon } from "lucide-react";

export default function Student({ namestudent, email, onDelete }) {
  return (
    <div className="Container">
      <div className="Tit">
        <div>
          <p>{namestudent}</p>
          <p>{email}</p>
        </div>

        <button
          type="button"
          className="Trash"
          onClick={onDelete}  
        >
          <Trash2Icon size={20} />
        </button>
      </div>
    </div>
  );
}
