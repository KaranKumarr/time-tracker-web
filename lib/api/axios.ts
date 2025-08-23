// src/lib/api.ts
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1", // ✅ your Spring Boot backend
    headers: {
        "Content-Type": "application/json",
    },
});

// Add token automatically if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
