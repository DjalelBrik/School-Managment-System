import "./Schedules.css"
import Schedule from "./Schedule.jsx"
export default function Students(){
    return(
        <div className="box">
        <div className="Title">
            <h3>All Schedules</h3>
            <p>Manage class schedules</p>
        </div>
        <div className="Container-schedule">
           <Schedule/>
           <Schedule/>
           <Schedule/>
        </div>
        </div>
    );
}