export const profile = {
  firstName: "Pamoda",
  lastName: "Jayathilaka",
  role: "Frontend Developer",
  bio: "I build clean, modern, and responsive web experiences using Next.js, React, and Tailwind CSS.",
  email: "jayathilakapamoda9@gmail.com",
  website: "https://nextjsportfolio-gray.vercel.app",
};

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
];

export const projects = [
  {
    slug: "plant-ecommerce",
    title: "Plant E-Commerce Website",
    category: "Web Design",
    image: "/images/project-1.jpg",
    description:
      "A modern plant store with product pages, cart, checkout, and admin order management.",
    role: "Frontend Developer",
    timeline: "2026",
    tools: ["Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    overview:
      "This project focuses on creating a clean and trustworthy e-commerce experience for customers who want to browse, select, and purchase plants online.",
    problem:
      "The main challenge was to organize product information, pricing, stock, and checkout steps clearly without making the interface confusing.",
    solution:
      "I designed a simple product browsing flow, clean product cards, responsive product pages, and a clear checkout experience with modern UI components.",
    process: [
      "Planned the main user flow from product browsing to checkout.",
      "Created reusable UI components for product cards, sections, and buttons.",
      "Designed responsive layouts for desktop, tablet, and mobile.",
      "Improved visual hierarchy using spacing, typography, and contrast.",
    ],
    results: [
      "Clean product browsing experience.",
      "Responsive design for all screen sizes.",
      "Reusable component structure.",
      "Modern e-commerce interface.",
    ],
    gallery: ["/images/project-1.jpg", "/images/project-2.jpg"],
  },
  {
    slug: "portfolio-website",
    title: "Designer Portfolio",
    category: "Portfolio",
    image: "/images/project-2.jpg",
    description:
      "A minimal black-and-white portfolio with smooth animations and project pages.",
    role: "UI Developer",
    timeline: "2026",
    tools: ["Next.js", "Framer Motion", "Lenis"],
    liveUrl: "#",
    overview:
      "A modern portfolio website focused on bold typography, smooth animation, and clean project presentation.",
    problem:
      "The challenge was to create a portfolio that feels premium while staying lightweight, responsive, and easy to maintain.",
    solution:
      "I used a monochrome visual system, smooth reveal animations, project filtering, page transitions, and reusable data-driven components.",
    process: [
      "Created the visual direction with oversized typography.",
      "Built reusable components for projects, services, and CTA sections.",
      "Added loader, page transition, smooth scroll, and custom cursor.",
      "Optimized mobile layouts and reduced horizontal overflow issues.",
    ],
    results: [
      "Premium black-and-white portfolio style.",
      "Smooth route and scroll animations.",
      "Data-driven project pages.",
      "Responsive and deployment-ready structure.",
    ],
    gallery: ["/images/project-2.jpg", "/images/project-3.jpg"],
  },
  {
    slug: "travel-guide",
    title: "Travel Guide Website",
    category: "Landing Page",
    image: "/images/project-3.jpg",
    description:
      "A responsive travel website with destination sections and modern layouts.",
    role: "Frontend Developer",
    timeline: "2025",
    tools: ["React", "CSS", "FastAPI"],
    liveUrl: "#",
    overview:
      "A travel guide website designed to present destinations, packages, and travel information in a clean and engaging way.",
    problem:
      "Travel content can become cluttered quickly, especially when destinations, packages, and enquiry sections are placed together.",
    solution:
      "I separated the content into clear sections, used visual cards, and created a responsive layout that works well on mobile and desktop.",
    process: [
      "Structured the website into clear content sections.",
      "Created destination cards with readable information.",
      "Connected prediction features through a backend API.",
      "Tested responsive layouts on different screen sizes.",
    ],
    results: [
      "Clean six-page travel website.",
      "Responsive destination sections.",
      "Easy-to-use enquiry flow.",
      "Integrated prediction feature.",
    ],
    gallery: ["/images/project-3.jpg", "/images/project-4.jpg"],
  },
  {
    slug: "event-planner",
    title: "Smart Event Planner",
    category: "Dashboard",
    image: "/images/project-4.jpg",
    description:
      "An AI-assisted event planning interface with structured form generation.",
    role: "Full Stack Developer",
    timeline: "2025",
    tools: ["React", "TypeScript", "Express"],
    liveUrl: "#",
    overview:
      "A smart event planning interface that converts natural language event descriptions into structured planning fields.",
    problem:
      "Users often struggle to convert event ideas into clear planning details such as category, guest count, budget, and event vibe.",
    solution:
      "I built an interface where the user can type a description, then AI-generated suggestions help fill a structured form.",
    process: [
      "Designed the description-to-form workflow.",
      "Built reusable form components with validation.",
      "Created backend extraction logic.",
      "Improved UX using badges, toasts, and loading states.",
    ],
    results: [
      "AI-assisted structured planning flow.",
      "Clean React and TypeScript architecture.",
      "Improved form completion speed.",
      "Modern dashboard-style interface.",
    ],
    gallery: ["/images/project-4.jpg", "/images/project-1.jpg"],
  },
];

export const services = [
  {
    title: "UI/UX Design",
    description:
      "Clean interfaces, user flows, wireframes, and modern visual systems for digital products.",
    image: "/images/service-uiux.jpg",
  },
  {
    title: "Web Design & Dev",
    description:
      "Responsive websites built with Next.js, React, Tailwind CSS, and modern animations.",
    image: "/images/service-web.jpg",
  },
  {
    title: "Branding",
    description:
      "Visual identity, landing page direction, typography systems, and brand consistency.",
    image: "/images/service-branding.jpg",
  },
  {
    title: "Motion & Animations",
    description:
      "Smooth page transitions, hover effects, scroll reveals, and interactive UI animations.",
    image: "/images/service-motion.jpg",
  },
];

export const experiences = [
  {
    company: "Personal Projects",
    role: "Frontend Developer",
    date: "2025 - Present",
  },
  {
    company: "Academic Projects",
    role: "Computer Science Student",
    date: "2024 - Present",
  },
  {
    company: "Freelance Practice",
    role: "Web Designer",
    date: "2023 - 2024",
  },
];