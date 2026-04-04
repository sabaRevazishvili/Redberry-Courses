import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/courseDetails" element={<CourseDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
