import Header from "./StudentComponent/Header";
import { Routes, Route } from "react-router-dom";
import Course from "./StudentComponent/MyCourses";
import Grade from "./StudentComponent/MyGrade";
import Lecture from "./StudentComponent/MyLecture";
import Register from "./StudentComponent/MyRegister";
import Schedule from "./StudentComponent/MySchedule";

export default function App() {
  return (
    <>
      <Header />  
      <div className="main-content">
        <Routes>
          <Route path="/course" element={<Course />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
}
