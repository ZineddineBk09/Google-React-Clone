import { useEffect, useState } from 'react'
import { useGlobContext } from './Glob_Context_API/context'

const API_KEY = 'AIzaSyAIE7YTMkM6U4KthDEFTEg7qF4PtPS8I-0'
const CONTEXT_KEY = '492de1042ffff578f'

const useGoogleSearch = (term) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((resp) => resp.json())
        .then((infos) => {
          setData(infos)
          console.log('data inside useEffect : ', data)
          return { data }
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    }
    fetchData()
  }, [term])
  console.log('data outside useEffect : ', data)
  return {data} 
}
export default useGoogleSearch
