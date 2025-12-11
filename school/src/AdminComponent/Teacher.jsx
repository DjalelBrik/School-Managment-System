import "./Teacher.css"
import {Trash2Icon} from "lucide-react"
export default function Course(){
return(<div className="Container"> <div className="Tit"> 
 <div> <p>Ms.Johnson</p>
    <p>Johnson@gmail.com</p></div>
     <button className="Trash"><Trash2Icon size={20}/></button></div>
     <div className="button">
        English
     </div>
</div>
);

}