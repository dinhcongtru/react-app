import axiosClient from '@services/axios';
import type { ApiResponse } from '@services/types/response';
import type { AxiosResponse } from 'axios';
import { type AuthOptions, createRequestConfig } from './authUtils';

/**
 * Interface cho cấu hình DELETE request với Authorization
 */

/**
 * DELETE request với Authorization optional
 * @param path - API endpoint path
 * @param authOptions - Cấu hình request với Authorization options
 * @param params - Query parameters
 * @returns Promise với API response
 */
export const del = async <T>(
  path: string,
  params?: object,
  authOptions?: AuthOptions
): Promise<ApiResponse<T>> => {
  const requestConfig = createRequestConfig({ params }, authOptions);
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.delete(path, requestConfig);
  return res.data;
};
