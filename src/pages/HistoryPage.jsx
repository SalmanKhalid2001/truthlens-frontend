import React, { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";
import History from "../components/History";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory()
      .then((res) => {
        setHistory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch history", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading history...</p>;

  return (
    <div>
      <h2>User History</h2>
      <History items={history} />
    </div>
  );
};

export default HistoryPage;
