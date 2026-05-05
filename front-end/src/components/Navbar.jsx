import { Link } from "react-router-dom";

export default function Navbar(){
    return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cmc-cyan-dark">
          CMCampus
        </h1>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-cmc-cyan-dark">Home</Link>
          <Link to="/about" className="hover:text-cmc-cyan-dark">About</Link>
          <Link to="/courses" className="hover:text-cmc-cyan-dark">Courses</Link>
          <Link to="/filieres" className="hover:text-cmc-cyan-dark">Filieres</Link>
          <Link to="/blogs" className="hover:text-cmc-cyan-dark">Blogs</Link>
        </nav>

        {/* Button */}
        <Link
          to="/login"
          className="bg-cmc-cyan text-white px-5 py-2 rounded-lg hover:bg-cmc-cyan-dark transition"
        >
          Login
        </Link>
      </div>
    </header>
}