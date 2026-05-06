import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs"
import About from "../pages/About";

import Filieres from "../pages/Filieres";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Courses from "../pages/Courses";

export default function AppRoutes() {
  return (
    <div className="bg-gray-100">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/filieres" element={<Filieres />} />
    </Routes>
    <Footer/>
    </div>
  );
}