
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { ChevronRight, Users, Clock, BookOpen, Award, Briefcase, ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";





export default function FiliereDetails() {
    const filieres = useSelector((state)=> state.filieres.filieres);
  const { id } = useParams();
  const [filiere, setFiliere] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const selectedFiliere = filieres.find(
      (f) => f.id === parseInt(id) || f.slug === id
    );
    setFiliere(selectedFiliere);
  }, [id]);

  if (!filiere) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full bg-white">
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 1️⃣  HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-160 bg-linear-to-br from-secondary-900 via-secondary-800 to-accent-900 overflow-hidden pt-20 pb-5">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeInLeft">
            {/* Pole Badge */}
            <div className="flex items-center gap-2 w-fit">
              <div className="h-1 w-8 bg-vibrant-500 rounded-full"></div>
              <span className="text-vibrant-400 font-semibold text-sm uppercase tracking-wider">
                {filiere.pole}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {filiere.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-200 leading-relaxed">
              {filiere.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <Users className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white">{filiere.stagiaires}</p>
                <p className="text-xs text-neutral-300 mt-1">Stagiaires</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <Clock className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white">{filiere.duration}</p>
                <p className="text-xs text-neutral-300 mt-1">Duration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <BookOpen className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white">{filiere.modulesCount}</p>
                <p className="text-xs text-neutral-300 mt-1">Modules</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <Award className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text font-bold text-white">{filiere.level}</p>
                <p className="text-xs text-neutral-300 mt-1">Level</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-vibrant-500 hover:bg-vibrant-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-vibrant-500/50">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30 backdrop-blur-sm">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-500/30 to-primary-500/30 rounded-2xl"></div>
            <img
              src={filiere.image}
              alt={filiere.title}
              className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 2️⃣  ABOUT SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 animate-fadeIn">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-vibrant-500 rounded-full"></div>
                <h2 className="text-sm font-bold text-vibrant-500 uppercase tracking-wider">
                  About This Filière
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Program Overview
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {filiere.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200">
                <div>
                  <p className="text-3xl font-bold text-primary-500">{filiere.groups?.length || 0}</p>
                  <p className="text-neutral-600 text-sm mt-2">Groups</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">{filiere.stagiaires}</p>
                  <p className="text-neutral-600 text-sm mt-2">Stagiaires</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">{filiere.modulesCount}</p>
                  <p className="text-neutral-600 text-sm mt-2">Modules</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-500">{filiere.formateurs?.length || 0}</p>
                  <p className="text-neutral-600 text-sm mt-2">Formateurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 3️⃣  OBJECTIVES SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-primary-500 uppercase tracking-wider">
                Learning Outcomes
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Program Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filiere.objectives.map((objective, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border border-primary-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-vibrant-500 rounded-lg flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-neutral-900">
                      {objective}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 4️⃣  SKILLS SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-vibrant-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-vibrant-400 uppercase tracking-wider">
                Technical & Soft Skills
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Skills You'll Master
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filiere.skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-vibrant-500 hover:bg-white/20 transition-all duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center justify-center">
                  <span className="text-center font-semibold text-white group-hover:text-vibrant-300 transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 5️⃣  MODULES SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-accent-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-accent-500 uppercase tracking-wider">
                Curriculum
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Course Modules
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filiere.modules.map((module, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-neutral-200 hover:border-accent-500 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-accent-500 to-vibrant-500">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors">
                      {module}
                    </h4>
                    <p className="text-sm text-neutral-600 mt-2">
                      Comprehensive training and hands-on experience
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}


      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 7️⃣  CAREER OPPORTUNITIES */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-primary-50 via-accent-50 to-vibrant-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-vibrant-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-vibrant-600 uppercase tracking-wider">
                Career Paths
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Career Opportunities
            </h3>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl">
              After completing this filière, graduates are prepared for these exciting career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filiere.opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl shadow-md border-2 border-transparent hover:border-vibrant-500 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-vibrant-500/20 to-primary-500/20">
                      <Briefcase className="w-6 h-6 text-vibrant-600 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-neutral-900 group-hover:text-vibrant-600 transition-colors">
                      {opportunity}
                    </h4>
                    <p className="text-neutral-600 text-sm mt-3">
                      High-demand role with excellent career prospects and competitive salaries
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 8️⃣  CTA SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-secondary-900 via-accent-900 to-secondary-800 text-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Join hundreds of successful graduates and take the first step towards your dream career in {filiere.pole}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-8 py-4 bg-vibrant-500 hover:bg-vibrant-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-vibrant-500/50">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30 backdrop-blur-sm">
                Contact Us
              </button>
            </div>

            <p className="text-neutral-300 text-sm">
              Need more information? <a href="#" className="text-vibrant-400 hover:text-vibrant-300 font-semibold underline transition-colors">Download our brochure</a> or <a href="#" className="text-vibrant-400 hover:text-vibrant-300 font-semibold underline transition-colors">schedule a consultation</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}