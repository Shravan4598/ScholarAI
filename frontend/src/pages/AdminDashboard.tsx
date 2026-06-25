const AdminDashboard = () => (
  <main className="mx-auto max-w-6xl px-6 py-10">
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">Users: 128</div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">Courses: 24</div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">Quizzes: 58</div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">Recommendations: 92</div>
      </div>
    </div>
  </main>
);

export default AdminDashboard;
