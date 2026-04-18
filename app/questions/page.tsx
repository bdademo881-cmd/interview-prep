'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import questionsData from '@/data/questions.json'

type Difficulty = 'easy' | 'medium' | 'hard'
type Category = 'SQL' | 'Experiment' | 'Product'

interface Question {
  id: string
  title: string
  category: Category
  difficulty: Difficulty
  tags: string[]
  question: string
  answer: {
    approach: string
    conclusion: string
  }
  aiExplanation: string
}

const ALL_CATEGORIES: Category[] = ['SQL', 'Experiment', 'Product']
const ALL_DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard']

export default function QuestionsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All')
  const [mounted, setMounted] = useState(false)

  const questions: Question[] = questionsData as Question[]

  useEffect(() => {
    setMounted(true)
    console.log('[Questions] Page mounted')
  }, [])

  // Filter
  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const matchSearch =
        search.trim() === '' || q.title.toLowerCase().includes(search.toLowerCase())
      const matchCategory = selectedCategory === 'All' || q.category === selectedCategory
      const matchDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty
      return matchSearch && matchCategory && matchDifficulty
    })
  }, [search, selectedCategory, selectedDifficulty, questions])

  // Handlers
  const handleSearchChange = (value: string) => {
    setSearch(value)
    console.log('[Questions] Search changed:', value)
  }

  const handleCategoryChange = (cat: Category | 'All') => {
    setSelectedCategory(cat)
    console.log('[Questions] Category filter changed:', cat)
  }

  const handleDifficultyChange = (diff: Difficulty | 'All') => {
    setSelectedDifficulty(diff)
    console.log('[Questions] Difficulty filter changed:', diff)
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
      case 'SQL':       return 'bg-blue-100 text-blue-700'
      case 'Experiment': return 'bg-purple-100 text-purple-700'
      case 'Product':   return 'bg-orange-100 text-orange-700'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <span className="font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
              DataPrep
            </span>
          </Link>
          <span className="text-sm text-slate-500">{filtered.length} of {questions.length} questions</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Interview Questions</h1>
          <p className="text-slate-500">Filter and search to find the questions you want to practice.</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
          {/* Search */}
          <div className="mb-5">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
              />
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-6">
            {/* Category */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {(['All', ...ALL_CATEGORIES] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat as Category | 'All')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedCategory === cat
                        ? 'bg-brand-600 border-brand-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-brand-400 hover:text-brand-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Difficulty</p>
              <div className="flex flex-wrap gap-2">
                {(['All', ...ALL_DIFFICULTIES] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => handleDifficultyChange(diff as Difficulty | 'All')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border capitalize transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-brand-600 border-brand-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-brand-400 hover:text-brand-600'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear */}
            {(search || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearch('')
                    setSelectedCategory('All')
                    setSelectedDifficulty('All')
                    console.log('[Questions] Filters cleared')
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {!mounted ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {questions.slice(0, 6).map((q) => (
              <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-6 h-36 animate-pulse">
                <div className="h-4 bg-slate-100 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-slate-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-slate-500 font-medium">No questions match your filters.</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search or clearing the filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {filtered.map((q) => (
              <Link key={q.id} href={`/questions/${q.id}`} className="block group">
                <div className="card-hover bg-white rounded-2xl border border-slate-200 p-6 h-full shadow-sm hover:border-brand-300">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`badge ${categoryColor(q.category)}`}>{q.category}</span>
                    <span className={`badge ${difficultyColor(q.difficulty)} capitalize`}>{q.difficulty}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {q.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {q.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-slate-400 bg-slate-100 rounded-md px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">#{q.id}</span>
                    <span className="text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium flex items-center gap-1">
                      View
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
