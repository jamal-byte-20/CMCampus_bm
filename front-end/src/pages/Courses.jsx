

import { useMemo, useState } from "react";
import { ArrowRight, Sparkles, Layers, BookOpen } from "lucide-react";
import SingleCour from "../components/SingleCour";
import CourFilter from "../components/CourFilter";
import CoursesHero from "../components/CoursesHero";
import { useSelector } from "react-redux";

export default function Courses() {
  const modules = useSelector((state) => state.courses.courses)

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


  const activeCount = filteredModules.length;
  const visiblePoles = poles.length - 1;
  const visibleFilieres = filieres.length - 1;
  const visibleYears = years.length - 1;

  return (
    <main className="flex flex-col gap-10 justify-center items-center bg-white pb-7">
      <CoursesHero />
      <section className="container mx-auto px-4 md:px-6 w-full">
        <div className="rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-900/5 mb-5">
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
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-primary-600">Filtered results</p>
              <h2 className="mt-3 text-2xl font-bold text-neutral-900">{activeCount} module{activeCount > 1 ? "s" : ""} ready for you</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-vibrant-50 px-4 py-2 text-sm font-medium text-vibrant-700">
              <Sparkles className="h-4 w-4" />
              {selectedPole === "All" && selectedFiliere === "All" && selectedYear === "All"
                ? "Showing all available modules"
                : "Refine to discover your next skill"}
            </div>
          </div>

          {filteredModules.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-slate-50 p-14 text-center">
              <p className="text-lg font-semibold text-neutral-900">No modules match your filters yet.</p>
              <p className="mt-2 text-sm text-neutral-500">Try broadening your search or selecting another pole.</p>
            </div>
          ) : (
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredModules.map((el, index) => (
                <SingleCour
                  key={el.id}
                  index={index}
                  img={el.image}
                  title={el.title}
                  pole={el.pole}
                  filiere={el.filiere}
                  year={el.year}
                  duration={el.duration}
                  description={el.description}
                  slug={el.slug}
                />
              ))}
            </section>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mt-6">
        <div className="rounded-[28px] bg-secondary-900 px-8 py-12 text-white shadow-2xl shadow-secondary-900/20">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-vibrant-200">Need guidance?</p>
              <h3 className="text-3xl font-bold">Still not sure which module fits your goal?</h3>
              <p className="max-w-xl text-sm text-neutral-200 leading-7">
                Our advisors can recommend the ideal filière path based on your experience and career goals.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-6 border border-white/15">
                <p className="text-sm uppercase tracking-[0.3em] text-vibrant-200">Fast response</p>
                <p className="mt-3 text-lg font-semibold">Ask about course planning</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 border border-white/15">
                <p className="text-sm uppercase tracking-[0.3em] text-vibrant-200">Career support</p>
                <p className="mt-3 text-lg font-semibold">Get advice for your next professional move</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
