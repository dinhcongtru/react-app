import { productApi } from '@services/apis/product'
import { useEffect, useState } from 'react'
import type { Product } from '@services/types/product'

export const useFetchProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        const res = await productApi.getProducts()
        setProducts(res as Product[])
      } catch (error) {
        console.log('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  return { products, loading }
}

export const useFetchProductById = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        const res = await productApi.getProductById(id)
        setProduct(res as Product)
      } catch (error) {
        console.log('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    })()
  }, [id])
  return { product, loading }
}
