import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    typeof window !== "undefined"
      ? "" // Client-side: relative path (same domain)
      : process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000", // Server-side: full URL
});

export default axiosInstance;
