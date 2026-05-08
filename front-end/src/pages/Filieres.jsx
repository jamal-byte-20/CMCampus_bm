import { Link } from "react-router-dom";
import FilieresFilter from "../components/FilieresFilter";
import FilieresHero from "../components/FilieresHero";
import FilieresGrid from "../components/FilieresGrid";
import { useState,useMemo } from "react";
import { useSelector } from "react-redux";



export default function Filieres(){
  const filieres = useSelector((state)=> state.filieres.filieres);
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