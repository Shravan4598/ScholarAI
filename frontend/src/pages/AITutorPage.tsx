import { type FormEvent, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

const AITutorPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [summary, setSummary] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!question.trim()) {
      setError("Please enter a question before generating an answer.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAnswer("");
    setSummary("");
    setNotes("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error("Unable to generate an answer right now.");
      }

      const data = await response.json();
      setAnswer(data.answer ?? "No answer generated.");
      setSummary(data.summary ?? "");
      setNotes(data.notes ?? "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-2xl font-semibold">AI Tutor</h2>
        <p className="mt-2 text-slate-400">Ask any academic question and get step-by-step explanations.</p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <textarea
            className="min-h-32 w-full rounded-2xl border border-slate-700 bg-slate-950 p-4"
            placeholder="Ask me anything about your topic..."
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button
            type="submit"
            className="rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Answer"}
          </button>
        </form>

        {error ? <p className="mt-4 text-sm text-rose-400">{error}</p> : null}

        {answer ? (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <h3 className="text-lg font-semibold">Tutor Response</h3>
            <p className="mt-3 whitespace-pre-line text-slate-300">{answer}</p>
            {summary ? <p className="mt-4 text-sm text-cyan-300">{summary}</p> : null}
            {notes ? <p className="mt-2 text-sm text-slate-400">{notes}</p> : null}
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default AITutorPage;
