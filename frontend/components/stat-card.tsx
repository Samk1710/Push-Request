import { ReactNode } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon?: ReactNode
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
  }
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-slide-up">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-4xl font-bold mt-2">{value}</p>
        </div>
        {icon && <div className="opacity-50 group-hover:scale-110 transition-transform duration-200">{icon}</div>}
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-sm">
          {trend.direction === 'up' && (
            <ArrowUp size={16} className="text-green-500" />
          )}
          {trend.direction === 'down' && (
            <ArrowDown size={16} className="text-destructive" />
          )}
          <span className={trend.direction === 'up' ? 'text-green-500' : 'text-destructive'}>
            {trend.value}%
          </span>
          <span className="text-muted-foreground">vs last week</span>
        </div>
      )}
    </div>
  )
}
