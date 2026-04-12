# Portfolio — Chaichana Sudjairak

Portfolio ส่วนตัว สร้างด้วย **Astro 5** + **Tailwind CSS v4**

🌐 **Live:** https://sudjairakc.github.io/portfolio

---

## Stack

| Layer | เทคโนโลยี |
|---|---|
| Framework | Astro 5 (static site, islands architecture) |
| Styling | Tailwind CSS v4 (CSS-first, ไม่มี config file) |
| Animations | lottie-web (vanilla JS) |
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

### เพิ่ม Lottie Animation

วางไฟล์ `.json` ใน `public/lottie/` แล้วใช้ใน component:

```astro
<LottiePlayer src="lottie/myAnimation.json" class="w-64 h-64" />
```

---

## โครงสร้างโปรเจ็ค

```
src/
  data/
    portfolio.ts          ← แก้ข้อมูลส่วนตัวที่นี่
  components/
    Header.astro
    Footer.astro
    SplashScreen.astro
    LottiePlayer.astro
    ThemeToggle.astro
    SocialMedia.astro
    sections/
      Greeting.astro
      Skills.astro
      Education.astro
      WorkExperience.astro
      Projects.astro
      Contact.astro
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  images/                 ← Logo และรูปภาพ
  lottie/                 ← Lottie JSON files
```

---

## Dark Mode

- Toggle ที่ navbar (☀️/🌙)
- บันทึกใน `localStorage`
- ไม่มี flash of wrong theme (อ่าน localStorage ก่อน paint)

---

## Scripts

```bash
npm run dev          # รัน dev server
npm run build        # Build → dist/
npm run preview      # Preview dist/ แบบ local
npm run format       # Format code ด้วย Prettier
npm run check-format # ตรวจ format
```

---

## Deploy

Push ไปที่ branch `master` → GitHub Actions จะ build และ deploy ให้อัตโนมัติ

ดู workflow ได้ที่ [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

### GitHub Pages Settings

ใน repo **Settings → Pages → Build and deployment** ต้องตั้งค่าดังนี้:

- **Source:** `Deploy from a branch`
- **Branch:** `gh-pages` / `/ (root)`

> ⚠️ ห้ามเลือก "GitHub Actions" เพราะจะทำให้ Jekyll พยายาม build source code และ error
> Workflow `deploy.yml` จะ push built files ไปที่ `gh-pages` branch เอง

### Formatting

รัน `npm run format` ก่อน commit ทุกครั้งที่แก้ไข `.astro`, `.ts`, หรือ `.css`

---

## License

[MIT](LICENSE)
