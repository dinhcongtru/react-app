import { get } from '@services/methods/get';
import { post } from '@services/methods/post';
import { del } from '@services/methods/delete';
import { put } from '@services/methods/put';
import type { Product } from '@services/types/product';
import type { ApiResponse } from '@services/types/response';

export const productApi = {
  getProducts: async (): Promise<ApiResponse<Product[]>> => {
    return await get<Product[]>('/products');
  },

  getProductById: async (id: string): Promise<ApiResponse<Product>> => {
    return await get<Product>(`/products/${id}`);
  },

  createProduct: async (data: Omit<Product, 'id'>): Promise<ApiResponse<Product>> => {
    return await post<Product>('/products', data);
  },

  updateProduct: async (id: string, data: Omit<Product, 'id'>): Promise<ApiResponse<Product>> => {
    return await put<Product>(`/products/${id}`, data);
  },

  deleteProduct: async (id: string): Promise<ApiResponse<Product>> => {
    return await del<Product>(`/products/${id}`);
  },
};
