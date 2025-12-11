import "./Register.css"
import { BookOpen } from "lucide-react";
export default function Register(){
    return(
        <div className="Box">
            <div className="About">
                <div>
            <h3 className="Title">English-Beginer</h3>
            <p className="teacher">Ms-John</p>
            </div>
            <p className="Degree">A1</p>
            </div>
            <div className="Logo">
              <BookOpen/>
              <p>Language Course</p>
            </div>
            <button>Enroll Now</button>
        </div>
    );
}