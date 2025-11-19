export function RecentPRsTable() {
  const prs = [
    {
      id: 1,
      title: 'Add authentication flow',
      author: 'jane.dev',
      risk: 'Low',
      score: 92,
    },
    {
      id: 2,
      title: 'Refactor database queries',
      author: 'alex.code',
      risk: 'Medium',
      score: 78,
    },
    {
      id: 3,
      title: 'Update dependencies',
      author: 'sam.build',
      risk: 'Critical',
      score: 45,
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-500/10 text-green-600 border-green-500/30'
      case 'Medium':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/30'
      case 'Critical':
        return 'bg-red-500/10 text-destructive border-destructive/30'
      default:
        return 'bg-gray-500/10 text-muted-foreground border-border'
    }
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Title</th>
          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Author</th>
          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Risk</th>
          <th className="text-left py-3 px-4 font-medium text-muted-foreground">Score</th>
        </tr>
      </thead>
      <tbody>
        {prs.map((pr) => (
          <tr key={pr.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
            <td className="py-3 px-4">{pr.title}</td>
            <td className="py-3 px-4 text-muted-foreground">{pr.author}</td>
            <td className="py-3 px-4">
              <span className={`px-3 py-1 rounded-full border text-xs font-medium ${getRiskColor(pr.risk)}`}>
                {pr.risk}
              </span>
            </td>
            <td className="py-3 px-4 font-semibold">{pr.score}/100</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
