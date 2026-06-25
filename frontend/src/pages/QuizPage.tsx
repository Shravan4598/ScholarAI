const QuizPage = () => (
  <main className="mx-auto max-w-6xl px-6 py-10">
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">Adaptive Quiz</h2>
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <p className="font-medium">What is Python?</p>
        <div className="mt-4 space-y-2">
          <div className="rounded-xl border border-slate-800 p-3">A language</div>
          <div className="rounded-xl border border-slate-800 p-3">A fruit</div>
          <div className="rounded-xl border border-slate-800 p-3">A car</div>
        </div>
      </div>
    </div>
  </main>
);

export default QuizPage;
