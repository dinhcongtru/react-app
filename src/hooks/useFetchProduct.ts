import { useEffect, useState } from 'react';
import { productApi } from '@services/apis/product';
import type { Product } from '@services/types/product';

export const useFetchProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productApi.getProducts(
          { limit: 10, page: 1 },
          {
            token: '1234567890',
            forceAuth: false,
            skipAuth: true,
          }
        );
        setProducts(res as Product[]);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export const useFetchProductById = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productApi.getProductById(id);
        setProduct(res as Product);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading };
};
