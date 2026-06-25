const LandingPage = () => (
  <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
    <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">AI-powered personalized learning</span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Learn faster with ScholarAI.</h1>
        <p className="max-w-2xl text-lg text-slate-300">Get adaptive quizzes, AI tutoring, recommendations, study plans, and analytics in one elegant platform.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/register" className="rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950">Get Started</a>
          <a href="/dashboard" className="rounded-xl border border-slate-700 px-5 py-3 font-medium">View Demo</a>
          <a href="/ai" className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-300">Open AI Tutor</a>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Today’s focus</div>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl bg-slate-900 p-4">Study streak: 12 days</div>
          <div className="rounded-xl bg-slate-900 p-4">Weak area: System Design</div>
          <div className="rounded-xl bg-slate-900 p-4">Next quiz: Python Basics</div>
        </div>
      </div>
    </section>
  </main>
);

export default LandingPage;
