import { useState, useEffect } from "react"

function useJsonFetch(url, opts){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    async function fetchAPI(url) {
        try{
            const resp = await fetch(url)
            const dataFetch = await resp.json()
            setData(prev => prev = dataFetch)
            setLoading(prev => prev = false)
        } catch (e){
            setError(prev => prev = e)
        }
    }

    useEffect(()=>{fetchAPI(url)},[]) 

    return [data, loading, error]
}

export default useJsonFetch;