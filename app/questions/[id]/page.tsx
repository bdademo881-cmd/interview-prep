'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import questionsData from '@/data/questions.json'

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'SQL' | 'Experiment' | 'Product'

interface Answer {
  approach: string
  conclusion: string
}

interface Question {
  id: string
  title: string
  category: Category
  difficulty: Difficulty
  tags: string[]
  question: string
  answer: Answer
  aiExplanation: string
}

const questions: Question[] = questionsData as Question[]

export default function QuestionDetailPage() {
  const params = useParams()
  const [showAI, setShowAI] = useState(false)
  const [mounted, setMounted] = useState(false)

  const id = typeof params.id === 'string' ? params.id : ''
  const question = questions.find((q) => q.id === id)

  useEffect(() => {
    setMounted(true)
    if (question) {
      console.log('[QuestionDetail] Loaded question:', question.id, question.title)
    }
  }, [question])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            <div className="h-8 bg-slate-200 rounded w-3/4"></div>
            <div className="h-40 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">404</div>
        <p className="text-slate-500 mb-6">Question not found.</p>
        <Link href="/questions" className="text-brand-600 hover:underline font-medium">
          ← Back to Questions
        </Link>
      </div>
    )
  }

  const difficultyColor = (d: Difficulty) => {
    switch (d) {
      case 'easy':   return 'bg-emerald-100 text-emerald-700'
      case 'medium': return 'bg-amber-100 text-amber-700'
      case 'hard':   return 'bg-red-100 text-red-700'
    }
  }

  const categoryColor = (c: Category) => {
    switch (c) {
      case 'SQL':        return 'bg-blue-100 text-blue-700'
      case 'Experiment': return 'bg-purple-100 text-purple-700'
      case 'Product':    return 'bg-orange-100 text-orange-700'
    }
  }

  const handleShowAI = () => {
    console.log('[QuestionDetail] Show AI Explanation clicked:', question.id)
    setShowAI(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/questions" className="flex items-center gap-2 group">
            <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm text-slate-600 group-hover:text-brand-600 transition-colors font-medium">
              Back to Questions
            </span>
          </Link>
          <span className="text-sm text-slate-400 font-mono">#{question.id}</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Question Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-6 fade-in">
          {/* Meta badges */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`badge ${categoryColor(question.category)}`}>{question.category}</span>
            <span className={`badge ${difficultyColor(question.difficulty)} capitalize`}>{question.difficulty}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-slate-900 mb-6 leading-snug">
            {question.title}
          </h1>

          {/* Question */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mb-6">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Question</p>
            <p className="text-slate-700 leading-relaxed">{question.question}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Answer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-6 fade-in">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">Standard Answer</p>

          {/* Approach */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-brand-600 text-xs font-bold">💡</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Approach</h3>
            </div>
            <p className="text-slate-600 leading-relaxed pl-8">{question.answer.approach}</p>
          </div>

          {/* Conclusion */}
          <div className="border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 text-xs font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Conclusion</h3>
            </div>
            <p className="text-slate-600 leading-relaxed pl-8">{question.answer.conclusion}</p>
          </div>
        </div>

        {/* AI Explanation */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm fade-in">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">AI Explanation</p>

          {!showAI ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-50 to-indigo-50 border border-brand-200 rounded-xl px-6 py-4">
                <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm text-brand-700 font-medium">Want a deeper dive? See the AI explanation.</p>
              </div>
              <button
                onClick={handleShowAI}
                className="mt-4 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Show AI Explanation
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-5 fade-in">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✦</span>
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Insights</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm">{question.aiExplanation}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {question.id !== '1' && (
            <Link
              href={`/questions/${String(parseInt(question.id) - 1).padStart(1, '0')}`}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Link>
          )}
          <div />
          {question.id !== String(questions.length) && (
            <Link
              href={`/questions/${String(parseInt(question.id) + 1).padStart(1, '0')}`}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-600 transition-colors"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
