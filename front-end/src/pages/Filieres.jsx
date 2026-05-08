import { Link } from "react-router-dom";
import FilieresFilter from "../components/FilieresFilter";
import FilieresHero from "../components/FilieresHero";
import FilieresGrid from "../components/FilieresGrid";
import { useState,useMemo } from "react";

const filieres = [
  {
    id: 1,
    slug: "developpement-digital",
    title: "Développement Digital",
    pole: "Digital & IA",
    level: "Technicien Spécialisé",
    duration: "2 Years",
    groups: ["DD101", "DD102", "DD103"],
    stagiaires: 120,
    modulesCount: 18,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

    shortDescription:
      "Learn modern web and software development technologies.",

    description:
      "The Développement Digital filière trains stagiaires in modern programming technologies including frontend development, backend development, databases, mobile applications and project management. Students work on practical projects and real-world applications to prepare for professional careers in the digital industry.",

    objectives: [
      "Build responsive web applications",
      "Learn frontend and backend development",
      "Master databases and APIs",
      "Work with real-world projects",
    ],

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "PHP",
      "Laravel",
      "MySQL",
      "Git & GitHub",
    ],

    modules: [
      "HTML & CSS",
      "JavaScript",
      "React.js",
      "PHP & MySQL",
      "Laravel",
      "UI/UX Basics",
      "Git & GitHub",
      "Project Management",
    ],


    opportunities: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Freelancer",
      "UI Integrator",
    ],
  },

  {
    id: 2,
    slug: "infrastructure-digitale",
    title: "Infrastructure Digitale",
    pole: "Digital & IA",
    level: "Technicien Spécialisé",
    duration: "2 Years",
    groups: ["ID101", "ID102"],
    stagiaires: 80,
    modulesCount: 16,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    shortDescription:
      "Master networking, systems administration and cybersecurity.",

    description:
      "Infrastructure Digitale focuses on computer systems, networking, cloud technologies and cybersecurity. Stagiaires learn how to install, configure and maintain professional IT infrastructures.",

    objectives: [
      "Understand computer networks",
      "Configure servers and systems",
      "Learn cybersecurity basics",
      "Manage IT infrastructures",
    ],

    skills: [
      "Networking",
      "Cisco",
      "Linux",
      "Windows Server",
      "Cybersecurity",
      "Cloud Computing",
    ],

    modules: [
      "Network Fundamentals",
      "Linux Administration",
      "Windows Server",
      "Cybersecurity Basics",
      "Cloud Infrastructure",
    ],

    opportunities: [
      "Network Administrator",
      "System Administrator",
      "IT Support Technician",
      "Cybersecurity Assistant",
    ],
  },

  {
    id: 3,
    slug: "gestion-des-entreprises",
    title: "Gestion des Entreprises",
    pole: "Gestion & Commerce",
    level: "Technicien",
    duration: "2 Years",
    groups: ["GE101", "GE102", "GE103"],
    stagiaires: 140,
    modulesCount: 14,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",

    shortDescription:
      "Develop management, communication and business administration skills.",

    description:
      "Gestion des Entreprises prepares stagiaires for careers in administration, business management and communication. The program combines management theory with practical professional skills.",

    objectives: [
      "Understand business management",
      "Learn administration techniques",
      "Develop communication skills",
      "Prepare professional reports",
    ],

    skills: [
      "Management",
      "Communication",
      "Accounting",
      "Excel",
      "Administration",
    ],

    modules: [
      "Business Management",
      "Accounting Basics",
      "Professional Communication",
      "Excel & Office Tools",
      "Marketing Fundamentals",
    ],

    opportunities: [
      "Administrative Assistant",
      "Office Manager",
      "Business Assistant",
      "Accounting Assistant",
    ],
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