import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/courseDetails" element={<CourseDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
