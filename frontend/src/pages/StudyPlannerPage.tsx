const StudyPlannerPage = () => (
  <main className="mx-auto max-w-6xl px-6 py-10">
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">Study Planner</h2>
      <div className="mt-8 space-y-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">Daily plan: Review Python and complete one quiz.</div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">Weekly plan: Focus on FastAPI and databases.</div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">Exam prep: Revise topics and schedule practice sessions.</div>
      </div>
    </div>
  </main>
);

export default StudyPlannerPage;
