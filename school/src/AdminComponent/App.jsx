import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Course from "./AddCourses";
import Teacher from "./AddTeacher";
import Student from "./AddStudent";
import Schedule from "./AddSchedule";

export default function App() {
  return (
    <>
      <Header />  
      <div className="main-content">
        <Routes>

          <Route path="/course" element={<Course />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
}
