import { get } from '@services/methods/get'
import { post } from '@services/methods/post'
import { del } from '@services/methods/delete'
import type { Product } from '@services/types/product'
import type { ApiResponse } from '@services/types/response'

export const productApi = {
  getProducts: async (): Promise<ApiResponse<Product[]>> => {
    return await get<Product[]>('/objects')
  },

  getProductById: async (ids: number[]): Promise<ApiResponse<Product>> => {
    const idQuery = ids.map(id => `id=${id}`).join('&')
    return await get<Product>(`/objects?${idQuery}`)
  },

  createProduct: async (data: Omit<Product, 'id'>): Promise<ApiResponse<Product>> => {
    return await post<Product>('/objects', data)
  },
  deleteProduct: async (id: number): Promise<ApiResponse<Product>> => {
    return await del<Product>(`/objects/${id}`)
  },
}
