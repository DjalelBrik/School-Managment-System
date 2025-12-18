import "./MyLecture.css";
import Lecture from "./Lecture";
import { StickyNote } from "lucide-react";

export default function MyLecture({ lectures, onDelete }) {
  return (
    <div className="Page">
      <div className="Box">
        <div className="Title">
          <div className="Stick">
            <StickyNote />
            <h3>Published Lectures</h3>
          </div>
          <p>All lectures you've created</p>
        </div>

        <div className="Course">
          {lectures.length > 0 ? (
            lectures.map((lecture, index) => (
              <Lecture
                key={index}
                lecture={lecture}
                onDelete={() => onDelete(index)}
              />
            ))
          ) : (
            <p className="No">No lectures published yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
