import "./Teacher.css";
import { Trash2Icon } from "lucide-react";

export default function Teacher({
  nameteacher,
  email,
  language,
  onDelete
}) {
  return (
    <div className="Container">
      <div className="Tit">
        <div>
          <p>Mr/Ms {nameteacher}</p>
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

      <div className="button">
        {language}
      </div>
    </div>
  );
}
