import { axiosConfig } from '@services/axios';
import type { AxiosRequestConfig } from 'axios';

/**
 * Interface cho cấu hình Authorization
 */
export interface AuthOptions {
  /** Token Authorization tùy chỉnh */
  token?: string;
  /** Force Authorization cho request này */
  forceAuth?: boolean;
  /** Skip Authorization cho request này */
  skipAuth?: boolean;
}

/**
 * Utility function để xử lý Authorization headers
 * @param authOptions - Options Authorization
 * @returns Headers với Authorization
 */
export const applyAuthHeaders = (authOptions?: AuthOptions): Record<string, string> => {
  const { headers } = axiosConfig;
  let newHeaders: Record<string, string> = { ...headers };

  if (!authOptions) return newHeaders;

  if (authOptions.token)
    newHeaders = { ...newHeaders, Authorization: `Bearer ${authOptions.token}` };

  if (authOptions.forceAuth) newHeaders = { ...newHeaders, 'X-Force-Auth': 'true' };

  if (authOptions.skipAuth) newHeaders = { ...newHeaders, 'X-Skip-Auth': 'true' };

  return newHeaders;
};

/**
 * Utility function để tạo request config với Authorization
 * @param config - Cấu hình request gốc
 * @param authOptions - Options Authorization
 * @returns Request config hoàn chỉnh
 */
export const createRequestConfig = (
  config?: object,
  authOptions?: AuthOptions
): AxiosRequestConfig => {
  return {
    ...config,
    headers: applyAuthHeaders(authOptions),
  };
};
