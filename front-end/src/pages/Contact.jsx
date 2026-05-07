import PageHeader from "../components/PageHeader";

import { MapPin, Headphones, Mail } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      id: 1,
      title: 'Address',
      detail: 'wlad mousa, Beni Mellal, Morocco.',
      icon: <MapPin className="w-6 h-6 text-white" />,
      link: null,
    },
    {
      id: 2,
      title: 'Phone',
      detail: '+212 06 10 16 33 15', 
      icon: <Headphones className="w-6 h-6 text-white" />,
      link: 'tel:+212610163315',
    },
    {
      id: 3,
      title: 'E-mail Address',
      detail: 'cmc_bk@gmail.com',
      icon: <Mail className="w-6 h-6 text-white" />,
      link: 'mailto:cmc_bk@gmail.com',
    },
  ];

  // Encoded location for Beni Mellal, Morocco
  const locationQuery = "Beni+Mellal,Morocco";
  
  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-white font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contactDetails.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-5 p-8 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-700"
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 w-16 h-16 bg-secondary-700 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary-300/40">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {item.title}
                </h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-neutral-500 hover:text-secondary-700 transition-colors decoration-1 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 rounded-sm"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <span className="text-neutral-500">
                    {item.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-12 sm:py-20 px-4 sm:px-6 font-sans">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-16 shadow-sm border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            
            {/* Left Column: Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary-100 rounded-full">
                <span className="text-brand text-sm font-bold">Contact Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
                Get in touch with us today
              </h2>
              
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-md">
                Get in touch with us to explore how our LMS solution can enhance your e-learning experience. 
                We're here to help you build a seamless and engaging learning platform!
              </p>
            </div>

            {/* Right Column: Form Card */}
            <div className="bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-200/50">
              <h3 className="text-2xl font-bold text-neutral-900 mb-8">Send Us Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-sm font-bold text-neutral-700">
                      Name <span className="text-error">*</span>
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Enter Name"
                      className="w-full px-4 py-3 mt-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-neutral-900 placeholder:text-neutral-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-neutral-700">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 mt-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-neutral-900 placeholder:text-neutral-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-4">
                    <label htmlFor="phone" className="text-sm font-bold text-neutral-700">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-3 mt-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-neutral-900 placeholder:text-neutral-500"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-4">
                    <label htmlFor="subject" className="text-sm font-bold text-neutral-700">Subject</label>
                    <input 
                      id="subject"
                      type="text" 
                      placeholder="Enter Subject"
                      className="w-full px-4 py-3 mt-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-neutral-900 placeholder:text-neutral-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-neutral-700">Your Message</label>
                  <textarea 
                    id="message"
                    rows="4"
                    placeholder="Enter your message here..."
                    className="w-full px-4 py-3 mt-2 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none text-neutral-900 placeholder:text-neutral-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-full shadow-lg shadow-primary-300/40 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto font-sans">
        <div className="relative w-full h-[300px] sm:h-[450px] rounded-2xl sm:rounded-[30px] overflow-hidden shadow-lg border border-neutral-200">
          
          {/* Grayscale Map Wrapper */}
          <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out bg-neutral-100">
            <iframe
              title="Beni Mellal Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              /* Using the standard Google Maps embed URL */
              src={`https://www.google.com/maps?q=${locationQuery}&output=embed`}
            ></iframe>
          </div>

          {/* Floating "Open in Maps" Button */}
          <div className="absolute top-6 left-6">
            <a 
              href={`https://www.google.com/maps/search/${locationQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-md text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span>Open in Maps</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}