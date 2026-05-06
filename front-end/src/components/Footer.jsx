export default function Footer() {
  return (
    <footer className="bg-bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">CMCampus</h2>
          <p className="mt-4 text-sm leading-7">
            CMC Beni Mellal is a vocational training center under OFPPT,
            offering modern and professional training programs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/filieres" className="hover:text-white">Filières</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="/lessons" className="hover:text-white">Lessons</a></li>
          </ul>
        </div>

        {/* Filières */}
        <div>
          <h3 className="text-white font-semibold mb-4">Filières</h3>
          <ul className="space-y-2 text-sm">
            <li>Développement Digital</li>
            <li>Infrastructure Digitale</li>
            <li>Gestion des Entreprises</li>
            <li>Commerce</li>
            <li>Électricité</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Beni Mellal, Morocco</li>
            <li>Email: contact@cmc.ma</li>
            <li>Phone: +212 5 00 00 00 00</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-6 text-sm">
        © {new Date().getFullYear()} CMCampus - CMC Beni Mellal. All rights reserved.
      </div>
    </footer>
  );
}