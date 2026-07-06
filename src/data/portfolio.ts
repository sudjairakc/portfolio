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

// ─── AI Collaboration / AI Engineering ────────────────────────────────────────

export const aiSection = {
  eyebrow: "AI Engineering",
  title: "AI Collaboration",
  headline: "I don't just use AI — I run an AI fleet.",
  intro: `On a live insurance-backend rewrite (178 legacy repos → 18 services) I operate
    multiple models, custom agents I built myself, parallel orchestration, and governance —
    directing the fleet, not just prompting it. Every claim below is verifiable in git history and repo tooling.`,

  // Headline metrics — the proof strip
  stats: [
    {value: "8", label: "AI models orchestrated"},
    {value: "10", label: "Custom subagents built"},
    {value: "12", label: "AI techniques in production"},
    {value: "79", label: "AI-governance ADRs"},
    {value: "178→18", label: "Legacy repos → services"},
    {value: "60–75%", label: "LLM token cost cut"}
  ],

  // Model lineup — `autonomous` flags the self-directing agent
  models: [
    {name: "Claude Opus 4.8", vendor: "Anthropic"},
    {name: "Opus 4.8 · 1M context", vendor: "Anthropic"},
    {name: "Claude Sonnet 4.6", vendor: "Anthropic"},
    {name: "Claude Fable 5", vendor: "Anthropic"},
    {name: "Claude Haiku", vendor: "Anthropic"},
    {name: "OpenAI Codex · gpt-5 / 5.5", vendor: "OpenAI"},
    {name: "Multica", vendor: "autonomous agent", autonomous: true}
  ],

  // Capability ladder — ordered rarest-first. `rank` drives visual emphasis.
  tiers: [
    {
      rank: "specialist",
      tag: "Senior / Specialist",
      note: "Rare in the market",
      title: "Systems most engineers never build",
      items: [
        {
          name: "Multi-model fleet orchestration",
          desc: "Direct Claude + OpenAI Codex + Multica as one fleet, routing work per task strength — backed by a documented head-to-head PoC benchmark."
        },
        {
          name: "Autonomous agentic delivery",
          desc: "Multica carries a task build → test → review → merge request on its own. I define the contract and gate quality; the agent closes the loop."
        },
        {
          name: "AI governance at scale",
          desc: "79 Architecture Decision Records + git-hook enforcement keep an AI-built system fully auditable and standards-compliant."
        },
        {
          name: "Token-efficiency engineering",
          desc: "Custom caveman / pordee skills cut LLM spend 60–75% with zero loss of technical fidelity — cost optimization as an engineering discipline."
        }
      ]
    },
    {
      rank: "advanced",
      tag: "Beyond Middle Full-Stack",
      note: "Few devs do this",
      title: "Building the tooling, not just using it",
      items: [
        {
          name: "Custom subagents (10)",
          desc: "Purpose-built AI roles across the SDLC — code-archaeologist, architect, planner, builder, tester, reviewer, dispatcher."
        },
        {
          name: "Custom skills (6)",
          desc: "Reusable playbooks that teach AI to perform domain tasks to a fixed standard, repeatably."
        },
        {
          name: "Parallel agent fan-out",
          desc: "Run many agents at once to migrate 18 services and mine 178 repos — resumable across session or network drops."
        },
        {
          name: "Multi-agent workflows",
          desc: "Deterministic fan-out → verify → synthesize pipelines instead of ad-hoc one-off prompting."
        }
      ]
    },
    {
      rank: "baseline",
      tag: "2026 Industry Baseline",
      note: "What teams now expect",
      title: "AI-native day-to-day delivery",
      items: [
        {
          name: "AI-paired TDD discipline",
          desc: "Failing-test-first loop enforced on AI-written code — tests ship as evidence, nothing passes unchecked."
        },
        {
          name: "MCP tool integration",
          desc: "Wired AI into GitLab, Notion, and Canva — it works with the team's real tools, not a sandbox."
        },
        {
          name: "Deliberate model selection",
          desc: "Right model for each task — cost-aware routing, not defaulting to the most expensive model every time."
        },
        {
          name: "AI-generated artifacts",
          desc: "Turn raw repo data into self-contained metric and presentation pages on demand."
        }
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
