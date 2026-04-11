/* Edit this file to update your portfolio content */

import { getYear } from "../utils/date";

// ─── Splash Screen ────────────────────────────────────────────────────────────

export const splashScreen = {
  enabled: true,
  duration: 2000,
};

// ─── Greeting ─────────────────────────────────────────────────────────────────

export const greeting = {
  username: "ChaichanaS",
  title: "Hey there! I'm Chaichana Sudjairak.",
  subTitle: `Middle-to-Senior Full Stack Developer from Thailand with ${getYear() - 2021}+ years of experience
    owning features end-to-end across React, React Native, and Node.js.
    Proven track record of high-velocity delivery, interim technical leadership,
    and translating complex data into executive-level insights.`,
  resumeLink:
    "https://drive.google.com/file/d/1KQie2ie0wg0qvmD3pWzrNw2O4j8FgyMF/view?usp=sharing",
};

// ─── Social Media ─────────────────────────────────────────────────────────────

export const socialMediaLinks = {
  github: "https://github.com/sudjairakc",
  linkedin: "https://www.linkedin.com/in/chaichana-sudjairak/",
  gmail: "sudjairak.c@gmail.com",
  gitlab: "https://gitlab.com/sudjairakc",
  facebook: "https://www.facebook.com/chaichana.sudjairak",
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillsSection = {
  title: "What I do",
  subTitle:
    "MIDDLE-TO-SENIOR FULL STACK DEVELOPER — WEB, MOBILE, AND BACKEND",
  skills: [
    `⚡ ${getYear() - 2021}+ years owning features end-to-end across React, React Native, and Node.js.`,
    "⚡ Interim technical lead experience — architecture decisions, delivery management, incident response.",
    "⚡ Data analysis and executive-level reporting with visualisations for C-level stakeholders.",
    "⚡ Strong cross-functional communication with designers, PMs, and non-technical teams.",
  ],
  softwareSkills: [
    // Frontend & Mobile
    { skillName: "JavaScript (ES6+)", iconClass: "devicon-javascript-plain colored" },
    { skillName: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { skillName: "React.js", iconClass: "devicon-react-original colored" },
    { skillName: "React Native", iconClass: "devicon-react-original colored" },
    { skillName: "Next.js", iconClass: "devicon-nextjs-plain" },
    // Backend & DB
    { skillName: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { skillName: "Golang", iconClass: "devicon-go-plain colored" },
    { skillName: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { skillName: "MariaDB", iconClass: "devicon-mariadb-plain colored" },
    { skillName: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    // DevOps & Infra
    { skillName: "Docker", iconClass: "devicon-docker-plain colored" },
    { skillName: "AWS", iconClass: "devicon-amazonwebservices-plain colored" },
    { skillName: "Git", iconClass: "devicon-git-plain colored" },
    { skillName: "GitLab", iconClass: "devicon-gitlab-plain colored" },
    // Testing & Tools
    { skillName: "Postman", iconClass: "devicon-postman-plain colored" },
  ],
};

// ─── Education ────────────────────────────────────────────────────────────────

export const educationInfo = {
  schools: [
    {
      schoolName: "Burapha University, Thailand",
      logo: "buuLogo.png",
      subHeader: "Bachelor of Science, Computer Science",
      duration: "August 2017 – April 2021",
      desc: "GPA 3.31",
      descBullets: [
        "Proficient in software development and programming (A grades in Programming Fundamentals, Software Development, UI Design, Software Testing, Mobile App Development)",
        "Strong foundation in computer science and mathematics (A grades in Discrete Structures, Math for Computing, Probability & Statistics)",
        "Solid understanding of web and mobile technologies (Web Programming, Networks Programming, IoT for Smart Living)",
      ],
    },
  ],
};

// ─── Work Experience ──────────────────────────────────────────────────────────

export const workExperiences = [
  {
    role: "Full Stack Developer",
    company: "FIN Insurance Broker Co., Ltd.",
    companyLogo: "finLogo.png",
    link: "https://www.fininsurance.co.th/",
    date: "June 2023 – Present",
    descBullets: [
      "Sole developer for the insurance plan comparison module — shipped dynamic filters, coupon system, and sum-insured range logic in 5 days.",
      "Designed range-based premium search and dynamic sum-insured adjustment, expanding plan visibility across all insurers.",
      "Analysed 5,500+ competitive benchmark records and presented findings with visualisations to C-level stakeholders.",
      "Built web scrapers for competitor data collection and maintained comprehensive API test suites in Apidog.",
      "Acted as interim technical lead during senior absences — managed delivery and made architecture decisions independently.",
      "Resolved mission-critical production issues with zero-to-minimal customer impact.",
    ],
  },
  {
    role: "Software Developer",
    company: "Customix Co., Ltd.",
    companyLogo: "customixLogo.png",
    link: "https://www.customix.co/",
    date: "April 2021 – May 2023",
    descBullets: [
      "Built scalable web and mobile apps for enterprise platforms using React, React Native, and Node.js.",
      "Architected a reusable component library that accelerated dev velocity by 20% and ensured cross-platform design consistency.",
      "Optimised RESTful API connectivity and partnered with designers and PMs to ship complex features on schedule.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "ClickNext Co., Ltd.",
    companyLogo: "clicknextLogo.png",
    date: "Nov 2020 – Mar 2021",
    desc: "Engineered a dynamic CMS for Insurance Bureau and Financial Cooperative Systems using ASP.NET.",
  },
];

// ─── Freelance Projects ───────────────────────────────────────────────────────

export const freelanceProjects = {
  title: "Freelance Projects",
  subtitle: "SOME PROJECTS I CONTRIBUTED TO",
  projects: [
    {
      image: "forumLogo.png",
      projectName: "Prime Minister's Secretariat Question Forum System",
      descBullets: [
        "Role: Frontend Developer",
        "Tech: React.js, Ant Design",
        "Implemented a tracking system for parliamentary questions, improving transparency for the Office of the Prime Minister's Secretariat.",
      ],
    },
    {
      image: "chatBroadcastLogo.png",
      projectName: "Line OA & Facebook Chat Broadcasting",
      descBullets: [
        "Role: Frontend Developer",
        "Tech: React.js, Next.js, Material UI",
        "Created and optimized user interfaces for a broadcasting tool enabling efficient communication via Line OA and Facebook.",
      ],
    },
    {
      image: "kpiLogo.png",
      projectName: "KPI Platform Open API",
      descBullets: [
        "Role: Backend Developer",
        "Tech: Golang, MongoDB",
        "Developed and maintained the backend for a KPI platform with seamless open API integration.",
      ],
    },
  ],
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  email: "sudjairak.c@gmail.com",
  phone: "085-399-7206",
};

// ─── Misc ─────────────────────────────────────────────────────────────────────

export const isHireable = false;
