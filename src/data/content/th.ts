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
      ได้รับการเลื่อนขึ้นเป็น Senior ในปี 2026 จากการวางโครงระบบผู้ช่วย AI ในแอป
      สร้างเบี้ยประกันใหม่ ฿8.4M จากการขยายรุ่นรถที่พิสูจน์ด้วยข้อมูล
      และร่วมเป็นหัวหอกในการยกเครื่องระบบหลังบ้าน 29 ระบบ`,
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
      "เลื่อนขึ้นเป็น Senior ในปี 2026 จากผลงานที่วัดได้ — ผู้ช่วย AI ในแอป, เบี้ยประกันใหม่ ฿8.4M และการนำทีมด้านเทคนิคในโครงการยกเครื่องระบบทั้งบริษัท",
      "มีผลงานพิสูจน์แล้วในการส่งมอบงานอย่างรวดเร็วและทำงานได้ด้วยตัวเอง — รวมถึงการวางมาตรฐานให้ทีมที่เหลือทำตาม",
      "เป็นผู้นำด้านเทคนิค: ทำ reference implementation, ตรวจโค้ดรายสัปดาห์ให้ทีม 13 คน และนำเสนอผลการวิเคราะห์ที่อ้างอิงข้อมูลต่อผู้บริหารระดับ C-level",
      "สื่อสารข้ามสายงานได้ดีทั้งกับ designer, PM, ทีม Underwrite และทีมที่ไม่ใช่สายเทคนิค"
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
    items: [
      {
        role: "Senior Full-Stack Developer",
        company: "FIN Insurance Broker Co., Ltd.",
        companyLogo: "finLogo.png",
        link: "https://www.fininsurance.co.th/",
        date: "June 2023 – Present",
        descBullets: [
          "เส้นทางการเติบโต: เข้าทำงานในตำแหน่ง Full Stack Developer (มิ.ย. 2023) และได้รับการเลื่อนขึ้นเป็น Senior Full-Stack Developer (ก.ค. 2026) จากผลงานผู้ช่วย AI ในแอป, การขยายรุ่นรถที่พิสูจน์ด้วยข้อมูล และการนำทีมด้านเทคนิคในโครงการยกเครื่องระบบหลังบ้านทั้งบริษัท",
          "FIN AI — ผู้ช่วย AI ในแอป: วางโครงระบบผู้ช่วย AI ที่ตอบคำถามตัวแทนได้ครบวงจร และรับผิดชอบขา frontend + BFF ด้วยตัวเอง โดยแบ่งขาเชื่อมต่อ AI API ให้น้องในทีมทำภายใต้การตรวจงานของผม ตัวแทนเช็กและเปรียบเทียบเบี้ยหลายแผนพร้อมกัน ออกใบเสนอราคาจากแชทได้เลย ถามหาอู่ใกล้เคียง เจ้าหน้าที่ที่รับผิดชอบ และค่างวดผ่อนชำระ รวมถึงแนบรูปหรือ PDF ให้ AI อ่านและตอบจากเอกสาร พร้อมการจำประวัติแชท ต่อบทสนทนาเดิม และคุมโควตาการใช้ต่อวัน ออกแบบให้เพิ่มความสามารถใหม่ได้โดยไม่ต้องรื้อของเดิม และทำเอกสารไว้ให้ทีมรับไปดูแลต่อได้ การใช้งานโตขึ้น 3 เท่า จาก ~600–900 เป็น 2,000+ sessions/เดือน หลังขยายสิทธิ์ให้ตัวแทนระดับล่างลงมาเข้าถึงได้",
          "ผลลัพธ์ทางธุรกิจที่ขับเคลื่อนด้วยข้อมูล: ที่ประชุมแคมเปญสรุปว่าหน้าเปรียบเทียบราคาของเราสู้คู่แข่งไม่ได้เพราะเรื่องราคา ผมเขียนโปรแกรมดึงและจับคู่ข้อมูลคู่แข่ง 5,563 รายการ ครอบคลุม 65 รุ่นรถ แล้วพบว่าตรงกันข้าม — ในรุ่นที่เทียบกันได้จริง ทุนประกันของเราสูงกว่าถึง 81% และปัญหาจริงคือความครอบคลุม: 69.4% ของรุ่นย่อยที่คู่แข่งขาย เราไม่มีให้ลูกค้าเลือกเลย หลังข้อเสนอผ่านที่ประชุม ผมเขียนโปรแกรมจัดข้อมูลเบี้ย 42,218 แถว จาก 13 บริษัทประกันเข้าระบบ (แทนการคีย์มือใน Excel) โดยทุกชุดข้อมูลผ่านการตรวจสอบจากทีม Underwrite ก่อนขึ้นจริง ผล 6–7 สัปดาห์แรก: เบี้ยใหม่ ฿8.4M จาก 664 งานปิดสำเร็จ โดย 77% มาทางระบบเปรียบเทียบเบี้ย และโตขึ้น +58% เดือนต่อเดือน — ตรวจซ้ำกับรุ่นเดิมแล้วยืนยันว่าเป็นยอดที่เกิดใหม่จริง ไม่ใช่ลูกค้าย้ายจากรุ่นเดิม",
          "การนำทีมด้านเทคนิค — ยกเครื่องระบบทั้งบริษัท: เป็นหนึ่งในหัวหอกของการแยก codebase Node.js v10 ขนาดใหญ่ที่เก่าแล้ว (API หลายร้อยตัวในโปรเจกต์เดียว) ให้เป็น Go microservices ที่แยกส่วนกันอย่างเหมาะสม — 29 ระบบ 2,624 เส้นทาง ทีม 13 คน ผมเขียนต้นแบบของ reference service และทำเอกสาร contract กับมาตรฐานการเขียนโค้ดที่ 15+ ระบบใช้เป็นแบบ แล้วตรวจและรวมงาน 75 merge request ครอบคลุม 26 จาก 29 ระบบ ในรอบการตรวจงานทุกสัปดาห์ ปัจจุบันย้ายแล้ว 27 จาก 29 ระบบ โดยผู้ใช้ไม่รู้สึกอะไรเลยระหว่างทาง พร้อมเพิ่มการเข้ารหัสข้อมูลส่วนบุคคลทั้งหมด การกำหนดสิทธิ์เป็นรายคน และร่องรอยการเข้าถึงข้อมูลที่ตรวจย้อนหลังได้",
          "การส่งมอบฟีเจอร์และ Business Logic: เป็น developer เพียงคนเดียวที่ดูแลโมดูลเปรียบเทียบแผนประกัน — ส่งมอบ dynamic filters, ป้ายแผนแบบแยกสี, ระบบใช้คูปองอัตโนมัติ, ช่วงทุนประกันที่ปรับได้ และการแชร์แผนแบบครบวงจรภายใน 5 วัน ปรับปรุงการค้นหาเบี้ยประกันจากแบบตรงตัวเป็นแบบค้นหาตามช่วง และออกแบบการปรับทุนประกันแบบ dynamic เพื่อขยายการมองเห็นแผนของทุกบริษัทประกัน จัดทำ commission logic ครอบคลุมทั้ง Tier Bonus, การควบคุมงบผ่อนชำระ, ระบบผ่อนแบบไม่หักค่าคอม และเงื่อนไขการชำระเงินหลายรูปแบบ",
          "UI/UX และ Notifications: นำการออกแบบใหม่ของหน้าจอหลัก (Profile, Premium Check, Level-Up, Plan Comparison, Payment) พร้อม visualization layer แบบ cached — หน้าโปรไฟล์ที่ยกเครื่องใหม่แสดงค่าแนะนำ/ผลตอบแทน สถานะจ่ายแล้ว/รอจ่าย และกราฟยอดสะสม เพิ่มการเลือกรถด้วยรูปภาพและคูปองลดราคาอัตโนมัติ และสร้าง notification pipeline แบบครบวงจรครอบคลุมการแจ้งเตือนต่ออายุ, แจ้งเตือนใบอนุญาตหมดอายุ, badge counts, filters และ mark-as-read",
          "ความน่าเชื่อถือและงานสนับสนุน: ก้าวขึ้นเป็นรักษาการ tech lead ในช่วงที่ senior ไม่อยู่ — ดูแลการส่งมอบและตัดสินใจด้าน architecture ได้ด้วยตัวเอง แก้ปัญหา production ที่วิกฤต (Android crash, บั๊ก random-state) โดยกระทบลูกค้าน้อยที่สุด และปัจจุบันไล่หาต้นเหตุเชิงระบบของปัญหาการชำระเงินที่เกิดซ้ำ แทนการแก้ทีละเคส โดยตั้งเป้าให้ปัญหาไม่กลับมาอีก ไม่ใช่แค่ปิดเคส",
          "ริเริ่มด้วยตัวเอง: สร้างแอปฟังเพลงร่วมกันแบบ real-time ในเวลาส่วนตัวหลังจากสังเกตว่าทีมยังไม่มีวิธีแชร์เพลงในออฟฟิศที่ดี — พร้อม SoundPad และ text-to-speech ให้ทีมส่งมีมและ sound effect ได้ระหว่างการฟัง ช่วยเสริมบรรยากาศทีมและทำให้สมาชิกใหม่ปรับตัวได้อย่างเป็นธรรมชาติตั้งแต่วันแรก"
        ]
      },
      {
        role: "Software Developer",
        company: "Customix Co., Ltd.",
        companyLogo: "customixLogo.png",
        link: "https://www.customix.co/",
        date: "April 2021 – May 2023",
        descBullets: [
          "การพัฒนา Full-Stack: สร้างแอป web และ mobile สำหรับแพลตฟอร์มระดับองค์กรด้วย React, React Native, Node.js และ Go",
          "UI Component Library: ออกแบบ component library ที่นำกลับมาใช้ซ้ำได้ ช่วยเพิ่มความเร็วในการพัฒนา 20% และรักษาความสอดคล้องของดีไซน์ข้ามแพลตฟอร์ม",
          "API และการทำงานร่วมกัน: ปรับปรุงการเชื่อมต่อ RESTful API และทำงานร่วมกับ designer และ PM อย่างใกล้ชิดเพื่อส่งมอบฟีเจอร์ที่ซับซ้อนตามกำหนด"
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
    headingPre: "ทำงานร่วมกับ",
    headingEm: "AI",
    headline: "ผมไม่ได้แค่ใช้ AI — ผมบริหาร AI ทั้งกองทัพ",
    intro: `ในการ rewrite insurance-backend จริง (178 legacy repos → 18 services) ผมควบคุม
      หลายโมเดล, custom agent ที่สร้างขึ้นเอง, การทำ orchestration แบบขนาน และ governance —
      กำกับดูแลทั้งกองทัพ ไม่ใช่แค่การ prompt ทุกข้อความด้านล่างสามารถตรวจสอบได้จาก git history และเครื่องมือใน repo`,
    modelsLabel: "โมเดลในกองทัพ",
    ladderLabel: "บันไดความสามารถ",
    rarerLabel: "หายาก / ยากขึ้น ↑",
    stats: [
      {value: "8", label: "AI models ที่ orchestrate"},
      {value: "10", label: "Custom subagents ที่สร้างเอง"},
      {value: "12", label: "เทคนิค AI ที่ใช้ใน production"},
      {value: "79", label: "AI-governance ADRs"},
      {value: "178→18", label: "Legacy repos → services"},
      {value: "60–75%", label: "ลดต้นทุน LLM token"}
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
        note: "หายากในตลาด",
        title: "ระบบที่ engineer ส่วนใหญ่ไม่เคยสร้าง",
        items: [
          {
            name: "การ orchestrate กองทัพหลายโมเดล",
            desc: "กำกับ Claude + OpenAI Codex + Multica ให้เป็นกองทัพเดียว จัดสรรงานตามจุดแข็งของแต่ละงาน — สนับสนุนด้วย PoC benchmark แบบ head-to-head ที่มีเอกสารประกอบ"
          },
          {
            name: "การส่งมอบแบบ autonomous agentic",
            desc: "Multica รับงานตั้งแต่ build → test → review → merge request ได้ด้วยตัวเอง ผมกำหนด contract และคุมคุณภาพ ส่วน agent ปิด loop ให้จบ"
          },
          {
            name: "AI governance ในสเกลใหญ่",
            desc: "Architecture Decision Records 79 ฉบับ + การบังคับใช้ผ่าน git-hook ช่วยให้ระบบที่สร้างด้วย AI ตรวจสอบย้อนหลังได้เต็มที่และเป็นไปตามมาตรฐาน"
          },
          {
            name: "วิศวกรรมด้าน token-efficiency",
            desc: "Custom caveman / pordee skills ช่วยลดค่าใช้จ่าย LLM ลง 60–75% โดยไม่สูญเสียความถูกต้องทางเทคนิค — มองการ optimize ต้นทุนเป็นศาสตร์ทางวิศวกรรม"
          }
        ]
      },
      {
        rank: "advanced",
        tag: "Beyond Standard Full-Stack",
        note: "มี dev น้อยคนที่ทำ",
        title: "สร้างเครื่องมือเอง ไม่ใช่แค่ใช้",
        items: [
          {
            name: "Custom subagents (10)",
            desc: "บทบาท AI ที่สร้างขึ้นเฉพาะทางครอบคลุมทั้ง SDLC — code-archaeologist, architect, planner, builder, tester, reviewer, dispatcher"
          },
          {
            name: "Custom skills (6)",
            desc: "Playbook ที่นำกลับมาใช้ซ้ำได้ ซึ่งสอนให้ AI ทำงานเฉพาะทางตามมาตรฐานเดิมได้อย่างสม่ำเสมอ"
          },
          {
            name: "การ fan-out agent แบบขนาน",
            desc: "รัน agent หลายตัวพร้อมกันเพื่อ migrate 18 services และขุดข้อมูลจาก 178 repos — ทำงานต่อได้แม้ session หรือ network หลุด"
          },
          {
            name: "Multi-agent workflows",
            desc: "Pipeline แบบ fan-out → verify → synthesize ที่คาดเดาผลได้ แทนการ prompt แบบครั้งเดียวจบ"
          }
        ]
      },
      {
        rank: "baseline",
        tag: "2026 Industry Baseline",
        note: "สิ่งที่ทีมคาดหวังในตอนนี้",
        title: "การส่งมอบงานประจำวันแบบ AI-native",
        items: [
          {
            name: "วินัย TDD ที่ทำคู่กับ AI",
            desc: "บังคับใช้ loop แบบ failing-test-first กับโค้ดที่ AI เขียน — test ถูกส่งมอบเป็นหลักฐาน ไม่มีอะไรผ่านโดยไม่ตรวจสอบ"
          },
          {
            name: "การเชื่อมต่อเครื่องมือด้วย MCP",
            desc: "เชื่อม AI เข้ากับ GitLab, Notion และ Canva — ทำงานร่วมกับเครื่องมือจริงของทีม ไม่ใช่ sandbox"
          },
          {
            name: "การเลือกโมเดลอย่างมีเป้าหมาย",
            desc: "เลือกโมเดลที่เหมาะกับแต่ละงาน — จัดสรรงานโดยคำนึงถึงต้นทุน ไม่ใช่ใช้โมเดลที่แพงที่สุดทุกครั้ง"
          },
          {
            name: "AI-generated artifacts",
            desc: "แปลงข้อมูลดิบจาก repo ให้เป็นหน้าแสดง metric และ presentation แบบ self-contained ได้ตามต้องการ"
          }
        ]
      }
    ]
  },

  projects: {
    eyebrow: "Freelance Projects",
    headingPre: "ผลงาน",
    headingEm: "ที่คัดสรร",
    subtitle: "บางผลงานที่ผมมีส่วนร่วม",
    items: [
      {
        image: "forumLogo.png",
        projectName: "ระบบกระทู้ถามตอบสำนักเลขาธิการนายกรัฐมนตรี",
        descBullets: [
          "Role: นักพัฒนา Frontend",
          "Tech: React.js, Ant Design",
          "พัฒนาระบบติดตามกระทู้ถามในรัฐสภา เพิ่มความโปร่งใสให้สำนักเลขาธิการนายกรัฐมนตรี"
        ]
      },
      {
        image: "chatBroadcastLogo.png",
        projectName: "ระบบ Broadcast แชท Line OA และ Facebook",
        descBullets: [
          "Role: นักพัฒนา Frontend",
          "Tech: React.js, Next.js, Material UI",
          "สร้างและปรับปรุง user interface สำหรับเครื่องมือ broadcast ที่ช่วยให้สื่อสารผ่าน Line OA และ Facebook ได้อย่างมีประสิทธิภาพ"
        ]
      },
      {
        image: "kpiLogo.png",
        projectName: "KPI Platform Open API",
        descBullets: [
          "Role: นักพัฒนา Backend",
          "Tech: Golang, MongoDB",
          "พัฒนาและดูแล backend สำหรับแพลตฟอร์ม KPI พร้อมการเชื่อมต่อ open API ที่ราบรื่น"
        ]
      }
    ]
  },

  contact: {
    eyebrow: "ติดต่อได้เลย",
    headingPre: "มีไอเดียอยากลงมือ",
    headingEm: "สร้าง?",
    subtitle:
      "อยากพูดคุยเรื่องโปรเจกต์ หรือแค่มาทักทาย? กล่องข้อความของผมเปิดรับทุกคน",
    emailBtn: "ส่งอีเมลถึงผม",
    email: "sudjairak.c@gmail.com",
    phone: "085-399-7206"
  },

  footer: {
    role: "Senior Full-Stack Developer สาย AI · ประเทศไทย",
    projectHub: "สำรวจ project hub ทั้งหมด",
    copyright: `© ${getYear()} Chaichana Sudjairak. Built with Astro & Tailwind.`
  }
};
