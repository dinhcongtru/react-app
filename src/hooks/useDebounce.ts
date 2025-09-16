import { useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (func: (...args: any[]) => void, delay: number) => {
  const timeout = useRef<NodeJS.Timeout | null>(null)
  return (...args: Parameters<typeof func>) => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
