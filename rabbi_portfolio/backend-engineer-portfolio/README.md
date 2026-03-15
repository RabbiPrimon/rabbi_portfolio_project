# Senior Backend Engineer Portfolio

Production-grade portfolio for **MD Rabbi Islam** built with:

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- ShadCN-style reusable UI components
- MDX Blog
- Prisma + PostgreSQL
- Vercel-ready deployment

## Highlights

- Terminal-style hero section
- Interactive backend skill architecture map
- Animated vertical experience timeline
- Project showcase cards with architecture and filtering
- Optional GitHub auto-sync into Featured Projects
- System design showcase diagrams
- GitHub API-powered open source section
- Optional LinkedIn post feed section
- MDX blog with syntax highlighting
- Certifications, education, leadership, volunteering sections
- Contact form API with Prisma persistence and optional Resend email
- Command palette navigation (`Ctrl/Cmd + K`)
- Dark/light theme support

## Project Structure

```txt
backend-engineer-portfolio/
├─ content/
│  └─ blog/
├─ prisma/
│  └─ schema.prisma
├─ public/
│  └─ images/
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  ├─ contact/route.ts
│  │  │  └─ github/route.ts
│  │  │  └─ linkedin/route.ts
│  │  ├─ architecture/page.tsx
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx
│  │  ├─ experience/page.tsx
│  │  ├─ projects/page.tsx
│  │  ├─ skills/page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ ui/
│  │  ├─ about-section.tsx
│  │  ├─ backend-architecture.tsx
│  │  ├─ blog-preview.tsx
│  │  ├─ command-menu.tsx
│  │  ├─ contact-section.tsx
│  │  ├─ experience-timeline.tsx
│  │  ├─ github-section.tsx
│  │  ├─ hero-terminal.tsx
│  │  ├─ linkedin-feed.tsx
│  │  ├─ metrics-strip.tsx
│  │  ├─ professional-highlights.tsx
│  │  ├─ project-showcase.tsx
│  │  ├─ section-heading.tsx
│  │  ├─ site-footer.tsx
│  │  ├─ site-header.tsx
│  │  ├─ skills-architecture.tsx
│  │  ├─ theme-provider.tsx
│  │  └─ theme-toggle.tsx
│  └─ lib/
│     ├─ github.ts
│     ├─ linkedin.ts
│     ├─ mdx.ts
│     ├─ prisma.ts
│     ├─ site-data.ts
│     └─ utils.ts
├─ .env.example
├─ Dockerfile
├─ docker-compose.yml
├─ next.config.mjs
├─ tailwind.config.ts
└─ package.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env.local
```

3. Set PostgreSQL `DATABASE_URL` in `.env.local`.

4. Generate Prisma client and push schema:

```bash
npm run db:generate
npm run db:push
```

5. Start dev server:

```bash
npm run dev
```

## Prisma Database Notes

`ContactMessage` model stores contact form submissions.

For migrations in development:

```bash
npm run db:migrate
```

## Vercel Deployment

1. Push this folder to GitHub.
2. Import project in Vercel.
3. Set environment variables:
   - `DATABASE_URL`
   - `RESEND_API_KEY` (optional)
   - `CONTACT_FROM_EMAIL` (optional)
   - `CONTACT_TO_EMAIL` (optional)
   - `GITHUB_TOKEN` (optional)
   - `NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC` (optional, `true`/`false`)
   - `NEXT_PUBLIC_ENABLE_LINKEDIN_FEED` (optional, `true`/`false`)
   - `LINKEDIN_FEED_URL` (optional, RSS/JSON feed URL)
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
4. Deploy.

## Docker Deployment

```bash
docker compose up --build
```

This runs:

- PostgreSQL on `localhost:5432`
- Portfolio app on `localhost:3000`

## Commands

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

## Notes

- GitHub section is auto-synced from public GitHub API.
- Featured Projects can optionally auto-import extra repositories from GitHub when `NEXT_PUBLIC_ENABLE_GITHUB_PROJECT_SYNC=true`.
- LinkedIn feed section is optional and only appears when `NEXT_PUBLIC_ENABLE_LINKEDIN_FEED=true` and `LINKEDIN_FEED_URL` is configured.
- Contact form persists to PostgreSQL and can optionally forward email via Resend.
- Blog is powered by MDX files in `content/blog`.
