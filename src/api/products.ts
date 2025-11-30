import { api } from "./axiosClient";


export const getProducts = () => api.get("products/");
