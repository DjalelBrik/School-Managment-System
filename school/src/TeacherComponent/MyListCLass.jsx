import "./MyListClass.css";
import { Users } from "lucide-react";
import Student from "./Student";

export default function List() {
  return (
    <>
      <div className="Container">
        <div className="Title">
          <div className="TitleHeader">
            <Users />
            <h3>Class List</h3>
          </div>
          <p>All students in your courses</p>
        </div>

        <div className="SectionTitle">English - Beginner</div>

        <div className="StudentList">
          <Student />
          <Student />
          <Student />
        </div>

        <div className="SectionTitle">English - Advanced</div>

        <div className="StudentList">
          <Student />
          <Student />
        </div>
      </div>
    </>
  );
}
