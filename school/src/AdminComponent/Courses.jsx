import "./Courses.css"
import Course from "./Course.jsx"
export default function Courses(){
    return(
        <div className="box">
        <div className="Title">
            <h3>All Courses</h3>
            <p>Manage existing courses</p>
        </div>
        <div className="Container-courses">
           <Course/>
           <Course/>
           <Course/>
        </div>
        </div>
    );
}