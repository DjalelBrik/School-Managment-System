import { BrowserRouter } from "react-router-dom";
import App from "./App";

export default function Layout() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
