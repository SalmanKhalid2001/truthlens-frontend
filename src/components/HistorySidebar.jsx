import { useEffect, useState } from "react";

export default function HistorySidebar({ onSelect }) {
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5050/api/history")
      .then((res) => res.json())
      .then(setHistory)
      .catch(console.error);
  }, []);

  function handleClick(item) {
    setActiveId(item._id);
    onSelect(item._id);
  }

  if (!open) {
    return (
      <button className="sidebar-toggle" onClick={() => setOpen(true)}>
        ☰ History
      </button>
    );
  }

  return (
    <aside className="history-sidebar">
      <div className="history-header">
        <h3>History</h3>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
      </div>

      <div className="history-list">
        {history.map((item) => (
          <div
            key={item._id}
            className={`history-item ${activeId === item._id ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            {item.claim}
          </div>
        ))}
      </div>
    </aside>
  );
}
