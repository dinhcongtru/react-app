import { type AuthOptions, del, get, post, put } from '@services/methods';
import type { User } from '@services/types/user';
import type { ApiResponse } from '@services/types/response';

/**
 * User API với Authorization support
 */
export const userApi = {
  /**
   * Lấy danh sách users (cần Authorization)
   * @param authOptions - Authorization options
   * @param params - Query parameters
   * @returns Promise với danh sách users
   */
  getUsers: async (params?: object, authOptions?: AuthOptions): Promise<ApiResponse<User[]>> => {
    return await get<User[]>('/users', params, authOptions);
  },

  /**
   * Lấy user theo ID (cần Authorization)
   * @param id - User ID
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với thông tin user
   */
  getUserById: async (
    id: string,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<User>> => {
    return await get<User>(`/users/${id}`, params, authOptions);
  },

  /**
   * Tạo user mới (cần Authorization)
   * @param data - User data
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với user đã tạo
   */
  createUser: async (
    data: Omit<User, 'id'>,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<User>> => {
    return await post<User>('/users', data, params, authOptions);
  },

  /**
   * Cập nhật user (cần Authorization)
   * @param id - User ID
   * @param data - User data
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với user đã cập nhật
   */
  updateUser: async (
    id: string,
    data: Omit<User, 'id'>,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<User>> => {
    return await put<User>(`/users/${id}`, data, params, authOptions);
  },

  /**
   * Xóa user (cần Authorization)
   * @param id - User ID
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với kết quả xóa
   */
  deleteUser: async (
    id: string,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<User>> => {
    return await del<User>(`/users/${id}`, params, authOptions);
  },
};
