# SkillSphere

SkillSphere is a modern online learning platform built with Next.js App Router. It helps learners explore expert-led courses, access protected lesson details after login, and manage their profile in a polished responsive interface.

## Purpose

This project was created as a professional online learning platform where users can:

- Explore skill-based courses
- View protected course details after authentication
- Register, login, and sign in with Google
- Manage profile information with Better Auth

## Live URL

Add your deployed URL here after publishing:

- `https://your-skill-sphere-app.vercel.app`

## Key Features

- Responsive layout for mobile, tablet, and desktop
- Persistent navbar and footer across App Router pages
- Hero section, popular courses, trending courses, learning tips, and top instructors
- Course search by title on the All Courses page
- Protected course details route with login redirect and return flow
- Better Auth email/password authentication
- Google social login support
- My Profile page with update information flow using `updateUser`
- Toast notifications for auth and profile actions
- Loading states and custom not-found page
- Environment variable support for secure configuration

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- DaisyUI
- Better Auth
- better-sqlite3
- Sonner
- Animate.css

## npm Packages Used

- `better-auth`
- `better-sqlite3`
- `daisyui`
- `sonner`
- `animate.css`
- `clsx`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and fill in your values:

```bash
cp .env.example .env
```

3. Run the Better Auth migration:

```bash
npm run auth:migrate
```

4. Start the development server:

```bash
npm run dev
```

## Google Auth Notes

- Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- Set `BETTER_AUTH_URL` to your local or deployed domain
- In Google Cloud Console, add:
  - `http://localhost:3000/api/auth/callback/google`
  - `https://your-domain.com/api/auth/callback/google`

## Deployment Notes

- Vercel is a good fit for this App Router project
- Add all environment variables in your hosting dashboard
- Set `BETTER_AUTH_URL` to your production domain
- Run the Better Auth migration before or during deployment setup
