import axios from 'axios'
import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

export default function useDataLoader<T> (url: string, dependencies: unknown[] = []): [T[], Dispatch<SetStateAction<T[]>> ] {
  const [data, setData] = useState<T[]>([])
  useEffect(() => {
    const controller = new AbortController()
    void axios.get(url, { signal: controller.signal })
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        if (error.name === 'CanceledError') {
          console.log('Request was', error.message)
        } else {
          console.error('Request failed:', error.message)
        }
      })
    return () => {
      controller.abort()
    }
  }, dependencies)
  return [data, setData]
}
