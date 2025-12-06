import "./MySchedule.css";
import Schedule from "./Schedule";
import { Clock } from "lucide-react";
export default function MyGrade() {
  return (
    <div className="Box">
      <div className="Title">
        <div className="Stick"><Clock/>
                 <h3>My Schedule</h3>

        </div>
        <div>
     <p>Your weekly class schedule</p>
        </div>
      </div>

      <div className="Course">
        <Schedule />      
      </div>
    </div>
  );
}
