import axiosClient from '@services/axios'
import type { ApiResponse } from '@services/types/response'
import type { AxiosResponse } from 'axios'

export const post = async <T>(url: string, body: object): Promise<ApiResponse<T>> => {
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.post(url, body)
  return res.data
}
