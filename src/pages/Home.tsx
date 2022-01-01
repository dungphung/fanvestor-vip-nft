import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/private-ido')
    return () => {}
  }, [])

  return null
}

export default Home
