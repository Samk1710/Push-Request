'use client'

import Link from 'next/link'
import { GitBranch, Star, TrendingUp, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const repos = [
  {
    id: 1,
    name: 'codeboard-core',
    description: 'AI-powered PR analysis engine',
    prs: 24,
    issues: 5,
    avgScore: 8.7,
    trend: '+2.3%',
    languages: ['TypeScript', 'Python'],
    contributors: 8,
  },
  {
    id: 2,
    name: 'dashboard-ui',
    description: 'Next.js dashboard interface',
    prs: 18,
    issues: 2,
    avgScore: 8.2,
    trend: '+1.8%',
    languages: ['TypeScript', 'React'],
    contributors: 5,
  },
  {
    id: 3,
    name: 'api-gateway',
    description: 'REST API and webhooks',
    prs: 31,
    issues: 8,
    avgScore: 7.9,
    trend: '+0.5%',
    languages: ['Go', 'TypeScript'],
    contributors: 6,
  },
  {
    id: 4,
    name: 'ml-models',
    description: 'Machine learning models',
    prs: 12,
    issues: 3,
    avgScore: 8.4,
    trend: '+3.1%',
    languages: ['Python', 'Jupyter'],
    contributors: 3,
  },
]

export default function RepositoriesPage() {
  return (
    <div className="flex-1 space-y-8 p-8">
      <ScrollReveal>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Repositories</h1>
          <p className="text-sm text-muted-foreground">Monitor and manage your GitHub repositories</p>
        </div>
      </ScrollReveal>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, idx) => (
          <ScrollReveal key={repo.id} delay={0.1 * idx}>
            <Link href={`/dashboard/repos/${repo.id}`}>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-cyan-500/50 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                      <GitBranch className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors truncate">{repo.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{repo.description}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-lg bg-background/50">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">{repo.prs}</p>
                    <p className="text-xs text-muted-foreground">PRs</p>
                  </div>
                  <div className="text-center border-l border-r border-border">
                    <p className="text-sm font-semibold text-foreground">{repo.avgScore}</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-green-500">{repo.trend}</p>
                    <p className="text-xs text-muted-foreground">Trend</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.languages.map((lang) => (
                    <span key={lang} className="px-2 py-1 text-xs rounded-full bg-foreground/5 text-foreground/70 font-mono">
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Contributors */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{repo.contributors} contributors</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
