import "./Course.css"
import { BookOpen } from "lucide-react";
export default function Course({title,nameteacher,degree}){
    return(
        <div className="Box">
            <div className="About">
                <div>
        <h3 className="Title">{title}</h3>
            <p className="teacher">{nameteacher}</p>
            </div>
            <p className="Degree">{degree}</p>
            </div>
            <div className="Logo">
              <BookOpen/>
              <p>Active Course</p>
            </div>
        </div>
    );
}