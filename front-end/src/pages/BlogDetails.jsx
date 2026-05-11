import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Calendar, User, MessageCircle, ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';



/* ─── Inline SVG icons for engagement (keeps bundle light) ────── */
const ThumbUpIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  </svg>
);

const ThumbDownIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
  </svg>
);

const HeartIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ReplyIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" />
  </svg>
);

/* ─── Reusable CommentCard ────────────────────────────────────── */
function CommentCard({ comment, isNested = false }) {
  return (
    <div className={`${isNested ? 'bg-gray-50 rounded-lg p-4 sm:p-5 mt-5' : 'bg-white rounded-xl border border-gray-200 p-5 sm:p-6'}`}>
      {/* Header: Avatar + Name/Date … Reply */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={comment.avatar}
            alt={comment.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h4 className=  "text-sm sm:text-base font-semibold text-gray-900 leading-tight">
              {comment.name}
            </h4>
            <span className="text-xs sm:text-sm text-gray-500">
              {comment.date}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
        >
          <ReplyIcon className="w-4 h-4" />
          Reply
        </button>
      </div>

      {/* Comment body */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed my-4">
        {comment.text}
      </p>

      {/* Engagement footer */}
      <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
        <span className="flex items-center gap-1">
          <ThumbUpIcon className="w-4 h-4" />
          {comment.likes}
        </span>
        <span className="flex items-center gap-1">
          <ThumbDownIcon className="w-4 h-4" />
          {comment.dislikes}
        </span>
        <span className="flex items-center gap-1 text-red-500">
          <HeartIcon className="w-4 h-4" />
          {comment.hearts}
        </span>
      </div>

      {/* Nested replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} isNested />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Comment character limit ────────────────────────────────────── */
const COMMENT_MAX_LENGTH = 500;

/* ─── Component ──────────────────────────────────────────────────── */
export default function BlogDetails() {

  const blogPosts = useSelector((state)=> state.blogs.blogs)



  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));
  const seedComments = useSelector((state)=> state.blogs.blogs.find(p => p == post).comments)

  /* ---------- State ---------- */
  const [comments, setComments] = useState(seedComments);
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useState({});
  const [justAdded, setJustAdded] = useState(null); // id of the freshly-added comment

  const newCommentRef = useRef(null);

  /* Scroll to the new comment after it renders */
  useEffect(() => {
    if (justAdded !== null && newCommentRef.current) {
      newCommentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [justAdded]);

  /* ---------- 404 fallback ---------- */
  if (!post) {
    return (
      <>
        <PageHeader title="Blog Not Found" />
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="text-neutral-500 text-lg mb-6">
            Sorry, the article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all blogs
          </Link>
        </section>
      </>
    );
  }

  /* ---------- Validation ---------- */
  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email.';
    }
    if (!form.comment.trim()) {
      next.comment = 'Comment is required.';
    } else if (form.comment.length > COMMENT_MAX_LENGTH) {
      next.comment = `Comment must be under ${COMMENT_MAX_LENGTH} characters.`;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  /* ---------- Handlers ---------- */
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear individual error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const newComment = {
      id: Date.now(),
      name: form.name.trim(),
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
      date: 'Just now',
      text: form.comment.trim(),
      likes: 0,
      dislikes: 0,
      hearts: 0,
      replies: [],
    };

    setComments((prev) => [...prev, newComment]);
    setJustAdded(newComment.id);
    setForm({ name: '', email: '', comment: '' });
    setErrors({});

    // Reset the highlight after the animation plays
    setTimeout(() => setJustAdded(null), 1200);
  }

  const isFormEmpty = !form.name.trim() && !form.email.trim() && !form.comment.trim();

  /* ---------- Render ---------- */
  return (
    <>
      <PageHeader title="Blog Details" />

      {/* ── Article ───────────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-sans">

        {/* Back link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-brand font-medium text-sm mb-8 hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        {/* Hero image */}
        <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
          <span className="inline-block bg-accent-500 text-neutral-900 text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wide">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Calendar className="w-4 h-4 text-brand" />
            {post.date}
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
            {post.author}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Body */}
        <div className="prose-neutral max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-neutral-600 leading-relaxed text-base sm:text-lg mb-5">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <hr className="border-neutral-200" />
      </div>

      {/* ── Reviews Section ───────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-12 font-sans border border-neutral-200 rounded-2xl bg-white mb-10">
        <div className="flex items-center gap-3 mb-8">
          <MessageCircle className="w-6 h-6 text-brand" />
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
            Reviews ({comments.length})
          </h2>
        </div>

        {/* Comment list */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              ref={comment.id === justAdded ? newCommentRef : null}
              className={`transition-all duration-500 ease-out ${
                comment.id === justAdded ? 'animate-fade-in' : ''
              }`}
            >
              <CommentCard comment={comment} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 hidden">
        <hr className="border-neutral-200" />
      </div>

      {/* ── Leave a Comment Form ──────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-12 font-sans border border-neutral-200 rounded-2xl bg-white mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-8">
          Leave a Comment
        </h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name & Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="comment-name" className="block text-sm font-semibold text-neutral-700 mb-2">
                Name <span className="text-error">*</span>
              </label>
              <input
                id="comment-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`
                  w-full px-4 py-3 rounded-xl border text-neutral-900 placeholder:text-neutral-400
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand
                  ${errors.name ? 'border-error ring-1 ring-error/30' : 'border-neutral-200'}
                `}
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-error">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="comment-email" className="block text-sm font-semibold text-neutral-700 mb-2">
                Email <span className="text-error">*</span>
              </label>
              <input
                id="comment-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`
                  w-full px-4 py-3 rounded-xl border text-neutral-900 placeholder:text-neutral-400
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand
                  ${errors.email ? 'border-error ring-1 ring-error/30' : 'border-neutral-200'}
                `}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-error">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Comment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="comment-text" className="block text-sm font-semibold text-neutral-700">
                Comment <span className="text-error">*</span>
              </label>
              <span className={`text-xs ${form.comment.length > COMMENT_MAX_LENGTH ? 'text-error font-semibold' : 'text-neutral-400'}`}>
                {form.comment.length}/{COMMENT_MAX_LENGTH}
              </span>
            </div>
            <textarea
              id="comment-text"
              name="comment"
              rows={5}
              value={form.comment}
              onChange={handleChange}
              placeholder="Write your comment here..."
              className={`
                w-full px-4 py-3 rounded-xl border text-neutral-900 placeholder:text-neutral-400
                resize-none transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand
                ${errors.comment ? 'border-error ring-1 ring-error/30' : 'border-neutral-200'}
              `}
            />
            {errors.comment && (
              <p className="mt-1.5 text-sm text-error">{errors.comment}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isFormEmpty}
            className={`
              inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base
              transition-all duration-700 ease-out
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
              ${isFormEmpty
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-brand text-white hover:bg-brand-hover active:scale-[0.97] shadow-lg shadow-primary-300/40'
              }
            `}
          >
            <User className="w-4 h-4" />
            Post Comment
          </button>
        </form>
      </section>
    </>
  );
}
