'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2, Zap, Shield, TrendingUp, GitBranch, Eye, Sparkles, CheckCircle, AlertCircle, Flame } from 'lucide-react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gridSize = 40
    const speed = 0.5

    let offset = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(24, 24, 27, 0.4)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(113, 113, 122, 0.2)'
      ctx.lineWidth = 1

      offset = (offset + speed) % gridSize

      for (let x = -gridSize + offset; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = -gridSize + offset; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 z-0" />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl z-40 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight font-mono">CodeBoard</div>
                <div className="text-xs text-muted-foreground">AI PR Intelligence</div>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-95 font-medium text-sm flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
              <Flame size={16} className="text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">AI-Powered Code Review</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-slide-up font-mono">
              Pull Request <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Intelligence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              CodeBoard analyzes every PR in real-time with AI. Identify critical issues, detect security vulnerabilities, and help your team ship better code faster. Built for developers, powered by intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/dashboard"
                className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 font-medium text-sm shadow-lg shadow-primary/20"
              >
                <GitBranch size={18} />
                Start Reviewing
              </Link>
              <button className="px-8 py-3.5 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 active:scale-95 font-medium text-sm">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 pt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-2 p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-4xl md:text-5xl font-bold">10M+</p>
                  <AlertCircle size={20} className="text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">PRs Analyzed</p>
              </div>
              <div className="space-y-2 p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-4xl md:text-5xl font-bold">99.8%</p>
                  <CheckCircle size={20} className="text-emerald-500" />
                </div>
                <p className="text-muted-foreground text-sm">Detection Accuracy</p>
              </div>
              <div className="space-y-2 p-6 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-4xl md:text-5xl font-bold">500K+</p>
                  <Sparkles size={20} className="text-amber-500" />
                </div>
                <p className="text-muted-foreground text-sm">Active Teams</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 border-t border-border/40 bg-gradient-to-b from-background via-card/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono">Powerful Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need for intelligent code review and team collaboration</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  title: 'Smart Analysis',
                  desc: 'Automatically detect code issues, security vulnerabilities, and performance problems before they reach production',
                },
                {
                  icon: Eye,
                  title: 'Real-Time Insights',
                  desc: 'Get instant feedback on every PR with actionable insights, risk scoring, and detailed change analysis',
                },
                {
                  icon: Shield,
                  title: 'Security First',
                  desc: 'Catch security vulnerabilities and compliance issues early with AI-powered threat detection',
                },
                {
                  icon: TrendingUp,
                  title: 'Team Analytics',
                  desc: 'Track team productivity, code quality trends, and development patterns with powerful dashboards',
                },
                {
                  icon: Zap,
                  title: 'Lightning Fast',
                  desc: 'Get comprehensive analysis in seconds, not minutes. Stay in your workflow with instant PR reviews',
                },
                {
                  icon: GitBranch,
                  title: 'GitHub Integration',
                  desc: 'Seamless integration with GitHub. Works with your existing workflow without any setup needed',
                },
              ].map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div
                    key={i}
                    className="group relative p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:bg-card/80 animate-scroll-fade-in backdrop-blur-sm"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative z-10 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 px-6 border-t border-border/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center font-mono animate-slide-up">How It Works</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Connect GitHub', desc: 'Link your GitHub repositories in seconds' },
                { step: 2, title: 'Submit PRs', desc: 'Create pull requests as you normally would' },
                { step: 3, title: 'AI Analysis', desc: 'CodeBoard analyzes in real-time' },
                { step: 4, title: 'Ship Better', desc: 'Review insights and merge with confidence' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative text-center animate-scroll-fade-in"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 font-bold text-2xl text-primary">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-primary/30" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 border-t border-border/40 bg-gradient-to-r from-primary/10 via-background to-primary/5">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              Transform Your Code Review
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join thousands of teams already using CodeBoard to ship better code, faster. No credit card required.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-95 font-medium text-base items-center gap-2 shadow-lg shadow-primary/30"
            >
              Start Free Trial <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 py-12 px-6 bg-card/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 size={20} className="text-primary" />
                  <span className="font-bold">CodeBoard</span>
                </div>
                <p className="text-sm text-muted-foreground">AI-powered GitHub PR reviews</p>
              </div>
              <div>
                <p className="font-medium mb-4 text-sm">Product</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Docs</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-4 text-sm">Company</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-4 text-sm">Legal</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Status</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border/40 pt-8 text-center text-muted-foreground text-sm">
              <p>CodeBoard © 2025. Built with AI for developers worldwide.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
