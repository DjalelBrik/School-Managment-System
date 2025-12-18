import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./Sign/layout"
import { CoursesProvider } from "./StudentComponent/CoursesContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoursesProvider>
    <Header />
    </CoursesProvider>
  </StrictMode>,
)
