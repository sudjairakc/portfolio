/* Thai content — mirrors the shape of en.ts. */

import {getYear} from "../../utils/date";
import type {Content} from "./types";

const years = getYear() - 2021;

export const th: Content = {
  meta: {
    title: "Chaichana Sudjairak | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer สาย AI จากประเทศไทย เชี่ยวชาญ React, React Native, Node.js, Go และ TypeScript — สร้างผลิตภัณฑ์ web, mobile และระบบที่ทำงานร่วมกับ AI แบบครบวงจร"
  },

  nav: {
    skills: "ทักษะ",
    experience: "ประสบการณ์",
    ai: "AI",
    projects: "ผลงาน",
    contact: "ติดต่อ",
    projectHub: "Project Hub",
    viewGithub: "ดู GitHub"
  },

  hero: {
    badge: "Senior Full-Stack Developer สาย AI · ประเทศไทย",
    greetingPre: "สวัสดีครับ! ผมชื่อ",
    greetingName: "James",
    greetingPost: ".",
    subTitle: `Senior Full-Stack Developer จากประเทศไทย ประสบการณ์กว่า ${years} ปี
      ดูแลฟีเจอร์แบบครบวงจรทั้ง React, React Native, Node.js, TypeScript, JavaScript และ Go
      เลื่อนขึ้นเป็น Senior ในปี 2026 จากงานที่ขยับตัวเลขได้จริง ไม่ใช่แค่ปิด ticket —
      ผู้ช่วย AI ในแอป การใช้ข้อมูลหักข้อสรุปที่ประชุมจนเปลี่ยนทิศทางสินค้า
      และการนำทีมด้านเทคนิคในการยกเครื่องระบบ 29 ระบบ`,
    resumeBtn: "ดู Résumé",
    githubBtn: "ดู GitHub",
    contactBtn: "ติดต่อ",
    resumeLink:
      "https://drive.google.com/file/d/1KQie2ie0wg0qvmD3pWzrNw2O4j8FgyMF/view?usp=sharing",
    cardRole: "Senior Full-Stack Developer · ประเทศไทย",
    stats: [
      `ประสบการณ์กว่า ${years} ปี`,
      "ส่งมอบงานแบบครบวงจร",
      "ร่วมนำการยกเครื่อง 29 ระบบ"
    ]
  },

  proof: {
    eyebrow: "สรุปสั้น",
    heading: "ปีนี้ผมทำอะไรไว้ 3 อย่าง",
    items: [
      {
        value: "1 ใน 10",
        label:
          "ของยอดเบี้ยในกลุ่มรถกลุ่มหนึ่ง มาจากรุ่นย่อยที่ผมพิสูจน์ว่าเราขาด — หกสัปดาห์ก่อนหน้ายังเป็นศูนย์"
      },
      {
        value: "27 / 29",
        label:
          "ระบบที่ย้ายจาก Node.js monolith เก่าไปเป็น Go โดยขยับทีละขั้นและผู้ใช้ไม่รู้สึกอะไรเลย"
      },
      {
        value: "3 เท่า",
        label:
          "การใช้งานผู้ช่วย AI ในแอปที่ผมวางโครงระบบ หลังขยายสิทธิ์ให้ตัวแทนเข้าถึงได้กว้างขึ้น"
      }
    ],
    caseStudyCta: "อ่านว่าข้อสรุปเรื่องรุ่นรถมาได้อย่างไร"
  },

  skills: {
    eyebrow: "สิ่งที่ผมทำ",
    headingPre: "ทักษะและ",
    headingEm: "ความสามารถ",
    subTitle:
      "Senior full-stack developer — web, mobile, backend และงานที่ทำงานร่วมกับ AI",
    whatIBring: "สิ่งที่ผมนำมาให้",
    techIReach: "เทคโนโลยีที่ผมใช้",
    items: [
      `ประสบการณ์กว่า ${years} ปีในการพัฒนาฟีเจอร์ตั้งแต่แนวคิดจนถึง production ทั้ง React, React Native, Node.js และ Go`,
      "ผมไปตรวจก่อนลงมือ — งานที่ผมภูมิใจที่สุดเริ่มจากการพิสูจน์ว่าสิ่งที่ทุกคนในห้องเชื่ออยู่นั้นไม่จริง",
      "เป็นผู้นำด้านเทคนิค: ทำ reference implementation และมาตรฐานให้ developer คนอื่นยึดเป็นแบบ พร้อมตรวจงานรายสัปดาห์ให้ทีม 13 คน",
      "นำเสนอผลวิเคราะห์ที่อ้างอิงข้อมูลต่อผู้บริหารระดับ C-level ได้ และทำงานร่วมกับ designer, PM และทีม Underwrite ได้ดี"
    ]
  },

  education: {
    eyebrow: "การศึกษา",
    headingPre: "ที่ที่ผม",
    headingEm: "ศึกษา",
    sub: "รากฐานเบื้องหลังแนวทางการทำงานของผม",
    schools: [
      {
        schoolName: "Burapha University, Thailand",
        logo: "buuLogo.png",
        subHeader: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        duration: "August 2017 – April 2021",
        desc: "GPA 3.31",
        descBullets: [
          "เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์และการเขียนโปรแกรม (A grades in Programming Fundamentals, Software Development, UI Design, Software Testing, Mobile App Development)",
          "มีพื้นฐานที่แข็งแกร่งด้านวิทยาการคอมพิวเตอร์และคณิตศาสตร์ (A grades in Discrete Structures, Math for Computing, Probability & Statistics)",
          "เข้าใจเทคโนโลยี web และ mobile อย่างลึกซึ้ง (Web Programming, Networks Programming, IoT for Smart Living)"
        ]
      }
    ]
  },

  experience: {
    eyebrow: "ประสบการณ์",
    headingPre: "ประสบการณ์",
    headingEm: "การทำงาน",
    sub: "บทบาทที่ผมดูแลฟีเจอร์แบบครบวงจร พิสูจน์ข้อสรุปด้วยข้อมูล และก้าวขึ้นนำเมื่อถึงเวลาสำคัญ",
    caseStudyCta: "อ่าน case study เต็ม: ข้อสรุปเรื่องรุ่นรถ",
    items: [
      {
        role: "Senior Full-Stack Developer",
        company: "FIN Insurance Broker Co., Ltd.",
        companyLogo: "finLogo.png",
        link: "https://www.fininsurance.co.th/",
        date: "June 2023 – Present",
        descBullets: [
          "เลื่อนขึ้นเป็น Senior (ก.ค. 2026) หลังเข้าทำงานในตำแหน่ง Full Stack Developer เมื่อ มิ.ย. 2023",
          "ผู้ช่วย AI ที่วางโครงระบบและดูแลเอง: สร้างผู้ช่วย AI ในแอปที่ตอบคำถามตัวแทนได้ — เทียบเบี้ยหลายแผนและออกใบเสนอราคาจากแชทได้เลย ถามหาอู่และค่างวดผ่อนชำระ อ่านรูปหรือ PDF ที่แนบมาได้ ผมรับผิดชอบทั้ง architecture และขา frontend + BFF โดยแบ่งขาเชื่อมต่อ AI API ให้น้องในทีมทำภายใต้การตรวจงานของผม การใช้งานโตขึ้น 3 เท่าหลังขยายสิทธิ์ให้ตัวแทนเข้าถึงได้กว้างขึ้น",
          "ข้อสรุปเรื่องรุ่นรถที่มาจากข้อมูล: ที่ประชุมเชื่อว่าหน้าเปรียบเทียบของเราสู้ไม่ได้เพราะราคา ผมจับคู่ข้อมูลคู่แข่ง 5,563 รายการ ครอบคลุม 65 รุ่นรถ แล้วพบตรงกันข้าม — ในรุ่นที่เทียบกันได้จริง ทุนประกันของเราสูงกว่าถึง 81% ปัญหาจริงคือความครอบคลุม: ราว 70% ของรุ่นย่อยที่คู่แข่งขาย เราไม่มีให้ลูกค้าเลือกเลย ผมทำข้อเสนอเข้าที่ประชุม แล้วสร้าง pipeline โหลดรุ่นที่ขาดพร้อมเบี้ยของทุกบริษัทที่เราขาย โดยทุกชุดข้อมูลผ่านการตรวจสอบจากทีม Underwrite ก่อนขึ้นจริง",
          "ผลที่ได้กลับมา: 664 งานปิดสำเร็จบนรุ่นที่เมื่อก่อนเสนอราคาไม่ได้เลย โดย 77% มาทางระบบเปรียบเทียบเบี้ย และโตขึ้น 58% เดือนต่อเดือน ราว 1 ใน 10 ของยอดในกลุ่มรถกลุ่มนี้มาจากรุ่นเหล่านั้น — และผมตรวจยอดรุ่นเดิมด้วยเพื่อยืนยันว่าเป็นยอดใหม่จริง ไม่ใช่ลูกค้าย้ายมาจากรุ่นเดิม",
          "การนำทีมด้านเทคนิคในการยกเครื่องระบบ: เป็นหนึ่งในหัวหอกของการแยก Node.js v10 monolith ที่เก่าแล้วออกเป็น Go services ครอบคลุม 29 ระบบ ทีม 13 คน ผมเขียนต้นแบบ reference service และทำ contract กับมาตรฐานที่ 15+ ระบบใช้เป็นแบบ แล้วตรวจและรวมงาน 75 merge request ครอบคลุม 26 จาก 29 ระบบ ปัจจุบันย้ายแล้ว 27 ระบบโดยผู้ใช้ไม่รู้สึกอะไรเลย พร้อมเพิ่มการเข้ารหัสข้อมูลส่วนบุคคล การกำหนดสิทธิ์รายคน และร่องรอยการเข้าถึงที่ตรวจย้อนหลังได้",
          "งานฝั่งผลิตภัณฑ์: เป็น developer คนเดียวที่ดูแลโมดูลเปรียบเทียบแผนประกัน ส่งมอบครบวงจรใน 5 วัน ปรับการค้นหาเบี้ยจากแบบตรงตัวเป็นค้นหาตามช่วง ทำ commission logic ครอบคลุม tier bonus การควบคุมงบผ่อนชำระ และระบบผ่อนแบบไม่หักค่าคอม ออกแบบหน้าจอหลักใหม่ รวมถึงหน้าโปรไฟล์ที่แสดงค่าแนะนำ สถานะจ่ายแล้ว/รอจ่าย และกราฟยอดสะสม",
          "ความน่าเชื่อถือของระบบ: เป็นรักษาการ tech lead ในช่วงที่ senior ไม่อยู่ ดูแลการส่งมอบและตัดสินใจด้าน architecture เอง แก้ปัญหา production ที่วิกฤต (Android crash, บั๊ก random-state) โดยกระทบลูกค้าน้อยที่สุด ปัจจุบันไล่หาต้นเหตุเชิงระบบของปัญหาการชำระเงินที่เกิดซ้ำ — เป้าหมายคือทำให้ปัญหาหายไป ไม่ใช่แค่ปิดเคส",
          "งานที่ทำในเวลาส่วนตัว: แอปฟังเพลงร่วมกันแบบ real-time สำหรับออฟฟิศ พร้อม sound pad และ text-to-speech ทำให้คนเข้าใหม่กลายเป็นส่วนหนึ่งของทีมได้ตั้งแต่วันแรก"
        ]
      },
      {
        role: "Software Developer",
        company: "Customix Co., Ltd.",
        companyLogo: "customixLogo.png",
        link: "https://www.customix.co/",
        date: "April 2021 – May 2023",
        descBullets: [
          "สร้างแอป web และ mobile สำหรับแพลตฟอร์มระดับองค์กรด้วย React, React Native, Node.js และ Go",
          "ออกแบบ UI component library ที่นำกลับมาใช้ซ้ำได้ ช่วยเพิ่มความเร็วในการพัฒนา 20% และรักษาความสอดคล้องของดีไซน์ข้ามแพลตฟอร์ม",
          "ปรับปรุงการเชื่อมต่อ RESTful API และทำงานร่วมกับ designer และ PM อย่างใกล้ชิดเพื่อส่งมอบฟีเจอร์ที่ซับซ้อนตามกำหนด"
        ]
      },
      {
        role: "Web Developer Intern",
        company: "ClickNext Co., Ltd.",
        companyLogo: "clicknextLogo.png",
        date: "Nov 2020 – Mar 2021",
        desc: "พัฒนา CMS แบบ dynamic สำหรับระบบสำนักงานประกันภัยและระบบสหกรณ์การเงินด้วย ASP.NET"
      }
    ]
  },

  ai: {
    eyebrow: "AI Engineering",
    headingPre: "ผมทำงาน",
    headingEm: "กับ AI อย่างไร",
    headline: "AI เขียนโค้ดให้ผมเยอะ แต่ไม่มีสิทธิ์ข้ามการตรวจ",
    intro: `ในงาน rewrite insurance-backend จริง ผมใช้ custom agent ที่สร้างขึ้นเอง
      การ orchestrate แบบขนาน และ governance ที่ทำให้โค้ดซึ่ง AI เขียนยังตรวจย้อนได้ —
      ส่วนที่น่าสนใจไม่ใช่การ prompt แต่เป็นด่านตรวจที่ล้อมมันไว้`,
    stackLabel: "สิ่งที่ผมใช้",
    stack: [
      "Anthropic Claude",
      "OpenAI Codex",
      "Autonomous agents",
      "MCP tool integrations"
    ],
    practicesLabel: "ในทางปฏิบัติ",
    practices: [
      {
        name: "Custom agent และ skill ที่สร้างเอง",
        desc: "10 agent เฉพาะทางครอบคลุมทั้ง SDLC — archaeologist, architect, planner, builder, tester, reviewer — พร้อม 6 skill ที่นำกลับมาใช้ซ้ำได้เพื่อคุมมาตรฐานงานให้คงที่"
      },
      {
        name: "Multi-agent workflow",
        desc: "pipeline แบบ fan-out → verify → synthesise ที่ผลลัพธ์คาดเดาได้ แทนการ prompt แบบครั้งต่อครั้ง และทำต่อจากเดิมได้แม้ session หรือเน็ตหลุด"
      },
      {
        name: "Governance และการตรวจย้อนหลัง",
        desc: "79 architecture decision record พร้อม git-hook บังคับใช้ ทำให้ระบบที่เขียนด้วย AI เป็นส่วนใหญ่ยังตรวจได้โดยคนที่ไม่ได้อยู่ตอนนั้น"
      },
      {
        name: "เขียน test ที่ fail ก่อน",
        desc: "โค้ดที่ AI เขียนผ่าน loop red-green เหมือนโค้ดผมเอง test คือหลักฐานที่ส่งไปด้วย ไม่มีอะไรผ่านไปโดยไม่ถูกตรวจ"
      },
      {
        name: "มองต้นทุนเป็นงานวิศวกรรม",
        desc: "skill บีบอัด prompt ที่ผมเขียนเองลดค่า token ได้ 60–75% โดยไม่เสียความแม่นยำทางเทคนิค"
      },
      {
        name: "เลือกโมเดลอย่างมีเหตุผล",
        desc: "เลือกโมเดลตามลักษณะงานและวัดผลเทียบกันจริง ไม่ใช่ใช้ตัวที่แพงที่สุดทุกครั้ง"
      }
    ],
    stats: [
      {value: "178→18", label: "Legacy repos → services"},
      {value: "10", label: "Custom agent ที่สร้างเอง"},
      {value: "79", label: "เอกสารตัดสินใจเชิงสถาปัตยกรรม"},
      {value: "60–75%", label: "ต้นทุน token ที่ลดได้"}
    ],
    note: "ระบบนั้นเป็น codebase ภายในของบริษัท คนนอกตรวจไม่ได้ — ผมเลือกบอกตรง ๆ ดีกว่าเคลมว่าตรวจสอบได้ ส่วนที่เปิดให้ดูได้จริงคือเว็บนี้, SyncTune และ election visualisation ด้านล่าง ทั้งหมดสร้างด้วยวิธีทำงานเดียวกัน"
  },

  projects: {
    eyebrow: "ผลงาน",
    headingPre: "ของที่",
    headingEm: "เปิดดูได้จริง",
    subtitle:
      "งานส่วนตัวที่มีทั้งตัวเว็บและ source code ส่วนงานลูกค้าด้านล่างไม่มีลิงก์สาธารณะ — ตรงนั้นตั้งใจ",
    items: [
      {
        icon: "fas fa-music",
        projectName: "SyncTune — ฟังเพลงพร้อมกันแบบ real-time",
        descBullets: [
          "Role: Full-Stack",
          "Tech: Svelte, Go, WebSocket, WebRTC, Redis",
          "ห้องฟังเพลงที่เพื่อนต่อคิว YouTube แชท โหวต กด sound pad และคุยแบบ push-to-talk ได้ โจทย์ทั้งหมดอยู่ที่การทำให้เพลงเล่นตรงกันทุกเครื่อง"
        ],
        links: [
          {label: "เปิดเว็บ", href: "https://synctune-frontend.vercel.app"},
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
        projectName: "เทียบผลเลือกตั้ง ส.ก. กรุงเทพ 65 → 69",
        descBullets: [
          "Role: Full-Stack",
          "Tech: Astro, TypeScript, SVG charts",
          "เว็บเทียบผู้ชนะ 50 เขตของกรุงเทพระหว่างสองการเลือกตั้ง ทำเป็น Sankey และตารางเรียงลำดับได้ จากข้อมูลสาธารณะ"
        ],
        links: [
          {
            label: "เปิดเว็บ",
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
        projectName: "เว็บนี้และ project hub",
        descBullets: [
          "Role: Full-Stack",
          "Tech: Astro 5, Tailwind v4, TypeScript",
          "static, สองภาษา และคุมเนื้อหาจากไฟล์เดียวต่อภาษา repo เปิดทั้งคู่ รวมถึง commit history ที่พามาถึงจุดนี้"
        ],
        links: [
          {label: "Project hub", href: "https://sudjairakc.github.io"},
          {label: "Source", href: "https://github.com/sudjairakc/portfolio"}
        ]
      },
      {
        image: "forumLogo.png",
        projectName: "ระบบกระดานคำถาม สำนักเลขาธิการนายกรัฐมนตรี",
        descBullets: [
          "Role: Frontend Developer",
          "Tech: React.js, Ant Design",
          "ทำระบบติดตามกระทู้ถามของรัฐสภา เพิ่มความโปร่งใสให้สำนักเลขาธิการนายกรัฐมนตรี"
        ],
        privateNote: "ระบบของลูกค้า — ไม่มีลิงก์สาธารณะ"
      },
      {
        image: "chatBroadcastLogo.png",
        projectName: "ระบบ broadcast แชท Line OA และ Facebook",
        descBullets: [
          "Role: Frontend Developer",
          "Tech: React.js, Next.js, Material UI",
          "ทำหน้าจอให้เครื่องมือ broadcast ที่ให้ทีมสื่อสารกับลูกค้าผ่าน Line OA และ Facebook ได้จากที่เดียว"
        ],
        privateNote: "ระบบของลูกค้า — ไม่มีลิงก์สาธารณะ"
      },
      {
        image: "kpiLogo.png",
        projectName: "KPI platform open API",
        descBullets: [
          "Role: Backend Developer",
          "Tech: Golang, MongoDB",
          "พัฒนาและดูแล backend ของแพลตฟอร์ม KPI พร้อมการเชื่อมต่อ open API"
        ],
        privateNote: "ระบบของลูกค้า — ไม่มีลิงก์สาธารณะ"
      }
    ]
  },

  caseStudy: {
    metaTitle:
      "ข้อสรุปเรื่องรุ่นรถ — Chaichana Sudjairak | Senior Full-Stack Developer",
    metaDescription:
      "การเอาข้อมูลคู่แข่ง 5,563 รายการไปตรวจสมมติฐาน เปลี่ยนข้อถกเถียงเรื่องราคาให้กลายเป็นการแก้ที่ความครอบคลุมของสินค้า — และผลที่ได้กลับมา",
    eyebrow: "Case study",
    titlePre: "ที่ประชุมบอกว่าเรื่องราคา",
    titleEm: "ข้อมูลบอกว่าเรื่องความครอบคลุม",
    standfirst:
      "ที่ประชุมพัฒนาแคมเปญสรุปไปแล้วว่าทำไมหน้าเปรียบเทียบประกันของเราสู้ไม่ได้ ผมได้รับหน้าที่ไปยืนยัน แต่ตัวเลขบอกอีกอย่าง และการพูดออกไปตรง ๆ กลายเป็นงานที่วัดผลได้ชัดที่สุดที่ผมเคยทำ",
    factsLabel: "ภาพรวม",
    facts: [
      {label: "ที่ไหน", value: "FIN Insurance Broker — แอปตัวแทน B2B"},
      {label: "บทบาทผม", value: "วิเคราะห์ เสนอ และลงมือทำเอง"},
      {label: "ช่วงเวลา", value: "ช่วงตรวจสอบ แล้ววัดผลต่อ 6–7 สัปดาห์"},
      {label: "เครื่องมือ", value: "Node.js scraper, SQL, diff master data"}
    ],
    outcomesLabel: "ผลที่ได้กลับมา",
    outcomes: [
      {
        value: "664",
        label: "งานปิดสำเร็จบนรุ่นย่อยที่เมื่อก่อนเสนอราคาไม่ได้เลย"
      },
      {
        value: "1 ใน 10",
        label: "ของยอดเบี้ยในกลุ่มรถกลุ่มนี้ จากที่หกสัปดาห์ก่อนเป็นศูนย์"
      },
      {value: "+58%", label: "การเติบโตเดือนต่อเดือนของรุ่นใหม่"},
      {value: "77%", label: "ของยอดนั้นมาทางระบบเปรียบเทียบเบี้ย"}
    ],
    steps: [
      {
        step: "01",
        title: "สมมติฐานที่ผมได้รับมา",
        body: "ในที่ประชุมพัฒนาแคมเปญ ข้อสรุปถูกตั้งไว้แล้วว่าหน้าเปรียบเทียบประกันรถของเราสู้คู่แข่งไม่ได้เพราะทุนประกันของเราต่ำกว่า มีคนลองเทียบด้วยมือไปแล้วสองสามเคสและตัวเลขของเราดูน้อยกว่าจริง หน้าที่ผมคือไปยืนยัน — ซึ่งเป็นวิธีใช้เวลาหนึ่งสัปดาห์ไปกับการพิสูจน์สิ่งที่ทุกคนเห็นตรงกันอยู่แล้ว"
      },
      {
        step: "02",
        title: "เลือกไปตรวจให้จริงจังแทน",
        body: "ผมไม่สุ่มด้วยมือ แต่เขียน scraper ดึงข้อมูลทั้งตลาด — 5,563 รายการ ครอบคลุม 65 รุ่นรถ — แล้วจับคู่กับข้อมูลของเราอัตโนมัติ ส่วนที่ยากคือการจับคู่ชื่อ เพราะไม่มีใครเขียนชื่อรุ่นย่อยเหมือนกันสองครั้ง ผมจึงใช้ Jaccard similarity คู่กับการบล็อกแบบแข็งด้วยความจุเครื่องยนต์และประเภทตัวถัง เพื่อไม่ให้ซีดาน 1.5 ไปจับคู่กับกระบะ 2.0 แค่เพราะคำมันคล้ายกัน"
      },
      {
        step: "03",
        title: "สิ่งที่ข้อมูลบอกจริง ๆ",
        body: "มีเพียงส่วนน้อยของรายการที่เทียบกันได้จริง — ช่องว่างเรื่องการเขียนชื่อกว้างขนาดนั้น และในรายการที่เทียบได้ ทุนประกันของเราออกมาสูงกว่าค่ากลางของคู่แข่งถึง 81% สมมติฐานกลับหัวกลับหาง ปัญหาจริงคือของในสต็อก: ราว 70% ของรุ่นย่อยที่คู่แข่งขาย เราไม่มีให้เลือกเลย ลูกค้าไม่ได้ปฏิเสธราคาเรา แต่เขาไม่เคยเห็นรถของตัวเองในระบบ"
      },
      {
        step: "04",
        title: "เอาเข้าที่ประชุม",
        body: "ผมเขียน report โดยระบุวิธีจับคู่และข้อจำกัดไว้ในตัวเอกสาร รวมถึงบอกตรง ๆ ว่าข้อสรุปเรื่องราคายืนอยู่บนรายการที่เทียบกันได้จำนวนไม่มาก ผมจึงไม่ยืดไปสรุปแทนทั้งตลาด ข้อเสนอคือเลิกเถียงเรื่องราคา แล้วไปปิดช่องว่างเรื่องความครอบคลุม ที่ประชุมเห็นชอบ และผมรับงานมาทำต่อ"
      },
      {
        step: "05",
        title: "ลงมือแก้",
        body: "การเพิ่มรุ่นที่ขาดพร้อมเบี้ยเคยเป็นงานคีย์มือใน spreadsheet ซึ่งเป็นวิธีที่ทำให้ตารางคิดเบี้ยมี typo ผมเลยสร้าง pipeline โหลดเข้าระบบครอบคลุมทุกบริษัทที่เราขาย และทุกชุดข้อมูลส่งให้ทีม Underwrite ตรวจก่อนขึ้นจริง ความถูกต้องตรงนี้คือเคลมของใครคนหนึ่งจะได้จ่ายหรือถูกปฏิเสธ ผมจึงออกแบบให้คนตรวจอยู่ใน loop ตั้งแต่ต้น"
      },
      {
        step: "06",
        title: "แล้วกลับมาตรวจผลของตัวเอง",
        body: "ยอดใหม่เป็นสิ่งที่เคลมง่ายและปลอมง่าย ถ้าลูกค้าแค่ย้ายจากรุ่นเดิมมารุ่นใหม่ ผมก็แค่ย้ายตัวเลข ไม่ได้สร้างมันขึ้นมา ผมจึงแยกดูรายกลุ่ม: รุ่นเดิมยังรักษาสัดส่วนปกติในเดือนที่ตลาดชะลอ และกลุ่มนี้ทั้งกลุ่มตกน้อยกว่ากลุ่มรถอื่นในเดือนเดียวกัน การเติบโตของรุ่นใหม่จึงเป็นยอดที่เพิ่มขึ้นจริง ไม่ใช่ยอดที่ยืมมา และผมบอกไว้ด้วยว่าส่วนไหนที่ผมแยกออกไม่ได้ 100%"
      }
    ],
    takeawayLabel: "สิ่งที่ผมได้จากงานนี้",
    takeaways: [
      "สิ่งที่มีค่าที่สุดที่ผมทำคือปฏิเสธที่จะรีบยืนยัน การไปตรวจใช้เวลาไม่กี่วัน แต่ถ้าเชื่อสมมติฐานเดิม เราจะเสียไปหนึ่งไตรมาสกับการแก้ปัญหาที่ผิดจุด",
      "การทำส่วนที่น่าเบื่อให้อัตโนมัติ — จับคู่ชื่อ โหลดข้อมูลจำนวนมาก — คือสิ่งที่ทำให้การแก้ใหญ่พอจะวัดผลได้ ถ้าคีย์มือคงครอบคลุมได้แค่เศษเสี้ยว",
      "ทุกตัวเลขที่ผมรายงานมาพร้อมวิธีวัดและจุดที่มันเริ่มเชื่อไม่ได้ นั่นคือส่วนที่ทำให้ที่ประชุมกล้าตัดสินใจจากมัน",
      "การให้ Underwrite ตรวจทุกชุดข้อมูลไม่ใช่คอขวด สำหรับข้อมูลคิดเบี้ย มันคือฟีเจอร์"
    ],
    disclosureLabel: "เรื่องตัวเลข",
    disclosure:
      "ตัวเลขในหน้านี้เป็นสัดส่วนและจำนวนงานของผมเอง โดยตั้งใจไม่รวมรายได้และคลังข้อมูลภายในของบริษัท จำนวนเงิน ชื่อบริษัทประกัน ชื่อตาราง และจำนวนข้อมูลดิบ เก็บไว้ในบริษัทตามที่ควรเป็น",
    backLabel: "กลับไปหน้า portfolio",
    contactCta: "ติดต่อผม"
  },

  contact: {
    eyebrow: "ติดต่อ",
    headingPre: "มีไอเดียที่น่า",
    headingEm: "ลงมือทำไหม?",
    subtitle:
      "อยากคุยเรื่องโปรเจกต์หรือแค่ทักมาทายทาย กล่องข้อความผมเปิดรับทุกคน",
    emailBtn: "ส่งอีเมล",
    email: "sudjairak.c@gmail.com",
    phoneLabel: "ดูเบอร์โทร",
    phone: "085-399-7206"
  },

  footer: {
    role: "Senior Full-Stack Developer สาย AI · ประเทศไทย",
    projectHub: "สำรวจ project hub ทั้งหมด",
    copyright: `© ${getYear()} Chaichana Sudjairak. Built with Astro & Tailwind.`
  }
};
