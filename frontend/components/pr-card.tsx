'use client'

import Link from 'next/link'
import { GitPullRequest, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react'

interface PRCardProps {
  id: number
  title: string
  author: string
  repository: string
  risk: 'Low' | 'Medium' | 'Critical'
  score: number
  additions: number
  deletions: number
  delay?: number
}

export function PRCard({
  id,
  title,
  author,
  repository,
  risk,
  score,
  additions,
  deletions,
  delay = 0,
}: PRCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30'
      case 'Medium':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/30'
      case 'Critical':
        return 'bg-red-500/10 text-red-600 border-red-500/30'
      default:
        return 'bg-gray-500/10 text-muted-foreground border-border'
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low':
        return <CheckCircle size={16} />
      case 'Medium':
        return <AlertCircle size={16} />
      case 'Critical':
        return <AlertCircle size={16} />
      default:
        return null
    }
  }

  const scorePercentage = score

  return (
    <Link href={`/prs/${id}`}>
      <div
        className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer animate-scroll-fade-in"
        style={{ animationDelay: `${delay * 100}ms` }}
      >
        {/* Gradient accent on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

        <div className="relative z-10 space-y-4">
          {/* Header with icon and risk badge */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              <GitPullRequest size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{repository}</p>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-full border text-xs font-medium flex items-center gap-1 flex-shrink-0 ${getRiskColor(risk)}`}>
              {getRiskIcon(risk)}
              {risk}
            </span>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>by <span className="font-mono text-foreground">{author}</span></span>
            <span>#{id}</span>
          </div>

          {/* Score bar with visual indicator */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-emerald-500" />
                <span className="text-sm font-semibold">Quality Score</span>
              </div>
              <span className="font-mono text-sm font-bold text-primary">{scorePercentage}/100</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/50"
                style={{ width: `${scorePercentage}%` }}
              />
            </div>
          </div>

          {/* Change stats */}
          <div className="flex gap-4 pt-2 text-xs">
            <span className="text-emerald-600 font-medium">+{additions} additions</span>
            <span className="text-red-600 font-medium">-{deletions} deletions</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
