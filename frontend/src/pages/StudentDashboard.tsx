const StudentDashboard = () => (
  <main className="mx-auto max-w-7xl px-6 py-10">
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">Learning Progress</h3>
        <p className="mt-2 text-4xl font-semibold text-cyan-400">72%</p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">Study Streak</h3>
        <p className="mt-2 text-4xl font-semibold text-cyan-400">12 days</p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">Quiz Performance</h3>
        <p className="mt-2 text-4xl font-semibold text-cyan-400">88%</p>
      </div>
    </div>
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">Recommended Topics</h3>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>• Python Basics</li>
          <li>• FastAPI</li>
          <li>• SQLAlchemy</li>
        </ul>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold">Upcoming Study Tasks</h3>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>• Review SQL joins</li>
          <li>• Complete AI tutor session</li>
        </ul>
      </div>
    </div>
  </main>
);

export default StudentDashboard;
