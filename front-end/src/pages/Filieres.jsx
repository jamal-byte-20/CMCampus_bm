import { Link } from "react-router-dom";
import FilieresFilter from "../components/FilieresFilter";
import FilieresHero from "../components/FilieresHero";
import FilieresGrid from "../components/FilieresGrid";
import { useState,useMemo } from "react";

const filieres = [
  {
    id: 1,
    title: "Developpement Digital",
    pole: "Digital & IA",
    description: "Learn web development, programming and modern digital tools.",
    image: "/images/digital.jpg",
  },
  {
    id: 2,
    title: "Infrastructure Digitale",
    pole: "Digital & IA",
    description: "Learn networking, systems and IT infrastructure.",
    image: "/images/network.jpg",
  },
  {
    id: 3,
    title: "Gestion des Entreprises",
    pole: "Gestion & Commerce",
    description: "Develop business, management and administration skills.",
    image: "/images/gestion.jpg",
  },
];

export default function Filieres(){
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState("");
  const [selectedPole, setSelectedPole] = useState("All");
  const poles = useMemo(() => {
      return ["All", ...new Set(filieres.map((filiere) => filiere.pole))];
    }, []);
  
  const filteredF = filieres.filter((filiere) => {
    const matchSearch = filiere.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPole = selectedPole === "All" || filiere.pole === selectedPole;

    return matchSearch && matchPole;
  });




  return <main className="w-full px-3 ">
  <FilieresHero/>
  <FilieresFilter poles={poles} setSelectedPole={setSelectedPole} selectedPole={selectedPole} setSearch={setSearch} search={search}/>
  <FilieresGrid filieres={filteredF}/>
</main>
}