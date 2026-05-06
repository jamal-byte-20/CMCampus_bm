import { Link } from "react-router-dom";

export default function Navbar(){
    return <header className="sticky top-0 z-50 pt-3">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cmc-cyan-dark">
          CMCampus
        </h1>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/about" className="hover:text-red-400">About</Link>
          <Link to="/courses" className="hover:text-red-400">Courses</Link>
          <Link to="/filieres" className="hover:text-red-400">Filieres</Link>
          <Link to="/blogs" className="hover:text-red-400 ">Blogs</Link>
        </nav>

        {/* Button */}
        <Link
          to="/login"
          className="bg-cmc-cyan-dark text-white px-5 py-2 rounded-lg hover:bg-cmc-cyan-dark transition"
        >
          Login
        </Link>
      </div>
    </header>
}