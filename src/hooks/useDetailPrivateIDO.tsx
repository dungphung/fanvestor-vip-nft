import { useState } from 'react'

export const useDetailPrivateIDO = () => {
  const [tab, setTab] = useState(0)

  return {
    tab,
    setTab,
  }
}
