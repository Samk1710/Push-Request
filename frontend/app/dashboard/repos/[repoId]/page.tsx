'use client'

import { useState } from 'react'
import { GitBranch, GitPullRequest, AlertCircle, CheckCircle, TrendingUp, Users, Eye, Star } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ScrollReveal } from '@/components/scroll-reveal'

const repoTrends = [
  { week: 'W1', quality: 7.8, prs: 12 },
  { week: 'W2', quality: 7.9, prs: 15 },
  { week: 'W3', quality: 8.1, prs: 18 },
  { week: 'W4', quality: 8.3, prs: 14 },
  { week: 'W5', quality: 8.4, prs: 16 },
]

const tabs = ['Overview', 'Pull Requests', 'Analytics', 'Team', 'Settings']

const recentPRs = [
  { id: 1, title: 'Add authentication system', author: 'John Doe', status: 'merged', quality: 8.9 },
  { id: 2, title: 'Fix critical memory leak', author: 'Jane Smith', status: 'open', quality: 8.2 },
  { id: 3, title: 'Refactor database queries', author: 'Mike Johnson', status: 'review', quality: 7.8 },
]

export default function RepositoryDetailPage() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="flex-1 space-y-6 p-8">
      <ScrollReveal>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">codeboard-core</h1>
              <p className="text-sm text-muted-foreground">AI-powered PR analysis engine</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Stats Bar */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Pull Requests', value: '24', icon: GitPullRequest, color: 'cyan' },
            { label: 'Issues', value: '5', icon: AlertCircle, color: 'red' },
            { label: 'Contributors', value: '8', icon: Users, color: 'purple' },
            { label: 'Avg Quality', value: '8.7', icon: TrendingUp, color: 'green' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <Icon className={`w-6 h-6 text-${stat.color}-500`} />
                </div>
              </div>
            )
          })}
        </div>
      </ScrollReveal>

      {/* Tabs */}
      <ScrollReveal delay={0.2}>
        <div className="flex gap-4 border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'text-cyan-500 border-b-2 border-cyan-500'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Tab Content */}
      {activeTab === 'Overview' && (
        <div className="space-y-6">
          <ScrollReveal delay={0.3}>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quality Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={repoTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="week" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }} />
                  <Line type="monotone" dataKey="quality" stroke="#06b6d4" strokeWidth={2} dot={{ fill: '#06b6d4' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent PRs</h3>
              <div className="space-y-2">
                {recentPRs.map((pr) => (
                  <div key={pr.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{pr.title}</p>
                      <p className="text-xs text-muted-foreground">by {pr.author}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        pr.status === 'merged' ? 'bg-green-500/10 text-green-500' :
                        pr.status === 'open' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {pr.status}
                      </span>
                      <span className="text-sm font-semibold text-cyan-500">{pr.quality}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}

      {activeTab === 'Pull Requests' && (
        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-lg border border-border bg-card">
            <p className="text-muted-foreground">View all pull requests for this repository</p>
          </div>
        </ScrollReveal>
      )}

      {activeTab === 'Analytics' && (
        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-lg border border-border bg-card">
            <p className="text-muted-foreground">Detailed analytics and metrics</p>
          </div>
        </ScrollReveal>
      )}
    </div>
  )
}
