/* English content — authoritative source of shape. th.ts mirrors this. */

import {getYear} from "../../utils/date";
import type {Content} from "./types";

const years = getYear() - 2021;

export const en: Content = {
  meta: {
    title: "Chaichana Sudjairak | Senior Full-Stack Developer",
    description:
      "AI-focused Senior Full-Stack Developer from Thailand specialising in React, React Native, Node.js, Go, and TypeScript — building web, mobile, and AI-assisted products end-to-end."
  },

  nav: {
    skills: "Skills",
    experience: "Experience",
    ai: "AI",
    projects: "Projects",
    contact: "Contact",
    projectHub: "Project Hub",
    viewGithub: "View GitHub"
  },

  hero: {
    badge: "Senior Full-Stack Developer · AI-focused · Thailand",
    greetingPre: "Hey there! I'm",
    greetingName: "James",
    greetingPost: ".",
    subTitle: `Senior Full-Stack Developer from Thailand with ${years}+ years of experience
      owning features end-to-end across React, React Native, Node.js, TypeScript, JavaScript, and Go.
      Promoted to Senior in 2026 after architecting an in-app AI assistant, driving ฿8.4M of new
      premium volume from a data-backed catalogue expansion, and helping lead a 29-service backend rewrite.`,
    resumeBtn: "View Résumé",
    githubBtn: "View GitHub",
    contactBtn: "Contact",
    resumeLink:
      "https://drive.google.com/file/d/1KQie2ie0wg0qvmD3pWzrNw2O4j8FgyMF/view?usp=sharing",
    cardRole: "Senior Full-Stack Developer · Thailand",
    stats: [
      `${years}+ yrs experience`,
      "End-to-end delivery",
      "Co-led 29-service rewrite"
    ]
  },

  skills: {
    eyebrow: "What I do",
    headingPre: "Skills &",
    headingEm: "capabilities",
    subTitle:
      "Senior full-stack developer — web, mobile, backend, and AI-assisted delivery.",
    whatIBring: "What I bring",
    techIReach: "Tech I reach for",
    items: [
      `${years}+ years of experience taking features from concept to production across React, React Native, Node.js, and Go.`,
      "Promoted to Senior in 2026 on measurable business impact — an in-app AI assistant, ฿8.4M of new premium volume, and technical leadership on a company-wide rewrite.",
      "Track record of fast, independent delivery — and of setting the standards the rest of the team builds against.",
      "Technical leadership: reference implementations, weekly code review across a 13-developer team, and presenting data-backed findings to C-level stakeholders.",
      "Strong cross-functional communication with designers, PMs, underwriters, and non-technical teams."
    ]
  },

  education: {
    eyebrow: "Education",
    headingPre: "Where I",
    headingEm: "studied",
    sub: "The foundation behind the way I build.",
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
  },

  experience: {
    eyebrow: "Experience",
    headingPre: "Work",
    headingEm: "experience",
    sub: "Roles where I owned features end-to-end, proved my case with data, and led when it mattered.",
    items: [
      {
        role: "Senior Full-Stack Developer",
        company: "FIN Insurance Broker Co., Ltd.",
        companyLogo: "finLogo.png",
        link: "https://www.fininsurance.co.th/",
        date: "June 2023 – Present",
        descBullets: [
          "Career Progression: Joined as Full Stack Developer (Jun 2023) and promoted to Senior Full-Stack Developer (Jul 2026) on the strength of the in-app AI assistant, the catalogue-expansion work below, and technical leadership on the company-wide backend rewrite.",
          "FIN AI — In-App AI Assistant: Architected the assistant that answers broker-agent questions end-to-end and owned the frontend + BFF layer, delegating the AI-API integration to a junior developer under my review. Agents compare premiums across plans and issue a real quotation straight from the chat, look up nearby garages, responsible staff, and installment terms, and attach images or PDFs for the assistant to read — with chat history, resumable conversations, and per-day usage quotas. Designed so new capabilities drop in without a rewrite and documented so the team can take it over. Usage tripled from ~600–900 to 2,000+ sessions/month once access opened to more agent tiers.",
          "Data-Driven Revenue Impact: A campaign meeting concluded our comparison page lost to competitors on pricing. I scraped and auto-matched 5,563 competitor records across 65 car models and showed the opposite — where trims were genuinely comparable our sums insured were higher 81% of the time, and the real gap was coverage: 69.4% of the trims competitors sold, we did not list at all. After the proposal was approved I loaded 42,218 premium rows from 13 insurers into the system (replacing manual Excel entry), every batch signed off by Underwriting. First 6–7 weeks live: ฿8.4M of new premium across 664 closed policies, 77% of them through the comparison engine, +58% month over month — cross-checked against existing trims to confirm net-new volume rather than cannibalisation.",
          "Technical Leadership — Company-Wide Rewrite: One of the leads splitting an aging Node.js v10 monolith (hundreds of APIs in a single project) into properly separated Go microservices — 29 systems, 2,624 routes, 13 developers. Prototyped the reference service and wrote the frontend/service contracts and coding standards that 15+ systems were built against, then reviewed and merged 75 merge requests across 26 of the 29 systems in weekly review cycles. 27 of 29 systems are migrated with no user-visible disruption, adding full PII encryption, per-user access control, and auditable access trails.",
          "Feature Delivery & Business Logic: Sole developer on the insurance plan comparison module — dynamic filters, color-coded plan labels, auto-apply coupons, adjustable sum-insured range, and plan sharing shipped end-to-end in 5 days. Rebuilt premium search from exact-match to range-based lookup and designed dynamic sum-insured adjustment to expand plan visibility across all insurers. Implemented commission logic covering Tier Bonus, installment budget controls, commission-preserving installments, and multiple payment conditions.",
          "UI/UX & Notifications: Led the redesign of core screens (Profile, Premium Check, Level-Up, Plan Comparison, Payment) with a cached visualization layer — the rebuilt profile surfaces referral earnings, paid/pending status, and a cumulative earnings chart. Added image-based car selection and automatic coupon discounts, and built a full notification pipeline covering renewal reminders, licence expiry alerts, badge counts, filters, and mark-as-read.",
          "Reliability & Support: Stepped up as interim tech lead during senior absences — owned delivery and made architecture calls independently. Resolved critical production issues (Android crash, random-state bugs) with minimal customer impact, and now drive recurring payment failures to their systemic root cause instead of patching case by case, with the explicit goal of removing the ticket rather than closing it.",
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
    ]
  },

  ai: {
    eyebrow: "AI Engineering",
    headingPre: "AI",
    headingEm: "Collaboration",
    headline: "I don't just use AI — I run an AI fleet.",
    intro: `On a live insurance-backend rewrite (178 legacy repos → 18 services) I operate
      multiple models, custom agents I built myself, parallel orchestration, and governance —
      directing the fleet, not just prompting it. Every claim below is verifiable in git history and repo tooling.`,
    modelsLabel: "Models in the fleet",
    ladderLabel: "Capability ladder",
    rarerLabel: "rarer / harder ↑",
    stats: [
      {value: "8", label: "AI models orchestrated"},
      {value: "10", label: "Custom subagents built"},
      {value: "12", label: "AI techniques in production"},
      {value: "79", label: "AI-governance ADRs"},
      {value: "178→18", label: "Legacy repos → services"},
      {value: "60–75%", label: "LLM token cost cut"}
    ],
    models: [
      {name: "Claude Opus 4.8", vendor: "Anthropic"},
      {name: "Opus 4.8 · 1M context", vendor: "Anthropic"},
      {name: "Claude Sonnet 4.6", vendor: "Anthropic"},
      {name: "Claude Fable 5", vendor: "Anthropic"},
      {name: "Claude Haiku", vendor: "Anthropic"},
      {name: "OpenAI Codex · gpt-5 / 5.5", vendor: "OpenAI"},
      {name: "Multica", vendor: "autonomous agent", autonomous: true}
    ],
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
        tag: "Beyond Standard Full-Stack",
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
  },

  projects: {
    eyebrow: "Freelance Projects",
    headingPre: "Selected",
    headingEm: "projects",
    subtitle: "Some projects I contributed to",
    items: [
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
  },

  contact: {
    eyebrow: "Get in touch",
    headingPre: "Have an idea worth",
    headingEm: "building?",
    subtitle:
      "Discuss a project or just want to say hi? My inbox is open for all.",
    emailBtn: "Email Me",
    email: "sudjairak.c@gmail.com",
    phone: "085-399-7206"
  },

  footer: {
    role: "AI-focused Senior Full-Stack Developer · Thailand",
    projectHub: "Explore the full project hub",
    copyright: `© ${getYear()} Chaichana Sudjairak. Built with Astro & Tailwind.`
  }
};
