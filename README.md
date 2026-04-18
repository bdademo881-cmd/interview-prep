# DataPrep - Data Interview Practice Platform

A modern, responsive web app for practicing data science and analytics interview questions. Built with **Next.js 16**, **React**, and **Tailwind CSS**.

## Features

- 📋 **12 curated interview questions** across SQL, Experiment Design, and Product Analytics
- 🔍 **Search & filter** by title, category, and difficulty
- 📖 **Structured answers** with Approach + Conclusion format
- 🤖 **AI explanations** (click to reveal)
- 📱 **Fully responsive** design
- ⚡ **Automatic GitHub CI/CD** with Vercel

## Tech Stack

| Tech | Version |
|------|---------|
| Next.js | 16.2.4 |
| React | ^18 |
| Tailwind CSS | ^3.3.0 |
| TypeScript | ^5 |

## Project Structure

```
interview-prep/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (/)
│   ├── globals.css          # Global styles + Tailwind
│   └── questions/
│       ├── page.tsx         # Questions list (/questions)
│       └── [id]/
│           └── page.tsx     # Question detail (/questions/[id])
├── data/
│   └── questions.json       # All mock data (import-based)
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy with Vercel + GitHub

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import **bdademo881-cmd/interview-prep**
4. Vercel auto-detects Next.js — click **Deploy**

Every push to the `master` branch triggers an automatic production deployment.

## Adding New Questions

Edit `data/questions.json`. Each question follows this schema:

```json
{
  "id": "13",
  "title": "Your question title",
  "category": "SQL",
  "difficulty": "easy",
  "tags": ["Tag1", "Tag2"],
  "question": "Full question text...",
  "answer": {
    "approach": "How to approach this...",
    "conclusion": "Key takeaway..."
  },
  "aiExplanation": "Deep dive from AI perspective..."
}
```

**Valid categories:** `SQL` | `Experiment` | `Product`
**Valid difficulties:** `easy` | `medium` | `hard`

## Future Extensions

- Replace `import` with API routes (`/app/api/questions/route.ts`)
- Add a database (Supabase, PlanetScale, etc.)
- Add user auth and progress tracking
- Add a shuffle/practice mode
- Add a dark mode
