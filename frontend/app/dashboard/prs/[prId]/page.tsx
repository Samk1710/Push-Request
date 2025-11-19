'use client'

import { useState } from 'react'
import { GitPullRequest, AlertCircle, CheckCircle, MessageSquare, Eye, ThumbsUp } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const issues = [
  { id: 1, severity: 'high', title: 'Potential SQL injection vulnerability', description: 'User input not properly sanitized in query builder' },
  { id: 2, severity: 'medium', title: 'Missing error handling', description: 'API endpoint lacks try-catch block for database failures' },
  { id: 3, severity: 'low', title: 'Code style inconsistency', description: 'Indentation and formatting differs from codebase standards' },
]

const comments = [
  { author: 'Lead Dev', text: 'Great work on this PR! Just a few concerns about the security implications.', time: '2h ago' },
  { author: 'Code Reviewer', text: 'LGTM, but please add more unit tests for edge cases.', time: '1h ago' },
]

export default function PRDetailPage() {
  const [expandedIssues, setExpandedIssues] = useState<number[]>([1])

  return (
    <div className="flex-1 space-y-6 p-8">
      <ScrollReveal>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
              <GitPullRequest className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">Add authentication system with OAuth2</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">merged</span>
                <span className="text-sm text-muted-foreground">Created 2 hours ago by John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* AI Summary */}
      <ScrollReveal delay={0.1}>
        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur">
          <h2 className="text-lg font-semibold text-foreground mb-3">AI Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            This PR introduces a comprehensive OAuth2 authentication system that integrates with multiple providers including Google, GitHub, and Microsoft. The implementation includes proper token management, refresh token rotation, and secure session handling. The code quality is excellent with comprehensive test coverage at 94%.
          </p>
        </div>
      </ScrollReveal>

      {/* Quality Score */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Overall Quality</h3>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="relative w-full h-2 rounded-full bg-background overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500" style={{ width: '89%' }} />
            </div>
            <p className="text-2xl font-bold text-foreground mt-3">8.9/10</p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Test Coverage</h3>
              <Eye className="w-5 h-5 text-blue-500" />
            </div>
            <div className="relative w-full h-2 rounded-full bg-background overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '94%' }} />
            </div>
            <p className="text-2xl font-bold text-foreground mt-3">94%</p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Code Duplication</h3>
              <ThumbsUp className="w-5 h-5 text-purple-500" />
            </div>
            <div className="relative w-full h-2 rounded-full bg-background overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500" style={{ width: '12%' }} />
            </div>
            <p className="text-2xl font-bold text-foreground mt-3">12%</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Issues Found */}
      <ScrollReveal delay={0.3}>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Issues Found</h2>
          <div className="space-y-2">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-all cursor-pointer"
                onClick={() => setExpandedIssues(
                  expandedIssues.includes(issue.id)
                    ? expandedIssues.filter(id => id !== issue.id)
                    : [...expandedIssues, issue.id]
                )}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    issue.severity === 'high' ? 'text-red-500' :
                    issue.severity === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">{issue.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        issue.severity === 'high' ? 'bg-red-500/10 text-red-500' :
                        issue.severity === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-blue-500/10 text-blue-500'
                      }`}>
                        {issue.severity}
                      </span>
                    </div>
                    {expandedIssues.includes(issue.id) && (
                      <p className="text-sm text-muted-foreground mt-2">{issue.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Comments */}
      <ScrollReveal delay={0.4}>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Team Comments</h2>
          <div className="space-y-3">
            {comments.map((comment, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-foreground">{comment.author}</p>
                  <p className="text-xs text-muted-foreground">{comment.time}</p>
                </div>
                <p className="text-muted-foreground">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
