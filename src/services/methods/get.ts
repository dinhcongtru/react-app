import axiosClient from '@services/axios';
import type { ApiResponse } from '@services/types/response';
import type { AxiosResponse } from 'axios';

export const get = async <T>(path: string, params?: object): Promise<ApiResponse<T>> => {
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.get(path, { params });
  return res.data;
};
