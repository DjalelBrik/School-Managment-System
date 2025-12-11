import "./Students.css"
import Student from "./Student.jsx"
export default function Students(){
    return(
        <div className="box">
        <div className="Title">
            <h3>All Students</h3>
            <p>Manage student record</p>
        </div>
        <div className="Container-courses">
           <Student/>
           <Student/>
           <Student/>
        </div>
        </div>
    );
}