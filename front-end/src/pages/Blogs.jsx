import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from 'react-redux';

export default function Blogs(){

    const blogPosts = useSelector((state)=> state.blogs.blogs)

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