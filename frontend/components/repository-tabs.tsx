'use client'

import { GitBranch, BarChart3, Settings } from 'lucide-react'
import { RecentPRsTable } from './recent-prs-table'

interface RepositoryTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  repoId: string
}

export function RepositoryTabs({ activeTab, onTabChange, repoId }: RepositoryTabsProps) {
  const tabs = [
    { id: 'prs', label: 'Pull Requests', icon: GitBranch },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div>
      <div className="flex border-b border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="p-6">
        {activeTab === 'prs' && (
          <div>
            <h3 className="font-semibold mb-4">Recent Pull Requests</h3>
            <RecentPRsTable />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h3 className="font-semibold mb-4">Repository Analytics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2">Avg PR Score</p>
                <p className="text-3xl font-bold">85.3</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2">Total Reviews</p>
                <p className="text-3xl font-bold">342</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2">Merge Rate</p>
                <p className="text-3xl font-bold">94%</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h3 className="font-semibold mb-4">Repository Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium">Auto-analysis</p>
                  <p className="text-sm text-muted-foreground">Automatically analyze new PRs</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium">Risk alerts</p>
                  <p className="text-sm text-muted-foreground">Notify on critical issues</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
