import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
  {
    id: 1,
    category: 'Education',
    title: 'Revolutionize Learning with a Modern LMS',
    description: 'An LMS streamlines training and development processes for modern teams...',
    author: 'Francis Bishop',
    date: '20 Feb 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    authorAvatar: 'https://i.pravatar.cc/150?u=1',
    content: `Learning Management Systems (LMS) have become indispensable in today's educational landscape. They provide a centralized platform where educators can create, distribute, and manage learning content while tracking student progress in real time.

A well-designed LMS empowers institutions to deliver personalized learning experiences, automate administrative tasks, and foster collaboration between students and instructors. From multimedia-rich course content to interactive quizzes and discussion forums, the modern LMS is reshaping how we approach education.

Key benefits of adopting a modern LMS include improved accessibility, scalable infrastructure, data-driven insights, and seamless integration with third-party tools. Whether you're a small training center or a large university, an LMS can transform your teaching methodology and enhance student outcomes.

As technology continues to evolve, the future of LMS platforms lies in AI-powered recommendations, adaptive learning paths, and immersive virtual classrooms. Embracing these innovations now will position your institution at the forefront of modern education.`,
    comments: [
  {
    id: 1,
    name: 'Amina Rachidi',
    avatar: 'https://i.pravatar.cc/150?u=10',
    date: '2 days ago',
    text: 'Excellent article! This really helped me understand how an LMS can transform our training programs at the center. Their expertise and dedication to students make them an outstanding instructor. I would definitely take another course with them in the future.',
    likes: 21,
    dislikes: 50,
    hearts: 45,
    replies: [],
  },
  {
    id: 2,
    name: 'Adrian Henriques',
    avatar: 'https://i.pravatar.cc/150?u=14',
    date: '2 days ago',
    text: 'While I learned a lot from this course, I feel like I could have used more practical examples or exercises that apply the theory. The course focused a lot on lecture-based content and could have incorporated more real-world scenarios.',
    likes: 21,
    dislikes: 50,
    hearts: 45,
    replies: [
      {
        id: 21,
        name: 'Rolands Granger',
        avatar: 'https://i.pravatar.cc/150?u=15',
        date: '2 days ago',
        text: 'Thanks! Best luck for Future',
        likes: 21,
        dislikes: 50,
        hearts: 45,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    avatar: 'https://i.pravatar.cc/150?u=12',
    date: '3 days ago',
    text: 'Very well written. Would love to see a follow-up post about choosing the right LMS platform for vocational training.',
    likes: 14,
    dislikes: 3,
    hearts: 28,
    replies: [],
  },
],
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
    content: `PHP remains one of the most widely used server-side programming languages, powering over 75% of websites globally. Whether you're building a simple blog or a complex enterprise application, PHP offers the flexibility and ecosystem to get the job done.

Starting your PHP journey begins with mastering the fundamentals: variables, control structures, functions, and object-oriented programming. From there, you'll want to explore frameworks like Laravel and Symfony that accelerate development and enforce best practices.

The career path for PHP developers is rich with opportunities. From backend web development to API engineering, DevOps integration, and full-stack roles, PHP skills open doors across industries. Many companies continue to invest heavily in PHP-based solutions, making it a reliable career choice.

To stand out, focus on writing clean, testable code, understanding database design with MySQL and PostgreSQL, and staying current with PHP 8.x features like named arguments, attributes, and fibers for asynchronous programming.`,
    comments: [
  {
    id: 1,
    name: 'Amina Rachidi',
    avatar: 'https://i.pravatar.cc/150?u=10',
    date: '2 days ago',
    text: 'Excellent article! This really helped me understand how an LMS can transform our training programs at the center. Their expertise and dedication to students make them an outstanding instructor. I would definitely take another course with them in the future.',
    likes: 21,
    dislikes: 50,
    hearts: 45,
    replies: [],
  },
  {
    id: 2,
    name: 'Adrian Henriques',
    avatar: 'https://i.pravatar.cc/150?u=14',
    date: '2 days ago',
    text: 'While I learned a lot from this course, I feel like I could have used more practical examples or exercises that apply the theory. The course focused a lot on lecture-based content and could have incorporated more real-world scenarios.',
    likes: 21,
    dislikes: 50,
    hearts: 45,
    replies: [
      {
        id: 21,
        name: 'Rolands Granger',
        avatar: 'https://i.pravatar.cc/150?u=15',
        date: '2 days ago',
        text: 'Thanks! Best luck for Future',
        likes: 21,
        dislikes: 50,
        hearts: 45,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    avatar: 'https://i.pravatar.cc/150?u=12',
    date: '3 days ago',
    text: 'Very well written. Would love to see a follow-up post about choosing the right LMS platform for vocational training.',
    likes: 14,
    dislikes: 3,
    hearts: 28,
    replies: [],
  },
],
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
    content: `React continues to dominate the frontend landscape, and 2026 brings exciting new patterns and optimizations. Understanding advanced component composition, custom hooks, and concurrent rendering features is essential for building performant applications.

The compound component pattern allows you to create flexible, declarative APIs that give consumers control over rendering while maintaining internal state management. Combined with context and reducers, this pattern enables powerful component libraries.

Performance optimization remains critical. React Server Components, automatic batching, and the useMemo/useCallback hooks help minimize unnecessary re-renders. The new use() hook simplifies data fetching patterns, while Suspense boundaries provide elegant loading states.

Testing strategies have also evolved. Component testing with React Testing Library, integration tests with Playwright, and visual regression testing ensure your components behave correctly across all scenarios.`,
    comments: [
  {
    id: 1,
    name: 'Amina Rachidi',
    avatar: 'https://i.pravatar.cc/150?u=10',
    date: '2 days ago',
    text: 'Excellent article! This really helped me understand how an LMS can transform our training programs at the center. Their expertise and dedication to students make them an outstanding instructor. I would definitely take another course with them in the future.',
    likes: 21,
    dislikes: 50,
    hearts: 45,
    replies: [],
  },
  {
    id: 2,
    name: 'Adrian Henriques',
    avatar: 'https://i.pravatar.cc/150?u=14',
    date: '2 days ago',
    text: 'While I learned a lot from this course, I feel like I could have used more practical examples or exercises that apply the theory. The course focused a lot on lecture-based content and could have incorporated more real-world scenarios.',
    likes: 21,
    dislikes: 50,
    hearts: 45,
    replies: [
      {
        id: 21,
        name: 'Rolands Granger',
        avatar: 'https://i.pravatar.cc/150?u=15',
        date: '2 days ago',
        text: 'Thanks! Best luck for Future',
        likes: 21,
        dislikes: 50,
        hearts: 45,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    avatar: 'https://i.pravatar.cc/150?u=12',
    date: '3 days ago',
    text: 'Very well written. Would love to see a follow-up post about choosing the right LMS platform for vocational training.',
    likes: 14,
    dislikes: 3,
    hearts: 28,
    replies: [],
  },
],
  },
],
  loading: false,
  error: null,
  selectedBlog: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
      state.error = null;
    },
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    removeBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
    setSelectedBlog: (state, action) => {
      state.selectedBlog = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addComment: (state, action) => {
      const { blogId, comment } = action.payload;
      const blog = state.blogs.find(b => b.id === blogId);
      if (blog) {
        blog.comments.push(comment);
      }
    },
    removeComment: (state, action) => {
      const { blogId, commentId } = action.payload;
      const blog = state.blogs.find(b => b.id === blogId);
      if (blog) {
        blog.comments = blog.comments.filter(c => c.id !== commentId);
      }
    },
  },
});

export const {
  setBlogs,
  addBlog,
  updateBlog,
  removeBlog,
  setSelectedBlog,
  setLoading,
  setError,
  addComment,
  removeComment,
} = blogsSlice.actions;

export default blogsSlice.reducer;