import { useEffect,useState} from 'react'
import { getCards } from '../http/api';

const ApiDataHook = (url) => {
    const [data, setData] = useState([]);
    const [loading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

  useEffect(() => {
      getCards(url,(data) => {
        setData(data)
        setIsLoading(false)
      }).catch((err) => {
        setError(err)
        setIsLoading(false)
      }).finally(() => {
        setIsLoading(false)
      })

  },[url])

  return {data,url,error,loading}
 
}

export default ApiDataHook