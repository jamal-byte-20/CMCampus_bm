import { Link } from "react-router-dom";
import Etudiant from '../../../static/pictures/etudiant.png'
import Wave from "../../../static/pictures/wave.png";
import HeorCourseImg from "../../../static/pictures/hero-1.png"

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#eef2ff,#dbeafe)] text-slate-900 shadow-2xl shadow-slate-900/10 w-full">
      <img
        src={Wave}
        alt="Wave background"
        className="absolute inset-x-0 top-0 h-60 w-full object-cover opacity-80"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl space-y-8 animate-fadeInLeft">
          <span className="inline-flex rounded-full bg-primary-400 px-4 py-2 text-sm font-semibold backdrop-blur text-white absolute md:relative top-5 left-[20%] md:left-1 animate-fadeInLeft">
            CMC Beni Mellal • OFPPT
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl md:text-5xl md:mt-10">
            Learn today, lead tomorrow with our practical course modules.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            Discover hands-on classes for digital skills, business strategy and technical infrastructure — built to help you grow fast and succeed in the real world.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses/#courgrid"
              className="inline-flex items-center justify-center rounded-xl bg-secondary-600 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-secondary-700"
            >
              Browse modules
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:bg-slate-50"
            >
              Contact admissions
            </Link>
          </div>
        </div>

        <div className="relative hidden h-[420px] w-full max-w-xl items-end justify-center overflow-hidden rounded-[2rem] md:flex animate-fadeInRight">
          <div className="absolute inset-0" />
          <img
            src={HeorCourseImg}
            alt="Student learning"
            className="relative z-10 h-full w-full object-contain transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
