
export  function fetchAllPublsihers() {
  return new Promise( async(resolve)=>{
    const response = await fetch('http://localhost:8080/publishers');
    const data = await response.json()
    resolve({data})
  } )
}
