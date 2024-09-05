import { useEffect, useState } from "react"

/**
 *
 * @param {string} url
 * @returns
 */
function useFetch(url) {
  const [urlData, setUrlData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Failed to fetch data !!!")
        }
        const data = await response.json()
        setUrlData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {
    urlData,
    loading,
    error,
  }
}

export default useFetch
