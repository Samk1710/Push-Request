'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { ScrollReveal } from '@/components/scroll-reveal'
import { TrendingUp, Activity, Users, Target, AlertCircle, CheckCircle } from 'lucide-react'

const scoreData = [
  { month: 'Jan', score: 7.2, avg: 6.8 },
  { month: 'Feb', score: 7.4, avg: 7.0 },
  { month: 'Mar', score: 7.8, avg: 7.2 },
  { month: 'Apr', score: 8.1, avg: 7.5 },
  { month: 'May', score: 8.3, avg: 7.7 },
  { month: 'Jun', score: 8.5, avg: 7.9 },
]

const dailyData = [
  { day: 'Mon', prs: 24, merged: 18 },
  { day: 'Tue', prs: 32, merged: 26 },
  { day: 'Wed', prs: 28, merged: 22 },
  { day: 'Thu', prs: 35, merged: 30 },
  { day: 'Fri', prs: 18, merged: 15 },
  { day: 'Sat', prs: 8, merged: 7 },
  { day: 'Sun', prs: 12, merged: 10 },
]

const team = [
  { name: 'Alex Chen', prs: 156, quality: 92, role: 'Senior Dev' },
  { name: 'Sarah Wilson', prs: 142, quality: 88, role: 'Mid-level Dev' },
  { name: 'Marcus Johnson', prs: 138, quality: 85, role: 'Junior Dev' },
  { name: 'Emma Davis', prs: 127, quality: 90, role: 'Senior Dev' },
  { name: 'Lucas Taylor', prs: 118, quality: 82, role: 'Mid-level Dev' },
]

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-8 p-8">
      <ScrollReveal>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground">Comprehensive insights into team performance and code quality</p>
        </div>
      </ScrollReveal>

      {/* Key Metrics */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg Quality Score</p>
                <p className="text-2xl font-bold text-foreground">8.3/10</p>
              </div>
              <TrendingUp className="w-8 h-8 text-cyan-500" />
            </div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">PRs This Month</p>
                <p className="text-2xl font-bold text-foreground">127</p>
              </div>
              <Activity className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Merge Rate</p>
                <p className="text-2xl font-bold text-foreground">94%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Team Members</p>
                <p className="text-2xl font-bold text-foreground">5</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScrollReveal delay={0.2}>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quality Score Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }} />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#06b6d4" strokeWidth={2} dot={{ fill: '#06b6d4' }} />
                <Line type="monotone" dataKey="avg" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Daily PR Activity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }} />
                <Legend />
                <Bar dataKey="prs" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="merged" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>
      </div>

      {/* Team Leaderboard */}
      <ScrollReveal delay={0.4}>
        <div className="p-6 rounded-lg border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Team Performance Leaderboard</h2>
          <div className="space-y-3">
            {team.map((member, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{member.prs}</p>
                    <p className="text-xs text-muted-foreground">PRs</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 rounded-full bg-background relative overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${member.quality}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-10 text-right">{member.quality}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
