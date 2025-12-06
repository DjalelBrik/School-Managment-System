import "./Course.css"
import { Users } from "lucide-react";
export default function Course(){
    return(
        <div className="Box">
            <div className="About">
            <h3 className="Title">English-Beginer</h3>
            <p className="teacher">Ms-John</p>
            </div>
            <div className="Logo">
              <Users/>
              <p>24 Student enrolled</p>
            </div>
        </div>
    );
}