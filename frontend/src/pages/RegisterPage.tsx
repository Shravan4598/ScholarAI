import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          username,
          email,
          password,
        }),
      });

      const text = await response.text();
      let data: { detail?: string } | null = null;
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          data = null;
        }
      }

      if (!response.ok) {
        throw new Error(data?.detail || text || "Registration failed");
      }

      setMessage("Account created successfully. You can now log in.");
      navigate("/login");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto flex max-w-xl flex-col px-6 py-20">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <h2 className="text-2xl font-semibold">Create your account</h2>
        <p className="mt-2 text-slate-400">Start learning with ScholarAI today.</p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Full Name" value={fullName} onChange={(event) => setFullName(event.target.value)} />
          <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3" placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </form>
        {message ? <p className="mt-4 text-sm text-cyan-300">{message}</p> : null}
      </div>
    </main>
  );
};

export default RegisterPage;
