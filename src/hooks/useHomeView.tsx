import { useState } from 'react'

export const useHomeView = () => {
  const [isLoading, setIsLoading] = useState(false)
  return {
    isLoading,
  }
}
