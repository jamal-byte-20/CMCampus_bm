export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">CMCampus</h1>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/lessons'>Lessons</Link>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </header>
  );
}