import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  timeout: 10000,
})

axiosClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response?.data || error.message)
)

export default axiosClient
