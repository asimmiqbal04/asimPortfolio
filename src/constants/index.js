
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
    title: "Senior Full-Stack Web Developer",
    company_name: "IIH Global",
    icon: arrow,
    iconBg: "#383E56",
    date: "June 2021 - May 2025",
    points: [
      "Built and led development of scalable web apps using React.js, Next.js, Node.js, and TypeScript.",
      "Designed microservices, REST/GraphQL APIs, and optimized databases (PostgreSQL, MongoDB) for high performance.",
      "Managed CI/CD pipelines, Docker/Kubernetes, AWS/Azure deployments, and implemented caching with Redis.",
      "Mentored junior developers, conducted code reviews, and enforced clean coding practices.",
      "Integrated payment gateways, messaging queues, and third-party APIs.",
      "Collaborated with product teams to deliver robust, user-centric solutions while improving performance and reducing delivery timelines.",
    ],
  },

  {
    title: "Full-Stack Developer",
    company_name: "1654 Group",
    icon: arrow,
    iconBg: "#383E56",
    date: "March 2018 - April 2021",
    points: [
      "Built and maintained end-to-end web applications using JavaScript (React.js, Node.js, Express) and MongoDB/MySQL.",
      "Designed and developed RESTful APIs to support scalable client applications.",
      "Worked on frontend architecture, implementing responsive UI with React, Redux, and TailwindCSS/Bootstrap.",
      "Integrated third-party APIs (payment gateways, authentication, analytics) for extended functionality.",
      "Implemented user authentication & authorization using JWT/OAuth for secure access control.",
      "Optimized databases with indexes, queries, and normalization to improve performance.",
      "Wrote unit and integration tests (Jest, Mocha) to ensure application reliability.",
      "Deployed and managed applications on AWS/DigitalOcean, setting up CI/CD pipelines for automated releases.",
      "Collaborated with cross-functional teams (UI/UX designers, QA engineers, and product managers) to deliver high-quality software on time.",
    ],
  },

  {
    title: "Senior React Developer",
    company_name: "LogicBench Software",
    icon: arrow,
    iconBg: "#383E56",
    date: "February 2014 - October 2017",
    points: [
      "Led the development of scalable and high-performance web applications using React.js, Redux, and Next.js.",
      "Designed and implemented reusable components to maintain consistency and improve development speed.",
      "Optimized application performance through code-splitting, lazy loading, and advanced state management.",
      "Collaborated with backend teams to integrate RESTful APIs and GraphQL.",
      "Mentored junior developers, conducted code reviews, and enforced best practices for clean, maintainable code.",
      "Implemented unit testing and E2E testing (Jest, Cypress) to ensure application reliability.",
      "Worked with CI/CD pipelines (GitHub Actions, Jenkins) for smooth deployments.",
      "Stayed updated with modern frontend trends (React 18 features, Server Components, Tailwind, TypeScript).",
    ],
  },

  {
    title: "Dot Net Developer",
    company_name: "SoftSolution",
    icon: arrow,
    iconBg: "#383E56",
    date: "August 2011 - December 2013",
    points: [
      "Developed and maintained desktop applications using C# and .NET Framework.",
      "Implemented web scraping tools to automate data extraction from various online sources.",
      "Worked on database integration (SQL Server) to store, manage, and query scraped data.",
      "Optimized scraping scripts for speed and reliability, ensuring accurate data collection.",
      "Collaborated with team members to design and test application features before deployment.",
      "Gained practical experience in OOP principles, debugging, and error handling.",
    ],
  },

  {
    title: "Junior Frontend Developer",
    company_name: "Ovex Technologies",
    icon: arrow,
    iconBg: "#383E56",
    date: "October 2008 - June 2010",
    points: [
      "Assisted in developing and maintaining responsive websites using HTML, CSS, and JavaScript.",
      "Worked closely with senior developers to convert design mockups into functional web pages.",
      "Improved website usability by implementing cross-browser compatibility and optimizing front-end performance.",
      "Collaborated with the design and backend teams to ensure seamless user experience.",
      "Gained hands-on experience with version control systems and debugging tools.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I didn’t believe it was possible to create a website that truly reflects the beauty of our product, but Asim made it happen.",
    name: "John Anderson",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "Justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Asim optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
  {
    testimonial:
      "Asim transformed our outdated system into a modern, scalable web platform. His attention to detail and problem-solving skills are unmatched.",
    name: "Sophia Martinez",
    designation: "Product Manager",
    company: "Innovatech",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Working with Asim was an absolute pleasure. He delivered our project on time and exceeded expectations with pixel-perfect design.",
    name: "David Lee",
    designation: "Founder",
    company: "BrightApps",
    image: secondTestimonial,
  },
  {
    testimonial:
      "His ability to handle complex full-stack challenges while keeping communication clear and professional makes him stand out from other developers.",
    name: "Amelia Johnson",
    designation: "CEO",
    company: "NextWave Digital",
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
