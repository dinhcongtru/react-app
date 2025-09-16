import axiosClient from '@services/axios'
import type { ApiResponse } from '@services/types/response'
import type { AxiosResponse } from 'axios'

export const del = async <T>(path: string): Promise<ApiResponse<T>> => {
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.delete(path)
  return res.data
}
