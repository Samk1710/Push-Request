'use client'

import { StatCard } from '@/components/stat-card'
import { PRCard } from '@/components/pr-card'
import { AlertCircle, TrendingUp, Users, GitBranch, CheckCircle, Zap, Shield, Clock } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const trendData = [
  { date: 'Mon', score: 82, prs: 8 },
  { date: 'Tue', score: 85, prs: 11 },
  { date: 'Wed', score: 88, prs: 13 },
  { date: 'Thu', score: 86, prs: 10 },
  { date: 'Fri', score: 91, prs: 16 },
  { date: 'Sat', score: 89, prs: 4 },
  { date: 'Sun', score: 87, prs: 3 },
]

export default function DashboardPage() {
  const recentPRs = [
    { id: 1, title: 'Add authentication flow', author: 'jane.dev', repository: 'vercel/nextjs', risk: 'Low' as const, score: 92, additions: 245, deletions: 89 },
    { id: 2, title: 'Refactor database queries', author: 'alex.code', repository: 'vercel/platforms', risk: 'Medium' as const, score: 78, additions: 512, deletions: 234 },
    { id: 3, title: 'Update dependencies', author: 'sam.build', repository: 'vercel/ai', risk: 'Critical' as const, score: 45, additions: 1024, deletions: 512 },
  ]

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 font-mono">Dashboard</h1>
        <p className="text-muted-foreground text-lg">Welcome back. Here's your PR analysis overview.</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
        <StatCard
          title="Critical Issues"
          value="12"
          icon={<AlertCircle size={24} className="text-destructive" />}
          trend={{ value: 8, direction: 'up' }}
          delay={0}
        />
        <StatCard
          title="Average Score"
          value="87.5"
          icon={<TrendingUp size={24} className="text-emerald-500" />}
          trend={{ value: 3.2, direction: 'up' }}
          delay={1}
        />
        <StatCard
          title="PRs Reviewed"
          value="94"
          icon={<GitBranch size={24} className="text-primary" />}
          trend={{ value: 12, direction: 'up' }}
          delay={2}
        />
        <StatCard
          title="Team Members"
          value="12"
          icon={<Users size={24} className="text-blue-500" />}
          trend={{ value: 0, direction: 'neutral' }}
          delay={3}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-scroll-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Score Trend</h2>
            <TrendingUp size={20} className="text-primary" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={3} dot={{ fill: 'var(--primary)', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">PRs per Day</h2>
            <Zap size={20} className="text-amber-500" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }} />
              <Bar dataKey="prs" fill="var(--primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-scroll-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle size={24} className="text-emerald-500" />
            <h3 className="font-bold">Quality Score</h3>
          </div>
          <p className="text-3xl font-bold">92%</p>
          <p className="text-sm text-muted-foreground mt-2">+5% from last month</p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <Clock size={24} className="text-primary" />
            <h3 className="font-bold">Avg Review Time</h3>
          </div>
          <p className="text-3xl font-bold">2.3h</p>
          <p className="text-sm text-muted-foreground mt-2">-0.5h from last month</p>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <Shield size={24} className="text-blue-500" />
            <h3 className="font-bold">Security Scan</h3>
          </div>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-muted-foreground mt-2">Issues found this week</p>
        </div>
      </div>

      {/* Recent PRs */}
      <div className="animate-scroll-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Pull Requests</h2>
          <a href="/prs" className="text-primary hover:text-primary/80 transition font-medium text-sm">View All →</a>
        </div>
        <div className="grid gap-4">
          {recentPRs.map((pr, idx) => (
            <PRCard key={pr.id} {...pr} delay={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
