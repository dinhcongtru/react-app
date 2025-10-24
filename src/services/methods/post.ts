import axiosClient from '@services/axios';
import type { ApiResponse } from '@services/types/response';
import type { AxiosResponse } from 'axios';
import { type AuthOptions, createRequestConfig } from './authUtils';

/**
 * Interface cho cấu hình POST request với Authorization
 */

/**
 * POST request với Authorization optional
 * @param path - API endpoint path
 * @param body - Request body data
 * @param params - Query parameters
 * @param authOptions - Cấu hình request với Authorization options
 * @returns Promise với API response
 */
export const post = async <T>(
  path: string,
  body: object,
  params?: object,
  authOptions?: AuthOptions
): Promise<ApiResponse<T>> => {
  const requestConfig = createRequestConfig({ params }, authOptions);
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.post(path, body, requestConfig);
  return res.data;
};
