# Oleh Sunytsia — Portfolio

Personal portfolio website built with **Angular 13**, showcasing professional experience, featured projects, and contact information.

**Live:** [benatti-dev.github.io/portfolio](https://benatti-dev.github.io/portfolio) *(update with your URL)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 13 |
| Styling | SCSS, Bootstrap 4, Font Awesome |
| Animations | AOS (Animate On Scroll), ng2-animate-on-scroll |
| Carousel | ngx-owl-carousel-o |
| i18n | @ngx-translate |
| Analytics | ngx-google-analytics (GA4) |
| PWA | Angular Service Worker |
| Deploy | angular-cli-ghpages |

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── general/        # Header, Footer, Background
│   │   └── home/           # Banner, About, Experience, Projects, Contact
│   └── services/
│       ├── analytics/      # Google Analytics wrapper
│       ├── ipservice/      # Visitor IP detection
│       └── language/       # Language switching
├── assets/
│   ├── i18n/en.json        # All content (text, links, projects)
│   ├── images/
│   └── cv/                 # Resume PDF
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

---

## Getting Started

### Prerequisites

- Node.js 14+
- Angular CLI 13

```bash
npm install -g @angular/cli@13
```

### Install & Run

```bash
npm install
npm start
```

App runs at `http://localhost:4200`

---

## Configuration

### 1. Google Analytics

In `src/environments/environment.ts` and `environment.prod.ts`:

```typescript
export const environment = {
  production: false,
  trackAnalyticID: "G-XXXXXXXXXX"  // your GA4 Measurement ID
};
```

### 2. Content

All website content (name, bio, experience, projects, links) is in:

```
src/assets/i18n/en.json
```

Key sections to update:

| Key | What it controls |
|---|---|
| `Banner.*` | Hero section — name, description |
| `AboutMe.*` | About section paragraphs |
| `Experience.Jobs` | Work experience tabs |
| `FeatureProjects.Projects` | Featured projects with images |
| `OtherProjects.Projects` | More projects grid |
| `Header.cvName` | CV filename in `assets/cv/` |

### 3. Social Links

In `src/app/components/general/footer/footer.component.html`:

```html
href="https://github.com/YOUR_USERNAME"
href="https://www.linkedin.com/in/YOUR_PROFILE/"
href="mailto:YOUR_EMAIL"
```

---

## Build & Deploy

### Build for production

```bash
npm run build
```

Output goes to `dist/portfolio/`

### Deploy to GitHub Pages

```bash
npm run deploy
```

Requires a GitHub repository named `portfolio` and `angular-cli-ghpages` (already included).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Dev server on localhost:4200 |
| `npm run build` | Production build |
| `npm test` | Run unit tests (Karma + Jasmine) |
| `npm run lint` | Run TSLint |
| `npm run deploy` | Build + deploy to GitHub Pages |

---

## Adding a New Project

In `src/assets/i18n/en.json`, add an entry to `FeatureProjects.Projects`:

```json
{
  "Title": "My Project",
  "Description": "Short description with <span class='underline'>highlights</span>.",
  "imgs": ["assets/images/my-project.webp"],
  "ghLink": "https://github.com/your-username/repo",
  "demoLink": "https://your-demo.com",
  "Technologies": ["Angular", "Java", "Spring Boot"]
}
```

---

## License

MIT — feel free to use this as a template for your own portfolio.
