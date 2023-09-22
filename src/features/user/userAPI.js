
export  function fetchLoggedInUserOrders(userId) {
  return new Promise( async(resolve)=>{
    const response = await fetch('http://localhost:8080/orders/?userData.id='+userId);
    const data = await response.json()
    resolve({data})
  } )
}

export  function fetchLoggedInUser(userId) {
  return new Promise( async(resolve)=>{
    const response = await fetch('http://localhost:8080/users/'+userId);
    const data = await response.json()
    resolve({data})
  } )
}


export  function updateUser(update) {
  return new Promise( async(resolve)=>{
    // console.log(update)
    const updateUserId = update.id
    // console.log(updateUserId)
    const response = await fetch('http://localhost:8080/users/'+updateUserId, {
      method:'PATCH',
      body:JSON.stringify(update),
      headers:{'content-type':'application/json'}
    });
    const data = await response.json()
    // on server it will return only relevant information 
    resolve({data})
  } )
}