import { getUserId } from "./utils/userId";
import API_BASE from "./config/apiBase";

export async function verifyClaim(claim) {
  const res = await fetch(`${API_BASE}/api/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      claim,
      userId: getUserId()
    })
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export async function fetchHistory() {
  const userId = getUserId();
  const res = await fetch(`${API_BASE}/api/history?userId=${userId}`);
  return res.json();
}
