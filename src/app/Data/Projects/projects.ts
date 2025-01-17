import { ProductType } from "@/components/Projects/ProjectParallax";

const ASSETS_URL = process.env.NEXT_PUBLIC_BUCKET


export const projectsData: ProductType[] = [
  {
    name: "Cleaners Service",
    subTitle: "Squeaky Clean Landing Page",
    description: "A Next.js & React commercial website crafted with Material-UI for a sleek, professional design.",
    url: "http://www.lrv.co.il",
    git: "",
    tech: ["Next", "React", "Sass", "Material-UI", "AWS"],
    thumbnail: `${ASSETS_URL}/assets/projectsBox/lrvDe.png`,
    className: "",
    thumbnailClass: ""
  },
  {
    name: "Synagogue Bookkeeping",
    subTitle: "Local Synagogue Management WebApp",
    description: "A full-stack web app (pro bono) for managing a local synagogue, built with Angular 18, Fastify server and MongoDB, featuring an admin panel. Hosted on AWS.",
    url: "https://tiferet-gt-v2.netlify.app/",
    git: "https://github.com/raul0073/SynagogueWebApp",
    tech: ["Angular", "Ngrx", "Material-UI", "MongoDB", "Node", "Fastify", "AWS"],
    thumbnail: `${ASSETS_URL}/v4/applications/tiferet_mobile_mock-removebg-preview.png`,
    className: "bg-sky-700 h-84",
    thumbnailClass: ""
  },

  {
    name: "Football Academy Landing Page",
    subTitle: "Showcasing Football Academy Services",
    description: "A dynamic landing page showcasing the football academy's services, built with Actercity-UI for a polished, professional look.",
    url: "https://eleven-academy.co.il",
    git: "#",
    tech: ["Next", "React", "Sass", "TailWind"],
    thumbnail: `${ASSETS_URL}/v4/landing_pages/eleven_academy_.png`,
    className: "",
    thumbnailClass: "object-contain"
  },
  {
    name: "Shifts Organizer",
    subTitle: "Effortlessly Organize Shifts & Schedules",
    description: "A Next.js & React project built with Redux for faster user interaction, featuring an Atlas MongoDB database. It’s a free-to-use tool designed to streamline shift scheduling.",
    url: "https://sh1fter.netlify.app/",
    git: "https://github.com/raul0073/Shifter",
    tech: ["Next", "React", "Sass", "MongoDB", "Redux", "TailWind"],
    thumbnail: `${ASSETS_URL}/v4/applications/shifter_mobile_mock-removebg-preview.png`,
    className:  "bg-green-500 h-84",
    thumbnailClass: ""
  },
  {
    name: "Movies Subscriptions",
    subTitle: "Movie Subscription Management",
    description: "A full-stack web app built with React and Node.js/WebAPI for managing movie subscriptions. It includes user authentication and dynamic management features. Users can search, add, edit, and delete subscriptions.",
    url: "http://moviesappproject.s3-website.eu-central-1.amazonaws.com/",
    git: "https://github.com/raul0073/Movies-Subscriptions",
    tech: ["React", "Sass", "Node", "Express", "NodeJs", "MongoDB"],
    thumbnail: `${ASSETS_URL}/assets/projectsBox/project_movies.png`,
    className: "",
    thumbnailClass: "object-contain"
  },
  {
    name: "Score Predictor",
    subTitle: "Predict Scores for Euro 2024 Championship",
    description: "Built with React & Next.js with Redux, this app lets you play with friends and predict scores for each match. Can you predict the future?",
    url: "https://luzone.netlify.app/",
    git: "https://github.com/raul0073/euro24-score-predictor",
    tech: ["Next", "React", "Sass", "MongoDB", "Redux", "TailWind"],
    thumbnail: `${ASSETS_URL}/v4/applications/predictor_mobile_mock-removebg-preview.png`,
    className: "bg-white/90 h-84",
    thumbnailClass: ""
  },
  {
    name: "Live Scores WebApp",
    subTitle: "Live Results & Fixtures via Rapid API",
    description: "A Next.js & React project that serves live football match data worldwide. Users can set their favorite leagues and personalize theme colors.",
    url: "https://rmscores.netlify.app/",
    git: "https://github.com/raul0073/LiveScores",
    tech: ["Next", "React", "Sass", "TailWind"],
    thumbnail: `${ASSETS_URL}/v4/applications/scores_mobile_mock-removebg-preview.png`,
    className: "bg-slate-600 h-84",
    thumbnailClass: ""
  },
  {
    name: "Factory Management System",
    subTitle: "Manage Factory Employees & Departments",
    description: "A JS Vanilla project for managing factory employees, shifts, and departments. Database powered by SQL, hosted on a .NET server.",
    url: "http://dotnetfinal.s3-website.eu-central-1.amazonaws.com/",
    git: "https://github.com/raul0073/FactoryManagmentSystem",
    tech: ["JavaScript", "Node", "Sass", "C#", "SQL"],
    thumbnail: `${ASSETS_URL}/assets/projectsBox/project_factory.png`,
    className: "",
    thumbnailClass: ""
  },
  {
    name: "Events Management WebApp",
    subTitle: "Full-stack Project for Event Management",
    description: "A full-stack web application using React & Next.js, with an Express server and MongoDB database. The mobile-friendly web app is built with SCSS and Tailwind.",
    url: "https://tahel-events.netlify.app/",
    git: "https://github.com/raul0073/Tahel-Events",
    tech: ["Next", "React", "Redux", "Sass", "Node", "Express", "MongoDB", "Tailwind"],
    thumbnail: `${ASSETS_URL}/v4/applications/Tahel_mobile_mock-removebg-preview.png`,
    className: "bg-violet-600 h-84",
    thumbnailClass: ""
  },


];
