import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs"
import About from "../pages/About";
import Lessons from "../pages/Lessons";
import Navbar from "../components/Navbar";

export default function AppRoutes() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<Lessons />} />
    </Routes>
    </>
  );
}