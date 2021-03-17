import { useEffect, useState } from 'react'


const useRequest = (req) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    setLoading(true)
    req()
      .then(res => setData(res.data))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])


  return [
    data,
    loading,
    error
  ]

}


export default useRequest
