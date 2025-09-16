import { get } from '@services/methods/get';
import { post } from '@services/methods/post';
import { put } from '@services/methods/put';
import { del } from '@services/methods/delete';
import type { User } from '@services/types/user';
import type { ApiResponse } from '@services/types/response';

export const userApi = {
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    return await get<User[]>('/users');
  },

  getUserById: async (id: string): Promise<ApiResponse<User>> => {
    return await get<User>(`/users/${id}`);
  },

  createUser: async (data: Omit<User, 'id'>): Promise<ApiResponse<User>> => {
    return await post<User>('/users', data);
  },

  updateUser: async (id: string, data: Omit<User, 'id'>): Promise<ApiResponse<User>> => {
    return await put<User>(`/users/${id}`, data);
  },

  deleteUser: async (id: string): Promise<ApiResponse<User>> => {
    return await del<User>(`/users/${id}`);
  },
};
