import "./Teachers.css"
import Teacher from "./Teacher.jsx"
export default function Teachers(){
    return(
        <div className="box">
        <div className="Title">
            <h3>All Teacher</h3>
            <p>Manage teaching staff</p>
        </div>
        <div className="Container-courses">
           <Teacher/>
           <Teacher/>
           <Teacher/>
        </div>
        </div>
    );
}