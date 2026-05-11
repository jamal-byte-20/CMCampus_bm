

import { useMemo, useState } from "react";
import SingleCour from "../components/SingleCour";
import CourFilter from "../components/CourFilter";

const modules = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    pole: "Digital & IA",
    filiere: "Développement Digital",
    year: "First Year",
    duration: "60h",
    link:"",
    description:
      "Learn the basics of web pages structure, styling, responsive layouts and modern CSS.",
  },
  {
    id: 2,
    title: "JavaScript Basics",
    img:"",
    pole: "Digital & IA",
    filiere: "Développement Digital",
    year: "First Year",
    duration: "80h",
    link:"",
    description:
      "Understand programming logic, DOM manipulation, events and dynamic web interfaces.",
  },
  {
    id: 3,
    title: "PHP & MySQL",
    img:"",
    pole: "Digital & IA",
    filiere: "Développement Digital",
    year: "Second Year",
    duration: "100h",
    link:"",
    description:
      "Build dynamic web applications using PHP and MySQL database management.",
  },
  {
    id: 4,
    title: "Network Fundamentals",
    img:"",
    pole: "Digital & IA",
    filiere: "Infrastructure Digitale",
    year: "First Year",
    duration: "70h",
    link:"",
    description:
      "Discover computer networks, IP addressing, routing basics and network devices.",
  },
  {
    id: 5,
    title: "Business Management",
    img:"",
    pole: "Gestion & Commerce",
    filiere: "Gestion des Entreprises",
    year: "First Year",
    duration: "60h",
    link:"",
    description:
      "Learn business organization, administration methods and management principles.",
  },
  {
    id: 6,
    title: "Marketing & Sales",
    img:"",
    pole: "Gestion & Commerce",
    filiere: "Commerce",
    year: "Second Year",
    duration: "50h",
    link:"",
    description:
      "Understand customer relations, sales techniques and marketing fundamentals.",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedPole, setSelectedPole] = useState("All");
  const [selectedFiliere, setSelectedFiliere] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const poles = useMemo(() => {
    return ["All", ...new Set(modules.map((module) => module.pole))];
  }, []);

  const filieres = useMemo(() => {
    const filtered =
      selectedPole === "All"
        ? modules
        : modules.filter((module) => module.pole === selectedPole);

    return ["All", ...new Set(filtered.map((module) => module.filiere))];
  }, [selectedPole]);

  const years = useMemo(() => {
    const filtered = modules.filter((module) => {
      const matchPole = selectedPole === "All" || module.pole === selectedPole;
      const matchFiliere =
        selectedFiliere === "All" || module.filiere === selectedFiliere;

      return matchPole && matchFiliere;
    });

    return ["All", ...new Set(filtered.map((module) => module.year))];
  }, [selectedPole, selectedFiliere]);

  const filteredModules = modules.filter((module) => {
    const matchSearch = module.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPole = selectedPole === "All" || module.pole === selectedPole;

    const matchFiliere =
      selectedFiliere === "All" || module.filiere === selectedFiliere;

    const matchYear = selectedYear === "All" || module.year === selectedYear;

    return matchSearch && matchPole && matchFiliere && matchYear;
  });

  function handlePoleChange(value) {
    setSelectedPole(value);
    setSelectedFiliere("All");
    setSelectedYear("All");
  }
  function handleFiliereChange(value) {
    setSelectedFiliere(value);
    setSelectedYear("All");
  }


  return (
    <main className="flex flex-col gap-10 justify-center items-center bg-white pb-7">
        <section className="h-[150px] bg-[linear-gradient(90deg,#FCE0DE,#DDEDFE)] w-full text-center flex items-center justify-center">
            <h1 className="font-bold text-3xl">CMC Courses</h1>
        </section>
        <CourFilter
            handlePoleChange={handlePoleChange}
            setSearch={setSearch}
            search={search}
            selectedFiliere={selectedFiliere}
            selectedYear={selectedYear}
            selectedPole={selectedPole}
            filieres={filieres}
            poles={poles}
            years={years}
            handleFiliereChange={handleFiliereChange}
            setSelectedYear={setSelectedYear}
        />
        <section className="courses-grid grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 justify-center items-center">
            {
                filteredModules.map(el => <SingleCour
                    img={el.img}
                    title={el.title}
                     pole={el.pole}
                      filiere={el.filiere}
                    year={el.year}
                    description={el.description}
                      />)
            }
        </section>
    </main>
  );
}