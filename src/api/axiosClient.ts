import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  get: (url: string) => axiosClient.get(url).then(res => res.data),
  post: (url: string, data: any) => axiosClient.post(url, data).then(res => res.data),
};

export default axiosClient;
