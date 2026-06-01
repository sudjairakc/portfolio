/* Edit this file to update your portfolio content */

import {getYear} from "../utils/date";

// ─── Splash Screen ────────────────────────────────────────────────────────────

export const splashScreen = {
  enabled: true,
  duration: 2000
};

// ─── Greeting ─────────────────────────────────────────────────────────────────

export const greeting = {
  username: "ChaichanaS",
  title: "Hey there! I'm James.",
  subTitle: `Middle-to-Senior Full Stack Developer from Thailand with ${getYear() - 2021}+ years of experience
    owning features end-to-end across React, React Native, Node.js, TypeScript, JavaScript, and Go.
    Proven track record of high-velocity delivery, interim technical leadership,
    and translating complex data into executive-level insights.`,
  resumeLink:
    "https://drive.google.com/file/d/1KQie2ie0wg0qvmD3pWzrNw2O4j8FgyMF/view?usp=sharing"
};

// ─── Social Media ─────────────────────────────────────────────────────────────

export const socialMediaLinks = {
  github: "https://github.com/sudjairakc",
  linkedin: "https://www.linkedin.com/in/chaichana-sudjairak/",
  gmail: "sudjairak.c@gmail.com",
  gitlab: "https://gitlab.com/sudjairakc",
  facebook: "https://www.facebook.com/chaichana.sudjairak"
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillsSection = {
  title: "What I do",
  subTitle: "MIDDLE-TO-SENIOR FULL STACK DEVELOPER — WEB, MOBILE, AND BACKEND",
  skills: [
    `⚡ ${getYear() - 2021}+ years of experience taking features from concept to production across React, React Native, Node.js, and Go.`,
    "⚡ Track record of fast, independent delivery.",
    "⚡ Interim technical leadership and presenting data-backed findings to C-level stakeholders.",
    "⚡ Strong cross-functional communication with designers, PMs, and non-technical teams."
  ],
  softwareSkills: [
    // Frontend & Mobile
    {
      skillName: "JavaScript (ES6+)",
      iconClass: "devicon-javascript-plain colored"
    },
    {skillName: "TypeScript", iconClass: "devicon-typescript-plain colored"},
    {skillName: "React.js", iconClass: "devicon-react-original colored"},
    {skillName: "React Native", iconClass: "devicon-react-original colored"},
    {skillName: "Next.js", iconClass: "devicon-nextjs-plain"},
    // Backend & DB
    {skillName: "Node.js", iconClass: "devicon-nodejs-plain colored"},
    {skillName: "Golang", iconClass: "devicon-go-plain colored"},
    {skillName: "PostgreSQL", iconClass: "devicon-postgresql-plain colored"},
    {skillName: "MariaDB", iconClass: "devicon-mariadb-plain colored"},
    {skillName: "MongoDB", iconClass: "devicon-mongodb-plain colored"},
    {skillName: "Redis", iconClass: "devicon-redis-plain colored"},
    // DevOps & Infra
    {skillName: "Docker", iconClass: "devicon-docker-plain colored"},
    {skillName: "AWS", iconClass: "devicon-amazonwebservices-plain colored"},
    {skillName: "Git", iconClass: "devicon-git-plain colored"},
    {skillName: "GitLab", iconClass: "devicon-gitlab-plain colored"},
    // Testing & Tools
    {skillName: "Postman", iconClass: "devicon-postman-plain colored"}
  ]
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
        "Solid understanding of web and mobile technologies (Web Programming, Networks Programming, IoT for Smart Living)"
      ]
    }
  ]
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
      "Feature Delivery: Sole developer on the insurance plan comparison module — shipped dynamic filters, color-coded plan labels, auto-apply coupon system, adjustable sum-insured range, and plan-sharing end-to-end in 5 days.",
      "Backend & Business Logic: Rebuilt premium search from exact-match to range-based lookup; designed dynamic sum-insured adjustment to expand plan visibility across all insurers. Implemented commission logic covering Tier Bonus, installment budget controls, and multiple payment conditions. Currently one of the lead developers on a major backend migration — splitting a large, aging Node.js v10 codebase (hundreds of APIs in a single project) into properly separated Go microservices.",
      "UI/UX & Notifications: Led redesign of four core screens (Profile, Premium Check, Level-Up, Plan Comparison) with a cached visualization layer. Built a full notification pipeline covering renewal reminders, licence expiry alerts, badge counts, filters, and mark-as-read.",
      "Data, Analytics & Scraping: Analysed 5,500+ competitor benchmark records, built web scrapers for market data collection, compiled missing Van and EV models cross-referenced against market pricing, and presented findings with visualisations to C-level stakeholders.",
      "Leadership & Reliability: Stepped up as interim tech lead during senior absences — owned delivery and made architecture calls independently. Resolved critical production issues (Android crash, random-state bugs) with minimal customer impact, while handling IT support in parallel without affecting delivery timelines.",
      "Self-initiated: Built a real-time collaborative music app on personal time after noticing the team had no good way to share music in the office — complete with a SoundPad and text-to-speech so the team could drop memes and sound effects mid-session. Improved team atmosphere and helped new members settle in naturally from day one."
    ]
  },
  {
    role: "Software Developer",
    company: "Customix Co., Ltd.",
    companyLogo: "customixLogo.png",
    link: "https://www.customix.co/",
    date: "April 2021 – May 2023",
    descBullets: [
      "Full-Stack Development: Built web and mobile apps for enterprise platforms using React, React Native, Node.js, and Go.",
      "UI Component Library: Designed a reusable component library that improved dev velocity by 20% and kept design consistent across platforms.",
      "API & Collaboration: Improved RESTful API integration and worked closely with designers and PMs to deliver complex features on schedule."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "ClickNext Co., Ltd.",
    companyLogo: "clicknextLogo.png",
    date: "Nov 2020 – Mar 2021",
    desc: "Engineered a dynamic CMS for Insurance Bureau and Financial Cooperative Systems using ASP.NET."
  }
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
        "Implemented a tracking system for parliamentary questions, improving transparency for the Office of the Prime Minister's Secretariat."
      ]
    },
    {
      image: "chatBroadcastLogo.png",
      projectName: "Line OA & Facebook Chat Broadcasting",
      descBullets: [
        "Role: Frontend Developer",
        "Tech: React.js, Next.js, Material UI",
        "Created and optimized user interfaces for a broadcasting tool enabling efficient communication via Line OA and Facebook."
      ]
    },
    {
      image: "kpiLogo.png",
      projectName: "KPI Platform Open API",
      descBullets: [
        "Role: Backend Developer",
        "Tech: Golang, MongoDB",
        "Developed and maintained the backend for a KPI platform with seamless open API integration."
      ]
    }
  ]
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  email: "sudjairak.c@gmail.com",
  phone: "085-399-7206"
};

// ─── Misc ─────────────────────────────────────────────────────────────────────

export const isHireable = true;
