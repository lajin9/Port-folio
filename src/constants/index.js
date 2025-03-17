import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  devaxcel,
  nodejs,
  mongodb,
  git,
  docker,
  cetas,
  postgres,
  carrent,
  jobit,
  tripguide,
  sodisys,
  nestjs,
  sql,
  powerbi
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "postgreSQL",
    icon: postgres,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "SQL",
    icon: sql,
  }
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Sodisys",
    icon: sodisys,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developed and maintained backend APIs using NestJS and Knex.js to support data management for social services and nonprofit organizations.",
      "Utilized Docker for local development and testing, ensuring a consistent development environment and efficient workflows.",
      "Utilized GitLab for code versioning, reviews, and pushing, streamlining the development process and facilitating team collaboration",
      "Transforming raw data into actionable insights for smarter decision-making.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Devaxcel Inc",
    icon: devaxcel,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Nov 2023",
    points: [
      "Developed and maintained backend services for the RPM web application, focusing on remote patient monitoring and health data management.",
      "Utilized PostgreSQL and MongoDB for data storage and retrieval, handling both structured and unstructured health data.",
      "Designed and integrated GraphQL APIs for efficient and flexible data querying, improving client-server interactions.",
      "Implemented comprehensive testing strategies using Jest to ensure code quality, reliability, and coverage.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Cetas",
    icon: cetas,
    iconBg: "#383E56",
    date: "Jun 2022 - Oct 2023",
    points: [
      "Used Power BI and Microsoft Excel to analyze and visualize data, generating reports to improve decision-making processes.",
      "Developed interactive dashboards and reports using Power BI to visualize key business metrics and insights.",
      "Integrated Power BI with PostgreSQL, MongoDB, and other databases to extract and visualize data efficiently.Worked on AX tool to build and manage software system that help to run entire business, supporting automation and process in finance, human resources and manufacturing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Branding wesite 'ANKA'",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://anka-furnitures.vercel.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
