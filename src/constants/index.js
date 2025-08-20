
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
  project3,
  project4,
  project5,
  project6,

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
    title: "Senior Full-Stack Developer",
    company_name: "IIH Global",
    icon: arrow, 
    iconBg: "#383E56",
    date: "June 2021 - May 2025",
    points: [
     "Built and led development of scalable web apps using React.js, Next.js, Node.js, and TypeScript.",
"Designed and maintained microservices, REST/GraphQL APIs, and optimized databases (PostgreSQL, MongoDB) for high performance.",
"Managed CI/CD pipelines, Docker/Kubernetes, and cloud deployments (AWS/Azure) while implementing caching with Redis.",
"Integrated payment gateways, messaging queues, and third-party APIs to enhance product functionality.",
"Collaborated with cross-functional teams to deliver user-centric, high-performance solutions within tight timelines."   ],
  },
  
  {
    title: "Full-Stack Developer",
    company_name: "1654 Group",
    icon: arrow,
    iconBg: "#383E56",
    date: "March 2018 - April 2021",
    points: ["Built and maintained end-to-end web applications using JavaScript (React.js, Node.js, Express) and MongoDB/MySQL.",
"Designed and developed RESTful APIs to support scalable client applications.",
"Worked on frontend architecture, implementing responsive UI with React, Redux, and TailwindCSS/Bootstrap.",
"Integrated third-party APIs (payment gateways, authentication, analytics) for extended functionality.",
"Implemented user authentication & authorization using JWT/OAuth for secure access control."  ],
  },

    {
    title: "Senior React Developer",
    company_name: "LogicBench Software",
    icon: arrow,
    iconBg: "#383E56",
    date: "Feb 2014 - Oct 2017",
    points: ["Led the development of scalable and high-performance web applications using React.js, Redux, and Next.js.",
"Designed and implemented reusable components to maintain consistency and improve development speed.",
"Optimized application performance through code-splitting, lazy loading, and advanced state management.",
"Collaborated with backend teams to integrate RESTful APIs and GraphQL.",
"Mentored junior developers, conducted code reviews, and enforced best practices for clean, maintainable code." ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Asim on our FlyHyer platform was a game-changer. She built a sleek, high-performing booking system that made private jet travel seamless for our users.",
    name: "Sophia Turner",
    designation: "Product Manager",
    company: "FlyHyer",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Asim transformed our food delivery platform with a modern, responsive interface and smooth real-time order tracking. Deliveroo users love the improved experience.",
    name: "David Smith",
    designation: "Head of Engineering",
    company: "Deliveroo",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Our eCommerce store, Wild One, needed both style and performance. Asim delivered a beautiful, fast, and scalable solution that truly reflects our brand.",
    name: "Emily Johnson",
    designation: "Founder",
    company: "Wild One",
    image: thirdTestimonial,
  },
];


const projects = [
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
  image: project2,
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
  name: "Flyhyer",
  description:
    "Flyhyer is a private jet booking platform that makes premium air travel accessible and seamless. It allows users to book shared or private flights with ease, offering a modern interface, real-time availability, and secure transactions. The website delivers a sleek, responsive experience optimized for performance and luxury travel services.",
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
  image: project3,
  source_code_link: "https://www.flyhyer.com/",
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
  name: "Wild One",
  description:
    "Wild One is a modern pet lifestyle brand offering stylish, functional products for dogs and their owners. The website provides a sleek, user-friendly shopping experience with categories for walk, play, eat, and travel essentials. It emphasizes design, durability, and convenience, making pet care both practical and fashionable.",
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
  image: project5,
  source_code_link: "https://wildone.com/",
},

{
  name: "PlayCanvas",
  description:
    "PlayCanvas is a powerful cloud-hosted game development platform that enables developers to build 3D and interactive experiences directly in the browser. It provides a collaborative environment for creating real-time applications and games, featuring a fast WebGL engine, asset management, and seamless publishing options.",
  tags: [
    {
      name: "javascript",
      color: "blue-text-gradient",
    },
    {
      name: "webgl",
      color: "white-text-gradient",
    },
    {
      name: "threejs",
      color: "green-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
  ],
  image: project6,
  source_code_link: "https://playcanvas.com/",
},



];

export { services, technologies, experiences, testimonials, projects };
