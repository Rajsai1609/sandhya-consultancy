# Sandhya IT Consulting

Corporate website and admin portal for Sandhya IT Consulting — an IT staffing, services, and training company.

## Project Overview

Full-stack Next.js application featuring:
- **Public site** — Home, Services, Staffing, Careers, Academy, Products, Contact
- **Admin portal** — Job management, application tracking, dashboard (HTTP Basic Auth protected)
- **Job board** — Dynamic listings, per-job application forms with resume upload
- **Contact system** — Contact form with email notifications

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Database | PostgreSQL (via Docker locally) |
| ORM | Prisma 7 with `@prisma/adapter-pg` |
| Styling | Tailwind CSS |
| Email | Nodemailer (SMTP) |
| File storage | Local filesystem (`/public/uploads`) |
| Deployment | Vercel |

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-org/sandhyaitconsulting.git
cd sandhyaitconsulting

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Edit .env.local and fill in all required values

# 4. Start PostgreSQL via Docker
docker compose up -d

# 5. Run database migrations
npx prisma migrate dev

# 6. (Optional) Seed initial data
npx prisma db seed

# 7. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Admin portal is at [http://localhost:3000/admin](http://localhost:3000/admin).

## Environment Variables

Create a `.env.local` file at the project root with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/sandhyait` |
| `ADMIN_USERNAME` | HTTP Basic Auth username for `/admin` | `admin` |
| `ADMIN_PASSWORD` | HTTP Basic Auth password for `/admin` | `your-strong-password` |
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username / sender address | `noreply@sandhyait.com` |
| `SMTP_PASS` | SMTP password or app password | `app-specific-password` |
| `SMTP_FROM` | Display name + address for outgoing mail | `Sandhya IT <noreply@sandhyait.com>` |
| `CONTACT_EMAIL` | Inbox that receives contact form submissions | `info@sandhyait.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL (no trailing slash) | `https://sandhyaitconsulting.com` |
| `UPLOAD_DIR` | Server path for resume uploads | `./public/uploads` |

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add all environment variables from the table above in the Vercel dashboard under **Settings → Environment Variables**.
4. Set the **Production** branch to `main`.
5. Vercel will run `npm run build` automatically on each push.

> **Database**: Provision a managed PostgreSQL instance (e.g., Vercel Postgres, Supabase, Neon) and update `DATABASE_URL` accordingly. Run `npx prisma migrate deploy` as a post-build or release command.

## Admin Access

The admin portal at `/admin` is protected by HTTP Basic Auth (configured via `ADMIN_USERNAME` / `ADMIN_PASSWORD`).

| Page | URL | Description |
|------|-----|-------------|
| Dashboard | `/admin` | Stats overview + recent applications |
| Jobs list | `/admin/jobs` | All jobs with status badges |
| New job | `/admin/jobs/new` | Create a job posting |
| Edit job | `/admin/jobs/[id]/edit` | Edit an existing job |
| Applications | `/admin/applications` | All applications, filterable by stage |
| Application detail | `/admin/applications/[id]` | View applicant info, update stage, add notes |

Application stages: **new → reviewing → shortlisted → rejected / hired**
