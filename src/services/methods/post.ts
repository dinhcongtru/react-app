import axiosClient from '@services/axios';
import type { ApiResponse } from '@services/types/response';
import type { AxiosResponse } from 'axios';

export const post = async <T>(path: string, body: object): Promise<ApiResponse<T>> => {
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.post(path, body);
  return res.data;
};
