export const profile = {
  firstName: "Pamoda",
  lastName: "Jayathilaka",
  role: "Frontend Developer",
  bio: "I build responsive web experiences and AI-powered applications using modern frontend tools, machine learning, and data-driven solutions.",
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
    slug: "persistent-identity-tracker",
    title: "Persistent Identity Tracker System",
    category: "Computer Vision",
    image: "/images/yolo.jpg",
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
    liveUrl: "#",
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
    slug: "vehicle-recommendation-system",
    title: "AI Vehicle Recommendation Web Application",
    category: "Dashboard",
    image: "/images/veh.jpg",
    description:
      "An AI-powered vehicle recommendation system that predicts fair vehicle prices and recommends the best vehicles based on user preferences.",
    role: "Machine Learning & Full Stack Developer",
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
    liveUrl: "https://vehicle-mlmodel.vercel.app/",

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
    gallery: ["/images/project-3.jpg", "/images/project-4.jpg"],
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
    liveUrl: "#",

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

    gallery: ["/images/project-4.jpg", "/images/project-1.jpg"],
  },
  {
    slug: "travel-guide-website",

    title: "Travel Guide Website with Weather Prediction",

    category: "UI/UX",

    image: "/images/project-travel.jpg",

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
    gallery: ["/images/project-4.jpg", "/images/project-1.jpg"],
  }
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive and modern web applications built with React, Next.js, TypeScript, Tailwind CSS, and smooth UI interactions.",
    image: "/images/service-web.jpg",
  },
  {
    title: "AI/ML Development",
    description:
      "Machine learning models, prediction systems, recommendation features, and data-driven solutions using Python and ML tools.",
    image: "/images/service-ai.jpg",
  },
  {
    title: "Full-Stack AI Apps",
    description:
      "AI-powered web applications with frontend interfaces, backend APIs, database integration, and intelligent automation features.",
    image: "/images/service-fullstack.jpg",
  },
  {
    title: "Data & Prediction Systems",
    description:
      "Smart systems for weather prediction, vehicle recommendation, crop stress detection, and real-world decision support.",
    image: "/images/service-data.jpg",
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