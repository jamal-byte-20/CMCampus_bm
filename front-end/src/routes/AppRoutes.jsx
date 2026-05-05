import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs"
import About from "../pages/About";
import Lessons from "../pages/Lessons";

import Filieres from "../pages/Filieres";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppRoutes() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/filieres" element={<Filieres />} />
    </Routes>
    <Footer/>
    </>
  );
}