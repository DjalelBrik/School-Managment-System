import { Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Role from "./RoleSelect"
import Admin from "../AdminComponent/App"
import Student from "../StudentComponent/App"
import Teacher from "../TeacherComponent/App"

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/role" element={<Role />} />
           <Route path="/admin/*" element={<Admin />} />
           <Route path="/teacher/*" element={<Teacher />} />
           <Route path="/student/*" element={<Student />} />

        </Routes>
    </>
  );
}
