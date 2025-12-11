import "./Course.css"
import {Trash2Icon} from "lucide-react"
export default function Course(){
return(<div className="Container"> <div className="title"> 
 <div> <h3>English-Beginner</h3>
    <p>English</p></div>
     <span>A1</span></div>
     <div className="btn">
     <button ><Trash2Icon size={18}/> Delete Course </button></div>
</div>
);

}