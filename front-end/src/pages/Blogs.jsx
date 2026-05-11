import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function Blogs(){

    const blogPosts = [
  {
    id: 1,
    category: 'Education',
    title: 'Revolutionize Learning with a Modern LMS',
    description: 'An LMS streamlines training and development processes for modern teams...',
    author: 'Francis Bishop',
    date: '20 Feb 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=1',
  },
  {
    id: 2,
    category: 'Guides',
    title: 'Complete PHP Programming Career Guideline',
    description: 'Master PHP programming with our comprehensive guide for backend developers...',
    author: 'Donald Vesely',
    date: '24 Mar 2024',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=2',
  },
  {
    id: 3,
    category: 'Guides',
    title: 'Advanced React Patterns for 2026',
    description: 'Deep dive into the latest hooks and performance optimization strategies...',
    author: 'Sarah Jenkins',
    date: '12 Apr 2026',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=3',
  },
  {
    id: 4,
    category: 'Design',
    title: 'UI/UX Trends in the Age of AI',
    description: 'Exploring how generative tools are reshaping the digital design landscape...',
    author: 'Alex Rivera',
    date: '05 May 2026',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=4',
  },
  {
    id: 5,
    category: 'Education',
    title: 'Future of Remote Learning Environments',
    description: 'Strategies for maintaining student engagement in virtual classrooms...',
    author: 'Emma Watson',
    date: '18 Jan 2026',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=5',
  },
  {
    id: 6,
    category: 'Development',
    title: 'Tailwind CSS Best Practices for Scalability',
    description: 'How to manage large-scale utility-first projects without the bloat...',
    author: 'Marcus Chen',
    date: '30 Mar 2026',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=6',
  },
  {
    id: 7,
    category: 'Business',
    title: 'Scaling Startups in the Green Economy',
    description: 'Sustainability-focused business models that are winning in 2026...',
    author: 'Liam O’Brien',
    date: '14 Feb 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=7',
  },
  {
    id: 8,
    category: 'Guides',
    title: 'Node.js Security Checklist',
    description: 'Essential steps to secure your server-side JavaScript applications...',
    author: 'Sophia Martinez',
    date: '02 Apr 2026',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=8',
  },
  {
    id: 9,
    category: 'Education',
    title: 'Mastering Full-Stack Data Science',
    description: 'Integrating machine learning models into web applications seamlessly...',
    author: 'Donald Vesely',
    date: '10 May 2026',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=2',
  },
];

    return(
        <>
        <PageHeader title="Blogs" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 bg-white">
      
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <Link 
            to={`/blogs/${post.id}`}
            key={post.id} 
            className="border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col bg-white transition-shadow hover:shadow-md group"
          >
            {/* Card Header / Image */}
            <div className="w-full aspect-video bg-gray-50 overflow-hidden flex items-center justify-center">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Category Badge */}
              <span className="inline-block bg-accent-700 text-white text-[11px] font-bold px-2.5 py-1 rounded w-max mb-4 uppercase tracking-wide">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                {post.description}
              </p>

              {/* Footer (Author & Date) */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <img 
                    src={post.authorAvatar} 
                    alt={post.author} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-md font-medium text-gray-600">
                    {post.author}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-md font-medium text-gray-500">
                  {/* Purple Calendar Icon */}
                  <Calendar className="w-5 h-5 text-primary-500" />
                  {post.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-primary-700 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500  hover:bg-primary-700 text-white text-sm font-medium shadow-sm">
          1
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-primary-700 hover:text-white text-sm font-medium transition-colors">
          2
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-primary-700 hover:text-white text-sm font-medium transition-colors">
          3
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-primary-700 hover:text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
    </section>
        </>
    )
}