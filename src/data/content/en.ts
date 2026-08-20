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
      Promoted to Senior in 2026 for work that moved numbers, not just tickets — an in-app AI assistant,
      a data-backed call that reshaped a product catalogue, and technical leadership on a 29-service rewrite.`,
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

  proof: {
    eyebrow: "The short version",
    heading: "Three things I did this year",
    items: [
      {
        value: "1 in 10",
        label:
          "of a car segment's premium volume now comes from trims I proved we were missing — six weeks earlier it was zero"
      },
      {
        value: "27 / 29",
        label:
          "services migrated off an ageing Node.js monolith to Go, moved one step at a time with no user-visible disruption"
      },
      {
        value: "3×",
        label:
          "growth in usage of the in-app AI assistant I architected, once access opened to more agent tiers"
      }
    ],
    caseStudyCta: "Read how the catalogue call was made"
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
      `${years}+ years taking features from concept to production across React, React Native, Node.js, and Go.`,
      "I go and check before I build — the work I'm proudest of started by disproving what the room already believed.",
      "Technical leadership: reference implementations and standards other developers build against, plus weekly review across a 13-developer team.",
      "Comfortable presenting data-backed findings to C-level stakeholders, and working with designers, PMs, and underwriters."
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
    caseStudyCta: "Full case study: the catalogue call",
    items: [
      {
        role: "Senior Full-Stack Developer",
        company: "FIN Insurance Broker Co., Ltd.",
        companyLogo: "finLogo.png",
        link: "https://www.fininsurance.co.th/",
        date: "June 2023 – Present",
        descBullets: [
          "Promoted to Senior (Jul 2026) after joining as Full Stack Developer in Jun 2023.",
          "AI assistant, architected and owned: built the in-app assistant that answers broker-agent questions — comparing premiums and issuing a real quotation from the chat, looking up garages and installment terms, and reading attached photos or PDFs. I owned the architecture plus the frontend and BFF layers, and delegated the AI-API integration to a junior developer under my review. Usage grew 3× once access opened to more agent tiers.",
          "A catalogue call, made with data: the room believed our comparison page lost on price. I matched 5,563 competitor records across 65 car models and found the opposite — where trims were genuinely comparable, our sums insured were higher 81% of the time. The real gap was coverage: roughly 70% of the trims competitors sold, we did not list at all. I brought the proposal, then built the pipeline that loaded the missing trims and their premiums across every carrier we sell, each batch signed off by Underwriting.",
          "What it returned: 664 policies closed on trims we previously could not quote, 77% of them through the comparison engine, growing 58% month over month. About 1 in 10 of the segment's volume now comes from those trims — and I checked the existing trims to confirm it was new business, not customers shifting across.",
          "Technical leadership on the rewrite: one of the leads splitting an ageing Node.js v10 monolith into separated Go services across 29 systems and 13 developers. I prototyped the reference service and wrote the contracts and standards 15+ systems were built against, then reviewed and merged 75 merge requests across 26 of the 29 systems. 27 are migrated with no user-visible disruption, adding PII encryption, per-user access control, and auditable access trails.",
          "Product surface: sole developer on the plan comparison module, shipped end-to-end in 5 days. Rebuilt premium search from exact-match to range-based lookup. Implemented commission logic across tier bonuses, installment budget controls, and commission-preserving installments. Redesigned the core screens, including a profile that surfaces referral earnings, paid and pending status, and a cumulative earnings chart.",
          "Reliability: interim tech lead during senior absences, owning delivery and architecture calls. Resolved critical production issues (Android crash, random-state bugs) with minimal customer impact. Now working recurring payment failures back to their systemic root cause — the goal is removing the ticket, not closing it.",
          "Built on my own time: a real-time collaborative music app for the office, complete with a sound pad and text-to-speech. It made new joiners part of the room from day one."
        ]
      },
      {
        role: "Software Developer",
        company: "Customix Co., Ltd.",
        companyLogo: "customixLogo.png",
        link: "https://www.customix.co/",
        date: "April 2021 – May 2023",
        descBullets: [
          "Built web and mobile apps for enterprise platforms using React, React Native, Node.js, and Go.",
          "Designed a reusable UI component library that improved dev velocity by 20% and kept design consistent across platforms.",
          "Improved RESTful API integration and worked closely with designers and PMs to deliver complex features on schedule."
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
    headingPre: "How I work",
    headingEm: "with AI",
    headline: "AI writes a lot of my code. It doesn't get to skip review.",
    intro: `On a live insurance-backend rewrite I run custom agents I built myself, parallel
      orchestration, and the governance that keeps AI-written code auditable — the interesting part
      isn't the prompting, it's the gates around it.`,
    stackLabel: "What I run",
    stack: [
      "Anthropic Claude",
      "OpenAI Codex",
      "Autonomous agents",
      "MCP tool integrations"
    ],
    practicesLabel: "In practice",
    practices: [
      {
        name: "Custom agents and skills",
        desc: "10 purpose-built agent roles across the SDLC — archaeologist, architect, planner, builder, tester, reviewer — plus 6 reusable skills that hold a task to a fixed standard."
      },
      {
        name: "Multi-agent workflows",
        desc: "Deterministic fan-out → verify → synthesise pipelines instead of one-off prompting, resumable across session or network drops."
      },
      {
        name: "Governance and auditability",
        desc: "79 architecture decision records plus git-hook enforcement, so a system largely written with AI stays reviewable by a human who wasn't there."
      },
      {
        name: "Failing test first",
        desc: "AI-written code goes through the same red-green loop as mine. Tests ship as the evidence; nothing passes unchecked."
      },
      {
        name: "Cost as an engineering problem",
        desc: "Prompt-compression skills I wrote cut token spend 60–75% with no loss of technical fidelity."
      },
      {
        name: "Deliberate model routing",
        desc: "Model chosen per task and benchmarked head-to-head, rather than defaulting to the most expensive one every time."
      }
    ],
    stats: [
      {value: "178→18", label: "Legacy repos → services"},
      {value: "10", label: "Custom agents built"},
      {value: "79", label: "Governance decision records"},
      {value: "60–75%", label: "LLM token cost cut"}
    ],
    note: "That system is my employer's private codebase, so you can't inspect it — I'd rather say so than call it verifiable. What is public: this site, SyncTune, and the election visualisation below, all built the same way."
  },

  projects: {
    eyebrow: "Projects",
    headingPre: "Things you can",
    headingEm: "actually open",
    subtitle:
      "Personal work with live builds and source. Client projects further down have no public link — that part is deliberate.",
    items: [
      {
        icon: "fas fa-music",
        projectName: "SyncTune — listen together in sync",
        descBullets: [
          "Role: Full-Stack",
          "Tech: Svelte, Go, WebSocket, WebRTC, Redis",
          "A real-time room where friends queue YouTube videos, chat, vote, use sound pads, and talk over push-to-talk. Keeping playback in sync across clients is the whole problem."
        ],
        links: [
          {label: "Live", href: "https://synctune-frontend.vercel.app"},
          {
            label: "Frontend",
            href: "https://github.com/sudjairakc/synctune-frontend"
          },
          {
            label: "Backend",
            href: "https://github.com/sudjairakc/synctune-backend"
          }
        ]
      },
      {
        icon: "fas fa-chart-column",
        projectName: "Bangkok council election, 65 → 69",
        descBullets: [
          "Role: Full-Stack",
          "Tech: Astro, TypeScript, SVG charts",
          "An interactive comparison of council winners across 50 Bangkok districts between two elections — Sankey flows and a sortable table over public civic data."
        ],
        links: [
          {
            label: "Live",
            href: "https://sudjairakc.github.io/bkk-election-69-results-compare"
          },
          {
            label: "Source",
            href: "https://github.com/sudjairakc/bkk-election-69-results-compare"
          }
        ]
      },
      {
        icon: "fas fa-code",
        projectName: "This site and the project hub",
        descBullets: [
          "Role: Full-Stack",
          "Tech: Astro 5, Tailwind v4, TypeScript",
          "Static, bilingual, and driven from a single content source per locale. Both repos are open, including the commit history that got them here."
        ],
        links: [
          {label: "Project hub", href: "https://sudjairakc.github.io"},
          {label: "Source", href: "https://github.com/sudjairakc/portfolio"}
        ]
      },
      {
        image: "forumLogo.png",
        projectName: "Prime Minister's Secretariat Question Forum",
        descBullets: [
          "Role: Frontend Developer",
          "Tech: React.js, Ant Design",
          "Built a tracking system for parliamentary questions, improving transparency for the Office of the Prime Minister's Secretariat."
        ],
        privateNote: "Client system — no public access"
      },
      {
        image: "chatBroadcastLogo.png",
        projectName: "Line OA & Facebook chat broadcasting",
        descBullets: [
          "Role: Frontend Developer",
          "Tech: React.js, Next.js, Material UI",
          "Interfaces for a broadcasting tool that let teams reach customers across Line OA and Facebook from one place."
        ],
        privateNote: "Client system — no public access"
      },
      {
        image: "kpiLogo.png",
        projectName: "KPI platform open API",
        descBullets: [
          "Role: Backend Developer",
          "Tech: Golang, MongoDB",
          "Built and maintained the backend for a KPI platform with open API integration."
        ],
        privateNote: "Client system — no public access"
      }
    ]
  },

  caseStudy: {
    metaTitle:
      "The catalogue call — Chaichana Sudjairak | Senior Full-Stack Developer",
    metaDescription:
      "How checking an assumption with 5,563 competitor records turned a pricing argument into a catalogue fix — and what it returned.",
    eyebrow: "Case study",
    titlePre: "The room said price.",
    titleEm: "The data said coverage.",
    standfirst:
      "A campaign meeting had already decided why our insurance comparison page was losing. I was asked to confirm it. The numbers said something else, and saying so out loud turned into the most measurable work I've done.",
    factsLabel: "At a glance",
    facts: [
      {label: "Where", value: "FIN Insurance Broker — B2B agent app"},
      {label: "My role", value: "Analysis, proposal, and the build"},
      {label: "Span", value: "Investigation, then 6–7 weeks of measurement"},
      {label: "Tooling", value: "Node.js scrapers, SQL, master-data diffing"}
    ],
    outcomesLabel: "What it returned",
    outcomes: [
      {
        value: "664",
        label: "policies closed on trims we previously could not quote at all"
      },
      {
        value: "1 in 10",
        label: "of the segment's premium volume, from zero six weeks earlier"
      },
      {value: "+58%", label: "month-over-month growth on the new trims"},
      {value: "77%", label: "of them arriving through the comparison engine"}
    ],
    steps: [
      {
        step: "01",
        title: "The assumption I was handed",
        body: "In a campaign meeting the conclusion was already formed: our motor comparison page could not compete because our sums insured sat below the competition. Someone had checked a few quotes by hand and our numbers did look lower. My job was to confirm it, which is a fine way to spend a week proving something everyone already agrees with."
      },
      {
        step: "02",
        title: "Checking it properly instead",
        body: "Rather than sample by hand I wrote a scraper and pulled the market — 5,563 competitor rows across 65 car models — then matched them against ours automatically. Name matching was the hard part: nobody writes a trim name the same way twice, so I paired Jaccard similarity with hard blocks on engine displacement and body type, so a 1.5L sedan could never match a 2.0L pickup just because the words lined up."
      },
      {
        step: "03",
        title: "What the data actually said",
        body: "Only a small fraction of rows were comparable at all — the naming gap was that wide. And within the rows that did line up, our sums insured came out higher than the competitor median 81% of the time. The premise was backwards. The real gap was inventory: roughly 70% of the trims competitors were selling, we simply did not offer. Customers were not rejecting our price. They were never seeing their car."
      },
      {
        step: "04",
        title: "Bringing it to the room",
        body: "I wrote it up with the matching method and its limits stated in the report — including that the price comparison rested on a thin slice of genuinely comparable rows, so I would not stretch it into a market-wide claim. The recommendation was to stop arguing about price and start closing the catalogue gap. The meeting agreed, and I took the work."
      },
      {
        step: "05",
        title: "Building the fix",
        body: "The missing trims and their premiums had been a manual spreadsheet job, which is how you get typos in a rating table. I built a pipeline that loaded them across every carrier we sell, and every batch went to Underwriting for sign-off before it reached production. Correctness here is somebody's claim being paid or refused, so the reviewer stayed in the loop by design."
      },
      {
        step: "06",
        title: "Then checking my own result",
        body: "New volume is easy to claim and easy to fake — if customers just moved from an existing trim to a new one, I would have moved a number, not made one. So I split the segment: existing trims held their normal share while the market softened, and the group as a whole fell less than comparable segments in the same month. Growth on new trims was additional, not borrowed. I said which parts of that I could not fully isolate, too."
      }
    ],
    takeawayLabel: "What I take from it",
    takeaways: [
      "The most valuable thing I did was refuse to confirm something quickly. The investigation cost days; the assumption would have cost a quarter aimed at the wrong problem.",
      "Automating the boring part — name matching, bulk loading — is what made the fix large enough to measure. A hand-keyed version would have covered a fraction of the trims.",
      "Every number I reported came with how it was measured and where it stopped being reliable. That is the part that let the room act on it.",
      "Underwriting reviewing every batch was not a bottleneck. On rating data, it is the feature."
    ],
    disclosureLabel: "On the numbers",
    disclosure:
      "Figures here are ratios and counts of my own work, kept deliberately free of my employer's revenue and internal data inventory. Currency amounts, carrier names, table names, and raw record counts stay inside the company where they belong.",
    backLabel: "Back to portfolio",
    contactCta: "Get in touch"
  },

  contact: {
    eyebrow: "Get in touch",
    headingPre: "Have an idea worth",
    headingEm: "building?",
    subtitle:
      "Discuss a project or just want to say hi? My inbox is open for all.",
    emailBtn: "Email Me",
    email: "sudjairak.c@gmail.com",
    phoneLabel: "Show phone number",
    phone: "085-399-7206"
  },

  footer: {
    role: "AI-focused Senior Full-Stack Developer · Thailand",
    projectHub: "Explore the full project hub",
    copyright: `© ${getYear()} Chaichana Sudjairak. Built with Astro & Tailwind.`
  }
};
