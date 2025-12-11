import "./MyLecture.css";
import Lecture from "./Lecture";
import { StickyNote } from "lucide-react";
import Add from "./AddLecture.jsx"
export default function MyLecture() {
  return (
  <div className="Page">
      <div><Add/></div>
    <div className="Box">
      <div className="Title">
        <div className="Stick"><StickyNote/>
                 <h3>Published Lectures</h3>

        </div>
        <div>
     <p>All lectures you've created</p>
        </div>
      </div>
     
      <div className="Course">
        <Lecture />      
      </div>
    </div>
 </div> );
}
