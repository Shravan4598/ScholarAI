const RecommendationsPage = () => (
  <main className="mx-auto max-w-6xl px-6 py-10">
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">Recommended Learning Paths</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">Machine Learning Foundations</div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">React Patterns</div>
      </div>
    </div>
  </main>
);

export default RecommendationsPage;
