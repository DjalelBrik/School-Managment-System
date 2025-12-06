import "./Grade.css"
import { Calendar } from "lucide-react"
export default function Grade(){
    return(
        <div className="Box">
            <div className="About">
            <h3 className="Title">Vocabulary Quiz</h3>
            <p className="teacher">English - Beginner</p>
            </div>
            <div className="Logo">
              <p><Calendar/>2024-12-12</p>
            </div>
        </div>
    );
}