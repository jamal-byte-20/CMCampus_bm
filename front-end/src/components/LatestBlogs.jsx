const blogs = [
  {
    title: "How to Choose the Right Filière",
    description:
      "A simple guide to help stagiaires choose the best training path for their future.",
    date: "May 2026",
  },
  {
    title: "Why Practical Training Matters",
    description:
      "Discover how practical learning helps stagiaires build real career skills.",
    date: "April 2026",
  },
  {
    title: "Digital Skills for the Future",
    description:
      "Learn why digital skills are important in today’s job market.",
    date: "April 2026",
  },
];

export default function LatestBlogs() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[#00A7C7] font-semibold">
              Latest News
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2B2B2B]">
              News & Articles
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl leading-7">
              Stay updated with announcements, events and useful articles from
              CMC Beni Mellal.
            </p>
          </div>

          <button className="w-fit rounded-xl border border-[#00A7C7] px-6 py-3 font-semibold text-[#00A7C7] hover:bg-[#00A7C7] hover:text-white transition">
            View All Blogs
          </button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group rounded-3xl bg-white border border-gray-200 p-7 hover:-translate-y-2 hover:shadow-xl transition"
            >
              <p className="text-sm font-semibold text-[#00A7C7]">
                {blog.date}
              </p>

              <h3 className="mt-4 text-xl font-bold text-[#2B2B2B] group-hover:text-[#00A7C7] transition">
                {blog.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {blog.description}
              </p>

              <button className="mt-6 font-semibold text-[#00A7C7]">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}