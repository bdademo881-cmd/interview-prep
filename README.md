# Interview Prep - Data Science Interview Questions

A modern, responsive web app for practicing data science and analytics interview questions. Built with **Next.js 14**, **React**, and **Tailwind CSS**.

## Features

- 📋 **12 curated interview questions** across SQL, Experiment Design, and Product Analytics
- 🔍 **Search & filter** by title, category, and difficulty
- 📖 **Structured answers** with Approach + Conclusion format
- 🤖 **AI explanations** (click to reveal)
- 📱 **Fully responsive** design
- ⚡ **Zero-config Vercel deployment**

## Tech Stack

| Tech | Version |
|------|---------|
| Next.js | 14.2.3 |
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
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Deploy to Vercel

### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/interview-prep)

### Option B: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (interactive)
vercel

# Deploy to production
vercel --prod
```

### Option C: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

No configuration needed. Environment variables, build commands, and routing are all handled automatically.

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

---

Built with ❤️ using Next.js and Tailwind CSS.
