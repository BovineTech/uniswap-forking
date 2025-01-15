import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/swap')
  }, [navigate])
  return null
}
