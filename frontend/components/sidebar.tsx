'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitBranch, BarChart3, Settings, Home, ChevronLeft, LogOut } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const links = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/dashboard/repos', icon: GitBranch, label: 'Repositories' },
    { href: '/dashboard/prs', icon: GitBranch, label: 'Pull Requests' },
    { href: '/dashboard/analytics', icon: BarChart3, label: 'Analytics' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen bg-card/50 border-r border-border transition-all duration-300 ease-in-out flex flex-col z-40 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          {isOpen && (
            <Link href="/" className="text-xl font-bold tracking-tight font-mono">
              CB
            </Link>
          )}
          <button
            onClick={onToggle}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft size={20} className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
          </button>
        </div>

        <nav className="space-y-2 flex-1 px-3">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                title={isOpen ? '' : link.label}
              >
                <Icon size={20} className="flex-shrink-0" />
                {isOpen && <span className="text-sm font-medium">{link.label}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border p-3">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground" title={isOpen ? '' : 'Sign out'}>
            <LogOut size={20} className="flex-shrink-0" />
            {isOpen && <span className="text-sm font-medium">Sign out</span>}
          </button>
        </div>
      </div>
    </>
  )
}
