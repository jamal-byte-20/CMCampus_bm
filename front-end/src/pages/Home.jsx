import FinalCTA from "../components/CTA";
import Hero from "../components/Hero";
import PopularFilieres from "../components/PopulareFilieres";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";
import PageHeader from "../components/PageHeader";
import cmcLogo from '../assets/images/cmcLogo.png';
import ofpptLogo from '../assets/images/ofpptLogo.png';

 const logos = [
    { name: 'CMC', url: cmcLogo },
    { name: 'OFPPT', url: ofpptLogo},
    { name: 'CMC', url: cmcLogo },
    { name: 'OFPPT', url: ofpptLogo},
    { name: 'CMC', url: cmcLogo },
    { name: 'OFPPT', url: ofpptLogo},
    { name: 'CMC', url: cmcLogo },
    { name: 'OFPPT', url: ofpptLogo},
  ];

export default function Home() {
  return (
    <>
    <Hero/>
    <WhyUs/>
    <PopularFilieres/>
    <Stats/>
    {/* Trusted By Section */}
        <div className="text-center mt-20">
          <p className="text-neutral-900 font-medium mb-10">
            Trusted by <span className="text-brand font-bold border-b border-brand">20+</span> Institutions Around the World
          </p>
          
          <div className="flex overflow-hidden w-full">
            <div className="flex animate-marquee gap-8 md:gap-16 whitespace-nowrap">
                
                {logos.map((logo, index) => (
                <div key={`first-${index}`} className="flex items-center justify-center gap-2 h-12 w-auto shrink-0">
                    <img src={logo.url} alt={logo.name} className="w-12 h-12 object-contain" />
                    <span className="text-2xl sm:text-4xl font-bold text-neutral-500">{logo.name}</span>
                </div>
                ))}

                {logos.map((logo, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center gap-2 h-12 w-auto shrink-0">
                    <img src={logo.url} alt={logo.name} className="w-12 h-12 object-contain" />
                    <span className="text-4xl font-bold text-neutral-500">{logo.name}</span>
                </div>
                ))}
                
            </div>
            </div>
        </div>
    <FinalCTA/>
    </>
  );
}