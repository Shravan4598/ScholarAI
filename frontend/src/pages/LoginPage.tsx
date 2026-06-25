import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await response.text();
      let data: { detail?: string; access_token?: string } | null = null;
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          data = null;
        }
      }

      if (!response.ok) {
        throw new Error(data?.detail || text || "Login failed");
      }

      localStorage.setItem("scholarai_token", data?.access_token || "");
      setMessage("Logged in successfully.");
      navigate("/ai");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto flex max-w-xl flex-col px-6 py-20">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-slate-400">Sign in to continue your learning journey.</p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>
        {message ? <p className="mt-4 text-sm text-cyan-300">{message}</p> : null}
      </div>
    </main>
  );
};

export default LoginPage;
