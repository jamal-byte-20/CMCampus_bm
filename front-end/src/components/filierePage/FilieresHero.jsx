// src/components/FilieresHero.jsx

import { Link } from "react-router-dom";
import Etudiant from "../../../static/pictures/etudiant.png"
import Wave from "../../../static/pictures/wave.png"

export default function FilieresHero() {
  return (
    <>
    <section className="relative overflow-hidden bg-[linear-gradient(-90deg,#EAE8F1,#DDEDFE)] text-white rounded-2xl flex mt-10 w-full">
          <img src={Wave} alt="" className="absolute opacity-90 h-60 md:h-140 w-full object-cover"/>

      <div className="relative mx-auto max-w-7xl px-6 py-24 ">
        
        {/* Badge */}
        <span className="inline-flex rounded-full bg-primary-400 px-4 py-2 text-sm font-semibold backdrop-blur text-white absolute md:relative top-5 left-[20%] md:left-1 animate-fadeInLeft">
          CMC Beni Mellal • OFPPT
        </span>

        {/* Content */}
        <div className="mt-17 max-w-3xl">
          
          <h1 className="text-4xl text-center md:text-left font-bold leading-tight md:text-6xl mb-2 md:mb-25 animate-fadeInLeft">
            Explore Our Filières
          </h1>

          <p className="text-lg text-center md:text-left leading-8 text-secondary-900 animate-fadeInLeft">
            Discover the different training programs available at CMC Beni Mellal
            and choose the path that matches your future goals and professional ambitions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            
            <button className="rounded-xl bg-secondary-500 px-7 py-3 font-semibold text-[#fff] transition hover:scale-95 animate-fadeInLeft">
              <Link to="/courses">Explore Programs</Link>
            </button>

            <button className="rounded-xl border border-black px-7 py-3 font-semibold transition hover:bg-white text-black animate-fadeInLeft delay-100">
              <Link to="/contact">Contact Us</Link>
            </button>

          </div>
        </div>
        
        
      </div>
      <div className="hidden md:flex z-2 w-full md:w-[40%] justify-center items-end">
            <img src={Etudiant} alt="" className=" object-cover h-80 md:h-145 drop-shadow animate-fadeInRight"/>
          </div>
    </section>
    </>
  );
}