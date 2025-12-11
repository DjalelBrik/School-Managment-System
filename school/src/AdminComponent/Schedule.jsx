import "./Schedule.css"
import {Trash2Icon} from "lucide-react"
export default function Schedule(){
return(<div className="Container"> <div className="Tit"> 
 <div> <p>English - Beginner</p>
    <p>Ms. Johnson</p></div>
     <button className="Trash"><Trash2Icon size={20}/></button></div>
     <div className="time-room">
        <p>Monday</p>
        <p>9:00 - 10:30</p>
        <p>Room101</p>
     </div>
</div>
);

}