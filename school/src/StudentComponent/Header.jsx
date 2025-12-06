import { BookOpen } from "lucide-react";
import "./Header.css"
import Navbar from "./Navbar"

export default function Header(){
   return(<>
    <header>
        <div className="logo">
        <BookOpen size={100} /></div>
        <div className="Title">
        <h3 className="title">Language School Portal</h3>
        <p className="subtitle">Manage your Learning</p>
        </div>
    </header>
    <div className="navbar"><Navbar/></div>
   
   </>);


}