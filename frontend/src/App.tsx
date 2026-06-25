import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import AITutorPage from './pages/AITutorPage';
import RecommendationsPage from './pages/RecommendationsPage';
import QuizPage from './pages/QuizPage';
import AnalyticsPage from './pages/AnalyticsPage';
import StudyPlannerPage from './pages/StudyPlannerPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('scholarai_token');
    setIsAuthenticated(Boolean(token));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('scholarai_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="text-xl font-semibold">ScholarAI</Link>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/ai">AI Tutor</Link>
                <button onClick={handleLogout} className="rounded-lg border border-slate-700 px-3 py-2">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/ai" element={<AITutorPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/planner" element={<StudyPlannerPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
