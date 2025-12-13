import { createContext, useState } from "react";

export const CoursesContext = createContext();

export function CoursesProvider({ children }) {
  const [courses, setCourses] = useState([]);

  const enrollCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  return (
    <CoursesContext.Provider value={{ courses, enrollCourse }}>
      {children}
    </CoursesContext.Provider>
  );
}
