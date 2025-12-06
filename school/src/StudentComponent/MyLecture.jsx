import "./MyLecture.css";
import Lecture from "./Lecture";
import { StickyNote } from "lucide-react";
export default function MyLecture() {
  return (
    <div className="Box">
      <div className="Title">
        <div className="Stick"><StickyNote/>
                 <h3>Course Lecture</h3>

        </div>
        <div>
     <p>Access your course materials and lectures</p>
        </div>
      </div>

      <div className="Course">
        <Lecture />      
      </div>
    </div>
  );
}
