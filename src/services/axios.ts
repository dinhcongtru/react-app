import axios, { type AxiosResponse } from 'axios';

/**
 * Axios client cơ bản
 * Authorization được xử lý bởi authUtils trong methods
 */

export const axiosConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};
const axiosClient = axios.create(axiosConfig);

/**
 * Response interceptor để xử lý lỗi
 */
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => Promise.reject(error.response?.data || error.message)
);

export default axiosClient;
