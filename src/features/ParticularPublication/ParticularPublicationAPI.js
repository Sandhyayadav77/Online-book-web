const BASE_URL = 'http://localhost:8080'; 
export  function fetchSubjectsForPublisherAPI(id) {
  return new Promise( async(resolve)=>{
    const response = await fetch(`${BASE_URL}/publishers/${encodeURIComponent(id)}`);
    const data = await response.json()
    resolve({data})
  } )
}