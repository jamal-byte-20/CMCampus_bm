import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";

import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import About from "../pages/About";
// import Lessons from "../pages/Lessons";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Filieres from "../pages/Filieres";

import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ── Main App Routes (with Navbar and Footer) ── */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/filieres" element={<Filieres />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ── Authentication Routes (without Navbar and Footer) ── */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

// import Filieres from "../pages/Filieres";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Courses from "../pages/Courses";

// export default function AppRoutes() {
//   return (
//     <div className="bg-gray-100">
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/blogs" element={<Blogs />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/courses" element={<Courses />} />
//       <Route path="/filieres" element={<Filieres />} />
//     </Routes>
//     <Footer/>
//     </div>
//   );
// }