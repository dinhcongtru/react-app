import { type AuthOptions, del, get, post, put } from '@services/methods';
import type { Product } from '@services/types/product';
import type { ApiResponse } from '@services/types/response';

/**
 * Product API với Authorization support
 */
export const productApi = {
  /**
   * Lấy danh sách sản phẩm (public)
   * @param authOptions - Authorization options
   * @param params - Query parameters
   * @returns Promise với danh sách sản phẩm
   */
  getProducts: async (
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<Product[]>> => {
    return await get<Product[]>('/products', params, authOptions);
  },

  /**
   * Lấy sản phẩm theo ID (public)
   * @param id - Product ID
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với thông tin sản phẩm
   */
  getProductById: async (
    id: string,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<Product>> => {
    return await get<Product>(`/products/${id}`, params, authOptions);
  },

  /**
   * Tạo sản phẩm mới (cần Authorization)
   * @param data - Product data
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với sản phẩm đã tạo
   */
  createProduct: async (
    data: Omit<Product, 'id'>,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<Product>> => {
    return await post<Product>('/products', data, params, authOptions);
  },

  /**
   * Cập nhật sản phẩm (cần Authorization)
   * @param id - Product ID
   * @param data - Product data
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với sản phẩm đã cập nhật
   */
  updateProduct: async (
    id: string,
    data: Omit<Product, 'id'>,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<Product>> => {
    return await put<Product>(`/products/${id}`, data, params, authOptions);
  },

  /**
   * Xóa sản phẩm (cần Authorization)
   * @param id - Product ID
   * @param params - Query parameters
   * @param authOptions - Authorization options
   * @returns Promise với kết quả xóa
   */
  deleteProduct: async (
    id: string,
    params?: object,
    authOptions?: AuthOptions
  ): Promise<ApiResponse<Product>> => {
    return await del<Product>(`/products/${id}`, params, authOptions);
  },
};
