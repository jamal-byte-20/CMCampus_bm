import { Link } from "react-router-dom";
import Button from "./ui/Button";
import StudentIMG from "../../static/pictures/cmc-hero.png"

export default function Hero(){
    return <section className="min-h-screen flex items-center mt-0 md:mt-25">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div>
          <span className="badge bg-primary-500 text-white px-4 py-2 rounded-full" >OFPPT • CMC Beni Mellal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-5">
            Build Your Future at <span className="">CMC</span> Beni Mellal
          </h1>

          <p className="mt-4 text-gray-600">
            A vocational training center under OFPPT offering practical programs to help stagiaires gain real-world skills and prepare for the job market.
          </p>

          <div className="mt-6 flex gap-4">
            <Button variant="secondary">Explore Filières</Button>

            <button className="border px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        {/* Left Side: Image with Decorative Borders */}
                  <div className="ml-5 relative flex justify-center lg:justify-start  hidden md:block">                    {/* Decorative Border (Top Left) */}
                    <div className="absolute -top-8 -left-10 w-48 h-48 md:w-64 md:h-64 border-[12px] border-secondary-700 rounded-tl-[60px] rounded-br-[60px] -z-10 hidden md:block"></div>
                    
                    {/* Decorative Border (Bottom Right) */}
                    <div className="absolute -bottom-8 left-40 md:left-60 w-48 h-48 md:w-64 md:h-64 border-[12px] border-brand rounded-tr-[60px] rounded-bl-[60px] -z-10 hidden md:block"></div>
        
                    {/* Main Image Container */}
                    <div className="relative rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl border-4 border-white">
                      <img 
                        src={StudentIMG} 
                        alt="Students learning" 
                        className="w-full h-auto max-w-md object-cover"
                      />

                    </div>
                  </div>

      </div>
    </section>
}