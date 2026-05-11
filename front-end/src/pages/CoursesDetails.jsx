import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Users, Clock, BookOpen, School, Briefcase, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

export default function CoursesDetails() {
    const modules = useSelector((state) => state.courses.courses)
    const { id } = useParams();
    const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = modules.find(
      (c) => c.id === parseInt(id) || c.slug === id
    );
    setCourse(selectedCourse);
  }, [id, modules]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          <p className="mt-4 text-neutral-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full bg-white">
      <section className="relative w-full min-h-[620px] bg-gradient-to-br from-secondary-900 via-secondary-800 to-accent-900 overflow-hidden pt-20 pb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fadeInLeft">
            <div className="flex items-center gap-2 w-fit">
              <div className="h-1 w-10 bg-vibrant-500 rounded-full"></div>
              <span className="text-vibrant-400 font-semibold text-sm uppercase tracking-wider">
                {course.pole}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {course.title}
            </h1>
            <p className="text-lg text-neutral-200 leading-relaxed max-w-3xl">
              {course.shortDescription}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <Users className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white">{course.students}</p>
                <p className="text-xs text-neutral-300 mt-1">Students</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <Clock className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white">{course.duration}</p>
                <p className="text-xs text-neutral-300 mt-1">Duration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-vibrant-500 transition-all duration-300 group">
                <School className="w-6 h-6 text-vibrant-400 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-bold text-white">{course.year}</p>
                <p className="text-xs text-neutral-300 mt-1">Year</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-vibrant-500 hover:bg-vibrant-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-vibrant-500/50">
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30 backdrop-blur-sm">
                Download Syllabus
              </button>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[520px] animate-fadeInRight">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-vibrant-500/30 to-primary-500/30"></div>
            <img
              src={course.image}
              alt={course.title}
              className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-secondary-900 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 animate-fadeIn">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-vibrant-500 rounded-full"></div>
                <h2 className="text-sm font-bold text-vibrant-500 uppercase tracking-wider">
                  About This Course
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                What You Will Learn
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {course.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
                <div>
                  <p className="text font-bold text-primary-500">{course.lessons}</p>
                  <p className="text-neutral-600 text-sm mt-2">Lessons</p>
                </div>
                <div>
                  <p className="text font-bold text-primary-500">{course.students}</p>
                  <p className="text-neutral-600 text-sm mt-2">Students</p>
                </div>
                <div>
                  <p className="text font-bold text-primary-500">{course.duration}</p>
                  <p className="text-neutral-600 text-sm mt-2">Duration</p>
                </div>
                <div>
                  <p className="text font-bold text-primary-500">{course.filiere}</p>
                  <p className="text-neutral-600 text-sm mt-2">Filière</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-vibrant-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-vibrant-400 uppercase tracking-wider">
                Skills You Will Gain
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Key Skills Covered
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {course.skills.map((skill, index) => (
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
              Opportunities After This Course
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-md border border-transparent hover:border-vibrant-500 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vibrant-500/20 text-vibrant-600">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">{opportunity}</h4>
                    <p className="text-sm text-neutral-500 mt-2">A practical path for your next career step.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-secondary-900 via-accent-900 to-secondary-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to deepen your skills?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Enroll now and take the next step toward a strong career in {course.pole}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-8 py-4 bg-vibrant-500 hover:bg-vibrant-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-vibrant-500/50">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30 backdrop-blur-sm">
                Contact Advisor
              </button>
            </div>

            <p className="text-neutral-300 text-sm">
              Want a tailored study plan? <a href="#" className="text-vibrant-400 hover:text-vibrant-300 font-semibold underline transition-colors">Request a consultation</a> or <a href="#" className="text-vibrant-400 hover:text-vibrant-300 font-semibold underline transition-colors">download the syllabus</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
