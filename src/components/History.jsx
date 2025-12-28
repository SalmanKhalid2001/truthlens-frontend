import React from "react";

const History = ({ items }) => {
  if (!items.length) {
    return <p>No history found.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} style={styles.card}>
          <p><strong>Claim:</strong> {item.claim}</p>
          <p><strong>Verdict:</strong> {item.verdict}</p>
          <p><strong>Confidence:</strong> {item.confidence}%</p>
          <p><strong>Date:</strong> {new Date(item.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    background: "#f9f9f9",
  },
};

export default History;
