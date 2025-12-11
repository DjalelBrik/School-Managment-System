import "./MyGrade.css";
import Grade from "./Grade";
import Add from  "./AddGrade"

import { GraduationCap } from "lucide-react";
export default function MyGrade() {
  return (<div className="Page">         <Add/>   

    <div className="Box">
      <div className="Title">
        <div className="Stick"><GraduationCap/>
                 <h3>My Grades</h3>

        </div>
        <div>
     <p>View your academic performance</p>
        </div>
      </div>

      <div className="Course">
        <Grade />   
      </div>
    </div>
 </div> );
}
