
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  globaljet,
  project2,
  proj2,
  project4,
  project3,
  mysql,
  express,
  aws,
  mui,
  typescript,
  postgresql,
  python,
  docker,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import arrow from "../assets/company/arrow.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Shopify",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
   {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
   {
    name: "typescript",
    icon: typescript,
  },
   {
    name: "docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Upwork",
    icon: arrow, 
    iconBg: "#383E56",
    date: "June 2022 - Jan 2025",
    points: [
      "Developing and maintaining web applications using MERN stack technologies independently.",
      "Collaborating with designers, product managers, and other stakeholders to create high-quality products from start to finish.",
      "Implementing responsive design and ensuring cross-browser compatibility for seamless user experiences.",
      "Managing the entire development cycle, including code reviews, testing, and deployment, to ensure product quality.",
    ],
  },
  
  {
    title: "CEO @ Zolixi",
    company_name: "Zolixi",
    icon: arrow,
    iconBg: "#383E56",
    date: "Feb 2025 - present",
    points: ["Leading Zolixi as co Founder & CEO while actively developing and maintaining web applications using MERN stack technologies.",

"Overseeing project planning and collaborating with clients and team members to deliver high-quality, scalable digital solutions.",

"Implementing responsive, pixel-perfect designs with a strong focus on performance and cross-browser compatibility.",

"Managing the full development cycle — from backend integration to testing and deployment — ensuring seamless and timely project delivery."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I didn’t believe it was possible to create a website that truly reflects the beauty of our product, but Ayesha made it happen.",
name: "John Anderson",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like she does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Ayesha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: " BeHappyGoLeafy",
    description:
      "BeHappyGoLeafy is a sleek, user-friendly website promoting a healthy, plant-based lifestyle. It features plant-based products, recipes, and wellness tips, offering a simple and engaging experience for those looking to live sustainably.",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://behappygoleafy.com/",
  },
   {
  name: "Oura Ring",
  description:
    "Oura Ring is a smart wearable that tracks sleep, activity, readiness, and overall health insights. The official website showcases its sleek design, advanced features, and provides a seamless shopping and wellness experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nextjs",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
  ],
  image: proj2,
  source_code_link: "https://ouraring.com/",
},

  {
    name: "Global Jet",
    description:
      "Global Jet is a luxury aviation company website that showcases premium private jet charter services, aircraft sales, and management solutions. The site reflects a high-end aesthetic with elegant design, smooth transitions, and an intuitive user experience tailored for elite clientele.",
   tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe (forPayment)",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: globaljet,
    source_code_link: "https://globaljet.aero/en",
  },
  {
  name: "Deliveroo",
  description:
    "Deliveroo is a leading online food delivery platform connecting users with local restaurants and grocery stores. It offers a fast, user-friendly experience for browsing menus, placing orders, and tracking deliveries in real-time. The platform emphasizes convenience, scalability, and seamless integration of secure payment systems and live order updates.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "react",
      color: "white-text-gradient",
    },
    {
      name: "tailwind",
      color: "green-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
  ],
  image: project4,
  source_code_link: "https://deliveroo.co.uk/",
},
  {
    name: " Greenlight",
    description:
      "Greenlight is a cutting-edge platform designed to help parents and kids manage finances together. Offering a secure, intuitive way to manage allowances, track spending, and set financial goals, it empowers families to develop financial literacy. The website is built using Node.js, ensuring fast and scalable performance, with seamless integration for real-time updates and secure transactions.",
      tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "Git/Github",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://greenlight.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
