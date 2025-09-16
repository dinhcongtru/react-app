import axiosClient from '@services/axios'
import type { ApiResponse } from '@services/types/response'
import type { AxiosResponse } from 'axios'

export const get = async <T>(url: string, params?: object): Promise<ApiResponse<T>> => {
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.get(url, { params })
  return res.data
}
