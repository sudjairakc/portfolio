# Portfolio — Chaichana Sudjairak

Portfolio ส่วนตัว สไตล์ **glassmorphism / Apple-like** สร้างด้วย **Astro 5** + **Tailwind CSS v4**
(ใช้ design system เดียวกับ project hub ที่ [sudjairakc.github.io](https://sudjairakc.github.io))

🌐 **Live:** https://sudjairakc.github.io/portfolio

---

## Stack

| Layer | เทคโนโลยี |
|---|---|
| Framework | Astro 5 (static site, islands architecture) |
| Styling | Tailwind CSS v4 (CSS-first, ไม่มี config file) |
| Motion | Pure CSS + IntersectionObserver (scroll reveal, float, blob) — ไม่มี dep หนัก |
| Icons | Font Awesome 6 + Devicon via CDN |
| Language | TypeScript |
| Deploy | GitHub Actions → GitHub Pages |

---

## เริ่มต้นใช้งาน

ต้องการ Node.js 20+ และ npm

```bash
# Clone
git clone https://github.com/sudjairakc/portfolio.git
cd portfolio

# ติดตั้ง dependencies
npm install

# รัน dev server
npm run dev
# เปิด http://localhost:4321/portfolio/
```

---

## แก้ไขข้อมูล

ข้อมูลทั้งหมดอยู่ในไฟล์เดียว:

```
src/data/portfolio.ts
```

แก้ไขไฟล์นี้เพื่ออัปเดต greeting, social links, skills, education, work experience, และ projects

### เพิ่มรูปภาพ

วางไฟล์รูปใน `public/images/` แล้วอ้างอิงด้วย filename ใน `portfolio.ts`

```ts
companyLogo: "myCompanyLogo.png"
```

component จะ resolve path ให้เป็น `${BASE_URL}images/<filename>` เอง

---

## Design System

UI ทั้งหมดคุมด้วย design token / component classes ใน `src/styles/global.css`:

| Class | ใช้ทำอะไร |
|---|---|
| `.glass` | frosted glass card (พื้นฐานของทุก card) |
| `.pill` | chip เล็ก (skills, tags) |
| `.btn-primary` / `.btn-gradient` / `.btn-ghost` | ปุ่ม |
| `.gradient-text` | ข้อความ gradient เน้นคำสำคัญ |
| `.eyebrow` | label ตัวเล็กเหนือหัวข้อ |
| `.section` | container กลาง max-width + padding |
| `.reveal` / `.reveal-left` / `.reveal-right` | fade-in ตอน scroll (Layout เติม `.is-visible`) |
| `.blob` / `.float-slow` / `.float-slower` | motion เบา ๆ |

ทุก class รองรับ light/dark และเคารพ `prefers-reduced-motion`

---

## โครงสร้างโปรเจ็ค

```
src/
  data/
    portfolio.ts          ← แก้ข้อมูลส่วนตัวที่นี่
  components/
    Navbar.astro          ← glass sticky navbar + theme toggle
    Hero.astro            ← hero + floating profile card
    Footer.astro
    sections/
      Skills.astro
      Education.astro
      WorkExperience.astro
      Projects.astro
      Contact.astro
  layouts/
    Layout.astro          ← <head>, SEO/OG, fonts, theme + scroll-reveal scripts
  pages/
    index.astro
  styles/
    global.css            ← design tokens + component classes
public/
  images/                 ← Logo และรูปภาพ
```

---

## Dark Mode

- Toggle ที่ navbar (☀️/🌙)
- บันทึกใน `localStorage` (key `isDark`)
- ไม่มี flash of wrong theme (อ่าน localStorage ก่อน paint)

---

## Scripts

```bash
npm run dev          # รัน dev server
npm run build        # Build → dist/
npm run preview      # Preview dist/ แบบ local
npm run format       # Format code ด้วย Prettier
npm run check-format # ตรวจ format (CI ใช้ตัวนี้)
```

---

## Deploy

Push ไปที่ branch `master` → GitHub Actions build และ deploy ให้อัตโนมัติ

ดู workflow ได้ที่ [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

### GitHub Pages Settings

ใน repo **Settings → Pages → Build and deployment** ตั้งค่า:

- **Source:** `GitHub Actions`

> ตั้งครั้งเดียว หลังจากนั้นทุก push บน `master` จะ build ด้วย Astro แล้ว deploy
> ผ่าน `actions/deploy-pages` โดยตรง (ไม่ใช้ `gh-pages` branch แล้ว)

### Formatting

รัน `npm run format` ก่อน commit ทุกครั้งที่แก้ไข `.astro`, `.ts`, หรือ `.css`
(CI จะ fail ถ้า `check-format` ไม่ผ่าน)

---

## License

[MIT](LICENSE)
