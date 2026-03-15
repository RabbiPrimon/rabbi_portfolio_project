# MD Rabbi Islam - Backend Engineer Portfolio

A production-ready, full-stack portfolio built with **Next.js 14**.

This project is designed to:
- showcase your curated best projects,
- automatically pull additional projects from GitHub,
- present your backend engineering profile in a modern, responsive UI.

Manual projects are kept first. GitHub auto-synced projects are appended after them.

---

## 1) Tech Stack

### Frontend
- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Reusable UI components (shadcn-style architecture)
- Lucide React icons
- MDX blog rendering

### Backend
- Next.js API Routes (`/api/*`)
- Prisma ORM
- PostgreSQL
- GitHub API integration
- Optional LinkedIn feed integration
- Optional Resend email integration for contact form

### Deployment / Tooling
- Vercel-ready
- Docker + Docker Compose
- ESLint

---

## 2) Core Features

- Responsive, premium portfolio layout
- Light/Dark theme
- Terminal-style hero section
- Skills architecture section
- Experience timeline
- Featured Projects section with filters
- Backend architecture diagrams
- Open Source section synced from GitHub
- MDX technical blog
- Certifications, education, leadership, volunteering
- Contact form with DB persistence
- Command palette (`Ctrl/Cmd + K`)

---

## 3) How Project Data Works

### Manual curated projects
You manage these in:
- `src/lib/site-data.ts` -> `projects` array

These projects are always shown first in **Featured Projects**.

### GitHub auto-sync projects
Then the app fetches latest repos from:
- `/api/github`
- source logic: `src/lib/github.ts`

Auto-synced repositories are converted into project cards and appended after manual projects.

### Important default behavior
GitHub project sync is now **enabled by default**.

- Enabled by default: when `NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC` is missing
- Explicitly disable only if needed:
  - `NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC="false"`

---

## 4) Project Structure (Important Files)

```txt
backend-engineer-portfolio/
|- content/blog/                    # MDX blog posts
|- prisma/schema.prisma             # DB schema
|- public/images/                   # Static images (profile etc.)
|- src/
|  |- app/
|  |  |- api/contact/route.ts       # Contact form API
|  |  |- api/github/route.ts        # GitHub API proxy
|  |  |- api/linkedin/route.ts      # LinkedIn feed API (optional)
|  |  |- blog/[slug]/page.tsx       # Single blog post page
|  |  |- blog/page.tsx              # Blog listing
|  |  |- page.tsx                   # Homepage
|  |- components/
|  |  |- project-showcase.tsx       # Manual + auto GitHub project merge
|  |  |- github-section.tsx         # Open-source repos section
|  |  |- linkedin-feed.tsx          # Optional LinkedIn feed UI
|  |- lib/
|  |  |- site-data.ts               # Personal data + manual projects
|  |  |- github.ts                  # GitHub fetch logic
|  |  |- linkedin.ts                # LinkedIn feed parser
|- .env.example                     # Environment template
|- README.md
```

---

## 5) Beginner Setup (Step by Step)

## 5.1 Prerequisites
Install these first:
- Node.js 18+ (recommended Node 20 LTS)
- npm
- PostgreSQL (local or cloud)

Check versions:

```bash
node -v
npm -v
```

## 5.2 Install dependencies
From `backend-engineer-portfolio` folder:

```bash
npm install
```

## 5.3 Create environment file
PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Or CMD:

```cmd
copy .env.example .env.local
```

## 5.4 Configure `.env.local`
At minimum, set your DB URL:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/backend_portfolio"
```

GitHub sync is already enabled by default, but you can keep this explicit:

```env
NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC="true"
```

## 5.5 Setup Prisma

```bash
npm run db:generate
npm run db:push
```

## 5.6 Run development server

```bash
npm run dev
```

Open:
- `http://localhost:3000`

---

## 6) Environment Variables (Reference)

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `GITHUB_TOKEN` | Optional | Higher GitHub API rate limits |
| `NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC` | Optional | Default on; set `false` to disable auto-sync |
| `NEXT_PUBLIC_ENABLE_LINKEDIN_FEED` | Optional | `true` to show LinkedIn feed section |
| `LINKEDIN_FEED_URL` | Optional | RSS/JSON feed endpoint for LinkedIn posts |
| `RESEND_API_KEY` | Optional | Enable contact email sending |
| `CONTACT_FROM_EMAIL` | Optional | Sender address for Resend |
| `CONTACT_TO_EMAIL` | Optional | Receiver email |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Analytics |

---

## 7) How to Update Content

## 7.1 Edit profile, skills, experience, manual projects
File:
- `src/lib/site-data.ts`

Update:
- `profile`
- `skillGroups`
- `experiences`
- `projects` (manual curated projects)

## 7.2 Add blog posts
Create `.mdx` files in:
- `content/blog/`

Each post should include frontmatter (`title`, `description`, `date`, `tags`).

## 7.3 Replace profile image
Place image at:
- `public/images/profile.jpg`

---

## 8) Manual + Auto Project Strategy (Recommended)

Best practice for recruiters:
- Keep 3-5 hand-crafted flagship projects in `site-data.ts`
- Let GitHub auto-sync append recent repositories automatically

This gives both:
- quality control (manual curated), and
- freshness (automatic updates from your GitHub activity)

---

## 9) Deployment

## 9.1 Vercel
1. Push project to GitHub
2. Import in Vercel
3. Add environment variables from section 6
4. Deploy

## 9.2 Docker

```bash
docker compose up --build
```

- App: `http://localhost:3000`
- PostgreSQL: `localhost:5432`

---

## 10) Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run db:generate
npm run db:push
npm run db:migrate
npm run db:studio
```

---

## 11) Troubleshooting

### GitHub projects not appearing
- Check internet connection
- Add `GITHUB_TOKEN` to avoid API rate limits
- Confirm username in `src/app/api/github/route.ts` (`RabbiPrimon`)
- Make sure `NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC` is not `false`

### Build works but style looks old
- Hard refresh browser (`Ctrl + F5`)
- Restart dev server

### DB errors in contact form
- Ensure PostgreSQL is running
- Verify `DATABASE_URL`
- Run `npm run db:generate` and `npm run db:push`

---

## 12) Notes

- This is a full-stack Next.js portfolio (frontend + backend in one project).
- GitHub project sync is configured to be always on by default.
- Manual projects are never removed by sync and remain at the top.
- LinkedIn feed is optional and requires a valid feed URL.
