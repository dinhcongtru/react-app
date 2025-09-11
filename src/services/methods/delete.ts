import axiosClient from "@services/axios";
import type { ApiResponse } from "@services/types/response";
import type { AxiosResponse } from "axios";

export const del = async <T>(url: string): Promise<ApiResponse<T>> => {
  const res: AxiosResponse<ApiResponse<T>> = await axiosClient.delete(url);
  return res.data;
};
