import axios from "axios";
import API_BASE from "../config/apiBase";

const API = axios.create({
  baseURL: API_BASE,
});

export const fetchHistory = () => API.get("/api/history");
