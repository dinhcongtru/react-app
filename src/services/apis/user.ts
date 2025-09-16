import { get } from '@services/methods/get'
import { post } from '@services/methods/post'
import type { User } from '@services/types/user'
import type { ApiResponse } from '@services/types/response'

export const userApi = {
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    return await get<User[]>('/users')
  },

  getUserById: async (id: number): Promise<ApiResponse<User>> => {
    return await get<User>(`/users/${id}`)
  },

  createUser: async (data: Omit<User, 'id'>): Promise<ApiResponse<User>> => {
    return await post<User>('/users', data)
  },
}
