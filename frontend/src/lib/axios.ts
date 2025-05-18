import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // puoi usare anche variabili d'ambiente
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
