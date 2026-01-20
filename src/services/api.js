import axios from "axios";
import API_BASE from "../config/apiBase";

const API = axios.create({
  baseURL: API_BASE,  // This will now have https://
});

export const fetchHistory = () => API.get("/api/history");
export const getHistoryById = (id) => API.get(`/api/history/${id}`);