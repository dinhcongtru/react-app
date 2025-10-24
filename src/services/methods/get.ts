import axiosClient from '@services/axios';
import type { ApiResponse } from '@services/types/response';
import type { AxiosResponse } from 'axios';
import { type AuthOptions, createRequestConfig } from './authUtils';

/**
 * GET request với Authorization optional
 * @param path - API endpoint path
 * @param params - Query parameters
 * @param authOptions - Cấu hình request với Authorization options
 * @returns Promise với API response
 */
export const get = async <T>(
  path: string,
  params?: object,
  authOptions?: AuthOptions
): Promise<ApiResponse<T>> => {
  const requestConfig = createRequestConfig({ params }, authOptions);
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.get(path, requestConfig);
  return res.data;
};
