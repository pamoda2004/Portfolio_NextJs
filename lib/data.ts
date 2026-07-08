export const profile = {
  firstName: "Pamoda",
  lastName: "Jayathilaka",
  role: "Frontend Developer | AI/ML Developer | Full-Stack Developer",
  bio: "I build responsive web experiences and AI-powered applications using modern frontend tools, machine learning, and data-driven solutions.",
  email: "jayathilakapamoda9@gmail.com",
  website: "https://nextjsportfolio-gray.vercel.app",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pamoda-jayathilaka-ba4b5339a/" },
  { label: "GitHub", href: "https://github.com/pamoda2004" },
  { label: "Instagram", href: "https://www.instagram.com/pamoda__r?igsh=MW9oNjZvbGJuaW1rMQ%3D%3D&utm_source=qr" },
  { label: "Facebook", href: "https://www.facebook.com/share/1DMvUjkdTD/?mibextid=wwXIfr" },
];

export const projects = [
  {
    slug: "persistent-identity-tracker",
    title: "Persistent Identity Tracker System",
    category: "Computer Vision",
    image: "/images/ident.jpg",
    description:
      "An AI-powered computer vision system that detects, tracks, and re-identifies people across video frames using YOLOv8, feature-based matching, and gait analysis.",
    role: "Full Stack Developer",
    timeline: "2026",
    tools: [
      "Python",
      "FastAPI",
      "OpenCV",
      "YOLOv8",
      "React",
      "Vite",
      "NumPy"
    ],
    liveUrl: "https://github.com/pamoda2004/persistent-identity-tracker",
    overview:
      "This project focuses on maintaining persistent identities for people detected in video streams. The system combines object detection, appearance feature extraction, movement analysis, and similarity matching to assign consistent identities while managing unknown individuals through a user-assisted labeling workflow.",

    problem:
      "Traditional object detection systems can identify people in individual frames but struggle to maintain consistent identities when people move, become partially occluded, leave the scene, or reappear. The project also addresses the challenge of managing unidentified individuals and recognizing them after manual labeling.",

    solution:
      "The system uses YOLOv8 for person detection and extracts appearance features such as clothing colors and body proportions together with gait-based movement features. A similarity scoring algorithm compares new detections with previously tracked identities using a configurable threshold. Unknown individuals are automatically stored in a separate gallery where users can assign names for future recognition. A React dashboard provides real-time visualization of tracked identities, confidence scores, processed video frames, and unknown captures.",

    process: [
      "Designed the system architecture using FastAPI for the backend and React for the frontend.",
      "Integrated YOLOv8 for real-time person detection from video frames.",
      "Implemented feature extraction using clothing colors, body aspect ratio, and position information.",
      "Developed gait analysis to improve identity matching across consecutive frames.",
      "Created a weighted similarity matching algorithm with a configurable 70% identity threshold.",
      "Built an unknown-person management module to store unidentified individuals separately.",
      "Implemented manual labeling to associate names with previously unknown people for future recognition.",
      "Developed REST APIs for video processing, tracking data, and unknown-person management.",
      "Built a responsive dashboard to display processed video frames, active identities, confidence scores, and unknown captures.",
      "Optimized the tracking workflow to maintain persistent identities across video sequences."
    ],

    results: [
      "Real-time person detection using YOLOv8.",
      "Persistent identity tracking across multiple video frames.",
      "Feature-based identity matching using appearance and gait analysis.",
      "Automatic unknown-person detection and gallery management.",
      "Manual labeling for future person recognition.",
      "Responsive dashboard displaying active identities and processed video frames.",
      "Modular backend architecture using FastAPI REST APIs.",
      "Scalable codebase with separate frontend and backend components."
    ],

    gallery: ["/images/yolo_1.png", "/images/yolo_3.png"],
  },
  {
    slug: "plant-ecommerce-platform",

    title: "Plant E-Commerce Platform",

    category: "Web Design",

    image: "/images/front.jpg",

    description:
      "A full-stack plant e-commerce platform developed for a business client, featuring product management, customer authentication, cart and checkout flow, order management, payment integration, customer notifications, wholesale requests, pre-orders, and subscription-based plant delivery features.",

    role: "Full-Stack Developer",

    timeline: "2026",

    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Cloudflare R2",
      "PayHere Sandbox",
      "Resend",
      "WhatsApp Notification API",
      "Upstash Redis",
      "Vercel"
    ],

    liveUrl: "#",

    overview:
      "This project was developed as a full-stack e-commerce solution for a plant-selling business. The platform allows customers to browse plants, manage carts, place orders, make payments, track order status, manage wishlists and addresses, and receive email and WhatsApp notifications. The admin panel provides tools to manage products, orders, customers, wholesale quote requests, pre-orders, subscriptions, and business reports.",

    problem:
      "The business required a modern online ordering system to manage plant sales, customer orders, wholesale requests, pre-orders, and customer communication in one centralized platform. Manual order handling and customer follow-ups were time-consuming and difficult to scale as the business grew.",

    solution:
      "I designed and developed a full-stack e-commerce platform using Next.js, TypeScript, Prisma, and PostgreSQL. The system includes customer authentication, product and category management, cart and checkout functionality, PayHere sandbox payment flow, email and WhatsApp notifications, admin dashboards, wholesale quote management, pre-order handling, and subscription box features. Cloudflare R2 was used for image storage, while Redis-based OTP support was added for reliable phone verification.",

    process: [
      "Set up the project structure using Next.js App Router, TypeScript, Tailwind CSS, and Prisma.",
      "Designed the database schema for users, products, categories, carts, orders, addresses, wishlists, notifications, wholesale requests, pre-orders, and subscriptions.",
      "Implemented authentication and role-based access control for customers, admins, and wholesale buyers.",
      "Developed product management features including image upload, product creation, editing, deletion, stock handling, and category management.",
      "Integrated Cloudflare R2 for secure image storage and optimized product image handling.",
      "Built cart and checkout functionality with stock validation, delivery options, order creation, and customer order history.",
      "Integrated PayHere sandbox payment flow with order success handling and webhook support.",
      "Developed an admin dashboard for managing orders, customers, invoices, revenue charts, and order exports.",
      "Added WhatsApp and email notification workflows for new orders, order status updates, pre-order readiness, and customer communication.",
      "Implemented SMS OTP phone verification using Redis-ready OTP storage.",
      "Created customer account features including profile update, addresses, wishlist, order history, and notification preferences.",
      "Developed wholesale registration, admin approval flow, bulk quote requests, and wholesale pricing tiers.",
      "Added pre-order product support with badges, deposit logic, admin pre-order management, and ready notification logs.",
      "Implemented subscription box plans with customer pause, resume, cancel, and upgrade options.",
      "Created admin subscription summary features to support monthly packing and delivery planning.",
      "Tested the system using TypeScript checks, production builds, dry-run email and WhatsApp logs, and sandbox payment flows."
    ],

    results: [
      "Delivered a complete full-stack e-commerce platform for a business client.",
      "Implemented customer-facing features such as product browsing, cart, checkout, wishlist, account management, and order history.",
      "Created a secure admin panel for managing products, customers, orders, invoices, wholesale requests, pre-orders, and subscriptions.",
      "Integrated PayHere sandbox payment flow for online payment testing.",
      "Added email, WhatsApp, and SMS OTP workflows to improve customer communication.",
      "Implemented Cloudflare R2 image storage for product and homepage images.",
      "Added wholesale buyer approval and bulk quote request features for B2B sales.",
      "Implemented pre-order and subscription features to support additional revenue streams.",
      "Improved business workflow by reducing manual order handling and centralizing customer, product, and order management.",
      "Successfully passed TypeScript checks and production build validation."
    ],

    gallery: [
      "/images/plant_1.png",
      "/images/plant_2.png",
    ],
  },
  {
    slug: "smart-event-planner",
    title: "Smart Event Planner",
    category: "Dashboard",
    image: "/images/event.jpg",
    description:
      "An AI-powered event planning application that converts natural language event descriptions into structured event information.",
    role: "Frontend Developer",
    timeline: "2026",
    tools: [
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Express.js",
      "CSS3",
      "Vite"
    ],
    liveUrl: "https://github.com/pamoda2004/smart-event-planner",

    overview:
      "This project provides an intelligent event planning experience by allowing users to describe an event in natural language and automatically generating structured event details such as category, guest count, budget, and event vibe.",

    problem:
      "Planning events often requires manually entering the same information into multiple form fields. This process is time-consuming, error-prone, and inconvenient for users who prefer describing their event in plain language.",

    solution:
      "Developed an AI-assisted web application that analyzes natural language descriptions and extracts structured event details automatically. Built a responsive interface with reusable React components, form validation using React Hook Form and Zod, and integrated a backend API for intelligent data extraction.",

    process: [
      "Designed the application architecture using reusable React components.",
      "Implemented AI-powered extraction from unstructured event descriptions.",
      "Added schema-based form validation with React Hook Form and Zod.",
      "Created responsive layouts with a clean and modern user interface.",
    ],

    results: [
      "Automatically converts unstructured text into structured event information.",
      "Reduces manual data entry and improves user experience.",
      "Responsive design across desktop, tablet, and mobile devices.",
      "Reusable and maintainable component-based architecture.",
    ],

    gallery: ["/images/plan_1.png", "/images/smart_2.png"],
  },
  {
    slug: "vehicle-recommendation-system",
    title: "AI Vehicle Recommendation Web Application",
    category: "Dashboard",
    image: "/images/vere.jpg",
    description:
      "An AI-powered vehicle recommendation system that predicts fair vehicle prices and recommends the best vehicles based on user preferences.",
    role: "Machine Learning Developer",
    timeline: "2026",
    tools: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Pandas",
      "NumPy",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    liveUrl: "https://github.com/pamoda2004/Vehicle_Assistant",

    overview:
      "This project focuses on helping users make informed vehicle purchasing decisions by combining machine learning with a responsive web application. Users can search vehicles using filters such as price range, fuel type, transmission, and manufacturing year, while the system predicts fair market prices and recommends the best matching vehicles.",

    problem:
      "Finding the right used vehicle is often difficult because buyers must compare hundreds of listings with different prices, conditions, and specifications. Many users struggle to determine whether a listed price is fair and which vehicle offers the best value for their budget.",

    solution:
      "I developed a Machine Learning-powered recommendation system that predicts the fair market price of vehicles using a Histogram-based Gradient Boosting Regression model. The web application filters vehicles based on user preferences, calculates deal scores, and recommends the most suitable vehicles through a clean and responsive interface.",

    process: [
      "Collected and preprocessed the vehicle dataset by cleaning missing values and engineering useful features.",
      "Trained a Histogram-based Gradient Boosting Regression model to predict fair vehicle prices.",
      "Built REST APIs using FastAPI to connect the trained model with the frontend.",
      "Developed a responsive user interface using HTML, CSS, and JavaScript.",
      "Implemented vehicle search filters based on price, transmission, fuel type, and manufacturing year.",
      "Displayed predicted fair prices and deal scores to help users compare vehicle listings."
    ],

    results: [
      "Developed a fully functional AI-powered vehicle recommendation web application.",
      "Accurately predicted fair vehicle prices using Machine Learning.",
      "Enabled intelligent vehicle filtering based on user preferences.",
      "Provided deal score rankings to help users identify the best-value vehicles.",
      "Built a responsive and user-friendly interface for desktop and mobile devices.",
      "Successfully integrated Machine Learning with a FastAPI backend and modern web frontend."
    ],
    gallery: ["/images/vehicle_1.png", "/images/vehicle_2.png"],
  },
  {
    slug: "portfolio-website",

    title: "Portfolio Website Design",

    category: "Portfolio",

    image: "/images/port.jpg",

    description:
      "A personal portfolio website designed first in Figma and developed using Next.js, Tailwind CSS, and Framer Motion. The project focuses on bold typography, smooth animations, responsive layouts, project showcase pages, and a professional personal brand presentation.",

    role: "UI/UX Designer & Frontend Developer",

    timeline: "2026",

    tools: [
      "Figma",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "GSAP"
    ],

    liveUrl:
      "https://www.figma.com/design/RZzqt9sy8HiTPdwNEMDHs9/Project__1?node-id=5-2&t=msxnvghn4e589EGv-1",

    overview:
      "This portfolio project started as a UI/UX design concept in Figma and was later converted into a functional personal portfolio website. The Figma design includes the initial layout, visual direction, components, icons, color styles, typography styles, and page structure. The developed website uses the same design idea and improves it with real interactions, animations, responsive behavior, and dynamic project detail pages.",

    problem:
      "The main challenge was to create a portfolio that looks professional, communicates my skills clearly, and works well across desktop and mobile screens. The design also needed to present multiple project types such as frontend development, AI/ML systems, full-stack applications, and data-driven prediction projects in a clean and organized way.",

    solution:
      "I designed the visual concept in Figma using reusable components, typography styles, color styles, navigation sections, and prototype screens. Then I developed the portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion. The final website includes a responsive navigation bar, animated hero section, service accordion, project filters, case study pages, contact call-to-action section, smooth transitions, and downloadable CV support.",

    process: [
      "Created the initial portfolio UI layout in Figma with sections for Home, About, Services, Portfolio, and Contact.",
      "Designed reusable UI components, icons, buttons, color styles, and typography styles in Figma.",
      "Planned the final website structure based on the Figma design and converted it into reusable React components.",
      "Built the portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
      "Added smooth animations, page transitions, service hover interactions, project filtering, and case study pages.",
      "Optimized the layout for both normal screens and mobile screens.",
      "Added project data dynamically using a structured data file for easy future updates."
    ],

    results: [
      "Completed a professional Figma portfolio design concept.",
      "Converted the Figma design into a responsive Next.js portfolio website.",
      "Created a clean project showcase system with individual case study pages.",
      "Improved user experience with smooth animations and mobile-friendly layouts.",
      "Added a downloadable CV button, modern navigation, and professional contact CTA.",
      "Built a scalable portfolio structure that can be updated with new projects easily."
    ],

    gallery: [
      "/images/figma_1.png",
      "/images/figma_2.png",
      
    ],
  },
  {
    slug: "travel-guide-website",

    title: "Travel Guide Website with Weather Prediction",

    category: "Web Design",

    image: "/images/UI.jpg",

    description:
      "A responsive travel guide website consisting of six user interface pages designed with HTML, CSS, and JavaScript. The website includes an integrated machine learning weather prediction feature that helps users view predicted weather conditions before planning their trip.",

    role: "UI/Frontend Developer & Machine Learning Developer",

    timeline: "2026",

    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Pandas",
      "Joblib"
    ],

    liveUrl: "https://my-travel-website-xooa.vercel.app/",

    overview:
      "The Travel Guide Website was developed to provide users with a simple and responsive travel planning experience. The project includes six interconnected web pages covering travel information, destinations, and trip planning. One page integrates a machine learning weather prediction model that allows users to select a city and travel month to predict the expected weather condition, temperature, and wind speed.",

    problem:
      "Travelers often need to switch between multiple websites to find destination information and weather forecasts before planning a trip. This makes travel planning less convenient and time-consuming.",

    solution:
      "I designed and developed a six-page responsive travel guide website using HTML, CSS, and JavaScript. To improve the user experience, I integrated a machine learning weather prediction system through a FastAPI backend. Users can enter a city and travel month to receive predicted weather conditions, temperature, and wind speed within the same website.",

    process: [
      "Designed the user interface for six responsive travel-related web pages.",
      "Developed the frontend using HTML, CSS, and JavaScript.",
      "Created navigation between all pages for a smooth user experience.",
      "Collected and preprocessed historical weather data for machine learning.",
      "Built Random Forest classification and regression models using Scikit-learn.",
      "Evaluated and optimized the prediction models.",
      "Saved trained models using Joblib.",
      "Developed REST APIs with FastAPI to serve weather predictions.",
      "Integrated the machine learning backend into the travel website.",
      "Tested the complete system for responsiveness and functionality."
    ],

    results: [
      "Designed and developed six responsive travel guide web pages.",
      "Successfully integrated a machine learning weather prediction feature.",
      "Users can predict weather conditions, temperature, and wind speed using only city and month inputs.",
      "Responsive layout compatible with desktop, tablet, and mobile devices.",
      "Fast weather prediction through API integration.",
      "Improved the travel planning experience by combining travel information and weather prediction in one platform."
    ],
    gallery: ["/images/trv_w.png", "/images/travel_2.png"],
  }
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "I build clean, responsive, and modern web interfaces using React, Next.js, TypeScript, and Tailwind CSS. My work focuses on smooth user experience, mobile-friendly layouts, strong visual hierarchy, and professional UI interactions.",
    image: "/images/ful.jpg",
  },
  {
    title: "AI/ML Development",
    description:
      "I develop AI and machine learning features for real-world applications such as weather prediction, vehicle recommendation, event planning assistance, and crop stress detection using Python and ML tools.",
    image: "/images/ml.jpg",
  },
  {
    title: "Full-Stack Development",
    description:
      "I build complete web applications with responsive frontend interfaces, backend APIs, database integration, authentication, admin dashboards, and deployment-ready architecture using modern web technologies.",
    image: "/images/fullstack.jpg",
  },
  {
    title: "Predictive Systems",
    description:
      "I design data-driven systems that analyze inputs and provide meaningful predictions, recommendations, and decision-support results for real-world problems.",
    image: "/images/data.jpg",
  },
];

export const experiences = [

  {
    company: "Academic Projects",
    role: "AI/ML Developer",
    date: "2025 - Present",
  },
  {
    company: "Personal Projects",
    role: "Frontend Developer",
    date: "2025 - Present",
  },
  {
    company: "Freelance Practice",
    role: "Web Designer",
    date: "2026 - Present",
  },
];