import "./Schedule.css"
import { School } from "lucide-react"
export default function Schedule(){
    return(<>
        <div className="Box">
            <div className="About">
            <p className="teacher">English - Beginner</p>
             <div className="Logo">
              <p><School/>Room101</p>
            </div>
            </div>
           
               <div className="time"> <p>Monday</p>
        <p>9:00 - 10:30</p></div>
        </div>
     
    </>);
}