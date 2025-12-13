import "./Schedule.css";
import { Trash2Icon } from "lucide-react";

export default function Schedule({
  course,
  teacher,
  day,
  room,
  time,
  onDelete
}) {
  return (
    <div className="Container">
      <div className="Tit">
        <div>
          <p>{course}</p>
          <p>{teacher}</p>
        </div>

        <button
          type="button"
          className="Trash"
          onClick={onDelete}  
        >
          <Trash2Icon size={20} />
        </button>
      </div>

      <div className="time-room">
        <p>{day}</p>
        <p>{time}</p>
        <p>{room}</p>
      </div>
    </div>
  );
}
