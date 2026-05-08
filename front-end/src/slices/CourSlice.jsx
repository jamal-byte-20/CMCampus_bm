import { createSlice } from "@reduxjs/toolkit";


export const CoursSlice = createSlice({
    name:"courses",
    initialState:{
        courses:[
  {
    id: 1,
    slug: "html-css-fundamentals",
    title: "HTML & CSS Fundamentals",
    pole: "Digital & IA",
    filiere: "Développement Digital",
    year: "First Year",
    duration: "60h",
    level: "Beginner",
    students: 320,
    lessons: 12,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Master web structure and responsive design with HTML and CSS.",
    description:
      "This course introduces web page layout and styling fundamentals, teaching modern HTML semantics, responsive CSS techniques and best practices for building pixel-perfect interfaces.",
    objectives: [
      "Write semantic HTML with accessibility best practices",
      "Build responsive layouts using modern CSS",
      "Create reusable component styles",
      "Work with grids, flexbox and CSS transitions",
    ],
    skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "Grid", "Accessibility"],
    syllabus: [
      "HTML Basics & Structure",
      "Semantic Markup",
      "CSS Fundamentals",
      "Responsive Web Design",
      "Flexbox & Grid Layouts",
      "Project: Landing Page",
    ],
    instructors: [
      { name: "Yassine El Idrissi", speciality: "Frontend Development" },
      { name: "Sara Bennis", speciality: "Web Design" },
    ],
    opportunities: ["UI/UX Designer", "Frontend Developer", "Web Integrator", "Junior Web Designer"],
  },
  {
    id: 2,
    slug: "javascript-basics",
    title: "JavaScript Basics",
    pole: "Digital & IA",
    filiere: "Développement Digital",
    year: "First Year",
    duration: "80h",
    level: "Beginner",
    students: 280,
    lessons: 16,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Learn programming fundamentals to make web experiences interactive.",
    description:
      "This course covers core JavaScript concepts, event handling, DOM manipulation and asynchronous programming so you can bring static pages to life with dynamic behavior.",
    objectives: [
      "Understand JavaScript syntax and logic",
      "Manipulate the DOM and respond to user actions",
      "Work with functions, arrays and objects",
      "Use asynchronous APIs and fetch data",
    ],
    skills: ["JavaScript", "DOM", "ES6", "APIs", "Debugging", "Event Handling"],
    syllabus: [
      "JavaScript Syntax & Types",
      "Control Flow & Functions",
      "DOM Manipulation",
      "Events & User Interaction",
      "Fetch API & Async",
      "Mini Project: Interactive Dashboard",
    ],
    instructors: [
      { name: "Omar El Khatib", speciality: "JavaScript Instructor" },
      { name: "Lina Haddad", speciality: "Frontend Development" },
    ],
    opportunities: ["JavaScript Developer", "Frontend Engineer", "Web App Developer", "Interactive Designer"],
  },
  {
    id: 3,
    slug: "php-mysql",
    title: "PHP & MySQL",
    pole: "Digital & IA",
    filiere: "Développement Digital",
    year: "Second Year",
    duration: "100h",
    level: "Intermediate",
    students: 190,
    lessons: 18,
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Build dynamic applications with PHP backend and MySQL databases.",
    description:
      "In this course you learn server-side development using PHP, build database-driven applications with MySQL, and deploy secure web services for real-world use.",
    objectives: [
      "Create dynamic web applications with PHP",
      "Design and manage MySQL databases",
      "Secure forms and sessions",
      "Integrate backend APIs with frontend UI",
    ],
    skills: ["PHP", "MySQL", "Backend", "SQL", "CRUD", "Web Security"],
    syllabus: [
      "PHP Syntax & Variables",
      "Forms & Validation",
      "MySQL Database Design",
      "Authentication & Sessions",
      "REST APIs with PHP",
      "Project: CMS Application",
    ],
    instructors: [
      { name: "Hamza Alaoui", speciality: "Backend Development" },
      { name: "Nadia Chraibi", speciality: "Database Administration" },
    ],
    opportunities: ["Backend Developer", "Web Developer", "Database Administrator", "PHP Engineer"],
  },
]
    },
    reducers:{
        addCour(state,action){
            state.courses.push(action.payload)
        }
    }
})

export const {addCour} = CoursSlice.actions;
export default CoursSlice.reducer