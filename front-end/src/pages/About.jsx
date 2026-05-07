import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import { BookOpen, Award, Users, Quote, Star, Plus, X, MessageSquare} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import StagairesImg from '../assets/images/stagaires.jpg';
import UserImg_1 from '../assets/images/avatars/user-1.jpg';
import UserImg_2 from '../assets/images/avatars/user-2.jpg';
import UserImg_3 from '../assets/images/avatars/user-3.jpg';
import cmcLogo from '../assets/images/cmcLogo.png';
import ofpptLogo from '../assets/images/ofpptLogo.png';

export default function About() {

  const benefits = [
    {
      id: 1,
      title: 'Flexible Learning',
      description: 'We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.',
      icon: <BookOpen className="w-6 h-6 text-secondary-700" />,
      iconBg: 'bg-secondary-100',
      gradient: 'bg-gradient-to-bl from-secondary-100 via-white to-white',
    },
    {
      id: 2,
      title: 'Lifetime Access',
      description: "When you enroll in our courses, you're not just signing up for a temporary learning to experience you're making.",
      icon: <Award className="w-6 h-6 text-brand" />,
      iconBg: 'bg-primary-100',
      gradient: 'bg-gradient-to-bl from-primary-100 via-white to-white',
    },
    {
      id: 3,
      title: 'Expert Instruction',
      description: 'Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice',
      icon: <Users className="w-6 h-6 text-accent-700" />,
      iconBg: 'bg-accent-100',
      gradient: 'bg-gradient-to-bl from-accent-100 via-white to-white',
    },
  ];

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

  const instructors = [
    {
      id: 1,
      name: 'Brenda Slaton',
      role: 'Designer',
      review: 'This mentor helped me understand conce...',
      rating: 5,
      avatarBg: 'bg-warning',
      imgSrc: UserImg_1
    },
    {
      id: 2,
      name: 'Adrian Dennis',
      role: 'Developer',
      review: "I've learned so much from my mentor's pe...",
      rating: 5,
      avatarBg: 'bg-neutral-100',
      imgSrc: UserImg_2
    },
    {
      id: 3,
      name: 'Adrian Coztanza',
      role: 'Architect',
      review: 'The advice was useful, but I wish my men...',
      rating: 5,
      avatarBg: 'bg-tertiary-500',
      imgSrc: UserImg_3
    },
    {
      id: 4,
      name: 'Brenda Slaton',
      role: 'Designer',
      review: 'This mentor helped me understand conce...',
      rating: 5,
      avatarBg: 'bg-warning',
      imgSrc: UserImg_1
    },
    {
      id: 5,
      name: 'Adrian Dennis',
      role: 'Developer',
      review: "I've learned so much from my mentor's pe...",
      rating: 5,
      avatarBg: 'bg-neutral-100',
      imgSrc: UserImg_2
    },
    {
      id: 6,
      name: 'Adrian Coztanza',
      role: 'Architect',
      review: 'The advice was useful, but I wish my men...',
      rating: 5,
      avatarBg: 'bg-tertiary-500',
      imgSrc: UserImg_3
    }
  ];

  const faqData = [
    {
      question: "What's DreamLMS want to give you?",
      answer: "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience through interactive content and expert guidance."
    },
    {
      question: "Why choose us for your education?",
      answer: "We offer tailored learning paths, industry-recognized certifications, and access to a global network of mentors to help you succeed in your career goals."
    },
    {
      question: "How We Provide Service For you?",
      answer: "Our platform uses AI-driven recommendations to match you with the best courses, alongside 24/7 support and community forums."
    },
    {
      question: "Do you have a monthly plan?",
      answer: "Yes, we offer flexible monthly and annual subscription plans to fit your budget and learning pace."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PageHeader title="About Us" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image with Decorative Borders */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Decorative Border (Top Left) */}
            <div className="absolute -top-8 -left-10 w-48 h-48 md:w-64 md:h-64 border-[12px] border-secondary-700 rounded-tl-[60px] rounded-br-[60px] -z-10 hidden md:block"></div>
            
            {/* Decorative Border (Bottom Right) */}
            <div className="absolute -bottom-8 left-40 md:left-60 w-48 h-48 md:w-64 md:h-64 border-[12px] border-brand rounded-tr-[60px] rounded-bl-[60px] -z-10 hidden md:block"></div>

            {/* Main Image Container */}
            <div className="relative rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={StagairesImg} 
                alt="Students learning" 
                className="w-full h-auto max-w-md object-cover"
              />
              
              {/* Small arrows detail */}
              <div className="absolute bottom-10 left-4 flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-4 bg-warning -skew-x-12"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-brand font-semibold border-b-2 border-brand pb-1">About</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Empowering Learning, Inspiring Growth
            </h2>
            
            <p className="text-neutral-500 leading-relaxed">
              At DreamsLMS, we make education accessible to all with interactive courses and expert-led content. 
              Learn anytime, anywhere, and achieve your goals seamlessly.
            </p>

            <div className="space-y-8 mt-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-secondary-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Learn from anywhere</h3>
                  <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                    Learning from anywhere has become a transform aspect of modern education, allowing individuals.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="text-brand w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Expert Mentors</h3>
                  <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                    Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto font-sans">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand font-semibold border-b-2 border-brand pb-1 inline-block">
            Our Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Master the Skills to Drive your Career
          </h2>
          <p className="text-neutral-500 text-lg">
            The right course, guided by an expert mentor, can provide invaluable insights, practical skills.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className={`p-6 sm:p-8 rounded-2xl shadow-sm border border-neutral-200 ${benefit.gradient}`}
            >
              <div className={`w-16 h-16 rounded-full ${benefit.iconBg} flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">
                {benefit.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
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

      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-neutral-50/50 to-primary-50/30 font-sans">
        
        {/* Decorative Faded Background Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-neutral-200 rounded-full opacity-20 blur-md"></div>
          <div className="absolute top-40 right-[15%] w-40 h-40 bg-secondary-300 rounded-full opacity-20 blur-lg"></div>
          <div className="absolute bottom-20 left-[20%] w-24 h-24 bg-accent-100 rounded-full opacity-40 blur-sm"></div>
          <div className="absolute top-1/4 left-[40%] w-48 h-48 bg-primary-100 rounded-full opacity-20 blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20 space-y-4">
            <span className="text-brand font-semibold border-b-2 border-brand pb-1 inline-block">
              Featured Instructors
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
              Top Class & Professional Instructors
            </h2>
            <p className="text-neutral-500 text-lg px-4 sm:px-0">
              Words from Those Who've Experienced Real Growth.
            </p>
          </div>

          {/* Premium Swiper Testimonials Slider */}
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            grabCursor={true}
            simulateTouch={true}
            touchRatio={1.5}
            resistanceRatio={0.85}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="mt-12 pb-16"
            style={{
              '--swiper-pagination-color': 'var(--color-primary-500, #2b9cb8)',
              '--swiper-pagination-bullet-inactive-color': '#d1d5db',
            }}
          >
            {instructors.map((instructor) => (
              <SwiperSlide key={instructor.id}>
                <div 
                  className="relative pt-16 pb-8 px-8 bg-white rounded-2xl shadow-sm border border-neutral-200 text-center mt-12 h-full flex flex-col"
                >
                  {/* Overlapping Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className={`w-24 h-24 rounded-full border-4 border-white shadow-md relative overflow-hidden ${instructor.avatarBg}`}>
                      <img src={instructor.imgSrc} alt={instructor.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Quote Badge */}
                    <div className="absolute bottom-0 right-0 bg-brand rounded-full p-1.5 shadow-sm border-2 border-white translate-x-1 translate-y-1">
                      <Quote className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-grow flex flex-col items-center">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-6">
                      {instructor.role}
                    </p>
                    <p className="text-neutral-500 leading-relaxed mb-8 text-sm md:text-base flex-grow">
                      {instructor.review}
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center items-center gap-1 mt-auto">
                      {[...Array(instructor.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-accent-700 fill-current" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto font-sans">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Image with Bubble Overlay */}
          <div className="relative w-full lg:w-1/2">
            <img 
              src={StagairesImg}
              alt="Team" 
              className="rounded-3xl w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover shadow-lg"
            />
            {/* Speech Bubble Overlay */}
            <div className="absolute top-8 right-8 bg-warning p-4 rounded-2xl shadow-xl">
              <MessageSquare className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-brand font-semibold border-b-2 border-brand pb-1 inline-block">
              FAQS
            </span>            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6 sm:mb-8">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`border border-neutral-200 rounded-xl overflow-hidden transition-all duration-700 ${
                    activeIndex === index ? 'bg-white shadow-md' : 'bg-white'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 sm:p-6 text-left font-bold text-neutral-900 cursor-pointer text-sm sm:text-base"
                  >
                    {item.question}
                    <span className="ml-4 bg-neutral-100 p-1 rounded-full">
                      {activeIndex === index ? <X className="w-5 h-5 text-neutral-900 " /> : <Plus className="w-5 h-5 text-neutral-900" />}
                    </span>
                  </button>
                  
                  {/* Accordion Content */}
                  <div 
                    className={`px-4 sm:px-6 text-neutral-500 text-sm sm:text-base leading-relaxed transition-all duration-700 overflow-hidden ${
                      activeIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}