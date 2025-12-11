import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Course from "./MyCourses";
import Grade from "./MyGrade";
import Lecture from "./MyLecture";
import List from "./MyListCLass";
import Schedule from "./MySchedule";

export default function App() {
  return (
    <>
      <Header />  
      <div className="main-content">
        <Routes>
          <Route path="/course" element={<Course />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/list" element={<List />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
}
