import "./Lecture.css";
import { BookOpen, Trash2Icon, Paperclip } from "lucide-react";

export default function Lecture({ lecture, onDelete }) {
  return (
    <div className="Box">
      <div className="Aboute">
        <div>
          <h3 className="Title">{lecture.title}</h3>
          <p className="teacher">
            {lecture.course} • {lecture.date}
          </p>
        </div>
        <BookOpen />
      </div>

      <div className="Logo">
        <p>{lecture.content}</p>
{lecture.file && (
  <div className="file-box">
    <a
      href={URL.createObjectURL(lecture.file)}
      download={lecture.file.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      {lecture.file.name}
    </a>
  </div>
)}

      </div>

      <button className="delete-btn" onClick={onDelete}>
        <Trash2Icon size={16} /> Delete Lecture
      </button>
    </div>
  );
}
