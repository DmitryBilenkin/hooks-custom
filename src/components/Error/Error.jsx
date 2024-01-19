import useJsonFetch from "../../hooks/useJsonFetch"

export default function Error(props) {

  const [data, loading, error] = useJsonFetch(props.url)

  return (
    <>
      {error===null ? 
        <div>
          {loading && <span>Loading...</span>}
          {!loading && <span>{`Статус получения данных: ${data.status}`}</span>}
        </div> 
        :
        console.error(error)    
      }   
    </> 
  )
}
