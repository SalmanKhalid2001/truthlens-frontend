import React, { useState } from "react";
import ClaimForm from "./components/ClaimForm.jsx";
import ResultCard from "./components/ResultCard.jsx";
import HistorySidebar from "./components/HistorySidebar.jsx";
import { verifyClaim } from "./api.js";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function onSubmit(claim) {
    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const data = await verifyClaim(claim);
      setResult(data);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // ⭐ NEW: load history item
  async function loadHistory(id) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `http://localhost:5050/api/history/${id}`
      );
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError("Failed to load history");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <HistorySidebar onSelect={loadHistory} />

      {/* EXISTING UI — untouched */}
      <div className="container">
        <h1>AI New Authentication</h1>
        <div className="sub">
          Fact-check claims with Wikipedia + GNews
        </div>

        <ClaimForm onSubmit={onSubmit} loading={loading} />

        {error && (
          <div
            className="card"
            style={{ marginTop: 16, borderColor: "#6b1d1d" }}
          >
            <div className="small">Error</div>
            <div>{error}</div>
          </div>
        )}

        <ResultCard result={result} />

        <div className="small" style={{ marginTop: 16 }}>
          Tip: switch provider to OpenRouter in{" "}
          <code>server/.env</code> to use
          <code> perplexity/sonar-pro-search</code>.
        </div>
      </div>
    </div>
  );
}
