'use client'

interface RiskMeterProps {
  score: number
}

export function RiskMeter({ score }: RiskMeterProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-amber-500'
    return 'text-destructive'
  }

  const getLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    return 'At Risk'
  }

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center">
      <h3 className="font-semibold mb-6 text-center">Risk Score</h3>
      
      <svg width="200" height="200" className="mb-6">
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted/30"
        />
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`transition-all duration-500 ${getColor(score)}`}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '100px 100px' }}
        />
        <text
          x="100"
          y="115"
          textAnchor="middle"
          className="text-3xl font-bold fill-foreground"
          dominantBaseline="middle"
        >
          {score}
        </text>
      </svg>

      <p className={`text-sm font-medium ${getColor(score)}`}>{getLabel(score)}</p>
      <p className="text-xs text-muted-foreground mt-2">Pull request quality</p>
    </div>
  )
}
