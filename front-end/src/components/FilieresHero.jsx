// src/components/FilieresHero.jsx

import { Link } from "react-router-dom";

export default function FilieresHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(-90deg,#EAE8F1,#DDEDFE)] text-black rounded-2xl">
      
      {/* Background Shapes */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        
        {/* Badge */}
        <span className="inline-flex rounded-full bg-red-400 px-4 py-2 text-sm font-semibold backdrop-blur text-white">
          CMC Beni Mellal • OFPPT
        </span>

        {/* Content */}
        <div className="mt-8 max-w-3xl">
          
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Explore Our Filières
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
            Discover the different training programs available at CMC Beni Mellal
            and choose the path that matches your future goals and professional ambitions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            <button className="rounded-xl bg-bg-dark px-7 py-3 font-semibold text-[#fff] transition hover:scale-95">
              <Link to="/courses">Explore Programs</Link>
            </button>

            <button className="rounded-xl border border-black px-7 py-3 font-semibold transition hover:bg-white">
              <Link to="/contact">Contact Us</Link>
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-3 ">
            
            <div className="rounded-2xl border p-5 backdrop-blur">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="mt-1 text-sm ">
                Pôles Métiers
              </p>
            </div>

            <div className="rounded-2xl border p-5 backdrop-blur">
              <h3 className="text-3xl font-bold">90+</h3>
              <p className="mt-1 text-sm ">
                Filières
              </p>
            </div>

            <div className="rounded-2xl border p-5 backdrop-blur">
              <h3 className="text-3xl font-bold">2800+</h3>
              <p className="mt-1 text-sm ">
                Stagiaires
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}