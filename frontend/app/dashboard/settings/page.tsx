'use client'

import { useState } from 'react'
import { Bell, Lock, Users, Database, Shield, Zap, GitBranch, Save, X } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    prCreated: true,
    prMerged: true,
    riskAlert: true,
    dailyDigest: false,
  })

  const [analysisSettings, setAnalysisSettings] = useState({
    aiSummary: true,
    securityCheck: true,
    performanceReview: true,
    autoMerge: false,
  })

  return (
    <div className="flex-1 space-y-8 p-8">
      <ScrollReveal>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your preferences and integrations</p>
        </div>
      </ScrollReveal>

      {/* Notifications */}
      <ScrollReveal delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <Bell className="w-5 h-5 text-cyan-500" />
            <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-3">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <label className="flex items-center gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                    className="w-4 h-4 rounded border-border accent-cyan-500"
                  />
                  <div>
                    <p className="font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-xs text-muted-foreground">Get notified when {key.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Analysis Settings */}
      <ScrollReveal delay={0.2}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <Zap className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-foreground">Analysis Settings</h2>
          </div>
          <div className="space-y-3">
            {Object.entries(analysisSettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <label className="flex items-center gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setAnalysisSettings({ ...analysisSettings, [key]: e.target.checked })}
                    className="w-4 h-4 rounded border-border accent-blue-500"
                  />
                  <div>
                    <p className="font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-xs text-muted-foreground">Enable {key.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Security */}
      <ScrollReveal delay={0.3}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <Shield className="w-5 h-5 text-green-500" />
            <h2 className="text-xl font-semibold text-foreground">Security</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 text-sm font-medium hover:bg-cyan-500/20 transition-colors">
                  Enable
                </button>
              </div>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">API Keys</p>
                  <p className="text-xs text-muted-foreground">Manage your API access tokens</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Team Management */}
      <ScrollReveal delay={0.4}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <Users className="w-5 h-5 text-purple-500" />
            <h2 className="text-xl font-semibold text-foreground">Team Management</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Team Members</p>
                  <p className="text-xs text-muted-foreground">5 active members</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-500 text-sm font-medium hover:bg-purple-500/20 transition-colors">
                  View
                </button>
              </div>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Invite Members</p>
                  <p className="text-xs text-muted-foreground">Add new team members</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-foreground/10 border border-foreground/20 text-foreground text-sm font-medium hover:bg-foreground/20 transition-colors">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Integrations */}
      <ScrollReveal delay={0.5}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <GitBranch className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold text-foreground">Integrations</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                    <GitBranch className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">Connected</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
