'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GitPullRequest, Search, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const prs = [
  {
    id: 1,
    title: 'Add authentication system with OAuth2 support',
    repo: 'codeboard-core',
    author: 'John Doe',
    status: 'merged',
    quality: 8.9,
    risk: 'low',
    date: '2 hours ago',
  },
  {
    id: 2,
    title: 'Fix critical memory leak in cache layer',
    repo: 'api-gateway',
    author: 'Jane Smith',
    status: 'open',
    quality: 8.2,
    risk: 'medium',
    date: '4 hours ago',
  },
  {
    id: 3,
    title: 'Refactor database queries for performance',
    repo: 'dashboard-ui',
    author: 'Mike Johnson',
    status: 'review',
    quality: 7.8,
    risk: 'low',
    date: '6 hours ago',
  },
  {
    id: 4,
    title: 'Implement WebSocket support',
    repo: 'codeboard-core',
    author: 'Sarah Wilson',
    status: 'review',
    quality: 7.5,
    risk: 'high',
    date: '8 hours ago',
  },
]

const riskFilters = ['All', 'Low Risk', 'Medium Risk', 'High Risk']
const statusFilters = ['All', 'Open', 'Review', 'Merged']

export default function PullRequestsPage() {
  const [selectedRisk, setSelectedRisk] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex-1 space-y-8 p-8">
      <ScrollReveal>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Pull Requests</h1>
          <p className="text-sm text-muted-foreground">Monitor all pull requests across your repositories</p>
        </div>
      </ScrollReveal>

      {/* Search and Filters */}
      <ScrollReveal delay={0.1}>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search pull requests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase">Risk Level</p>
              <div className="flex flex-wrap gap-2">
                {riskFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedRisk(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedRisk === filter
                        ? 'bg-cyan-500 text-white'
                        : 'bg-background border border-border text-muted-foreground hover:border-foreground/20'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase">Status</p>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedStatus(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedStatus === filter
                        ? 'bg-blue-500 text-white'
                        : 'bg-background border border-border text-muted-foreground hover:border-foreground/20'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* PR Cards */}
      <div className="space-y-3">
        {prs.map((pr, idx) => (
          <ScrollReveal key={pr.id} delay={0.1 * idx}>
            <Link href={`/dashboard/prs/${pr.id}`}>
              <div className="p-5 rounded-lg border border-border bg-card hover:border-cyan-500/50 hover:shadow-lg hover:bg-card/80 transition-all cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <GitPullRequest className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <h3 className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors truncate">{pr.title}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="font-mono bg-background/50 px-2 py-1 rounded">{pr.repo}</span>
                      <span>by {pr.author}</span>
                      <span>{pr.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-cyan-500">{pr.quality}</p>
                      <p className="text-xs text-muted-foreground">Quality</p>
                    </div>

                    <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      pr.risk === 'low' ? 'bg-green-500/10 text-green-500' :
                      pr.risk === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {pr.risk}
                    </div>

                    <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      pr.status === 'merged' ? 'bg-green-500/10 text-green-500' :
                      pr.status === 'open' ? 'bg-blue-500/10 text-blue-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {pr.status}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
