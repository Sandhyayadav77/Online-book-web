
export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json()
    // on server it will return only relevant information 
    resolve({ data })
  })
}

export function fetchItemByUserId(user) {
  return new Promise(async (resolve) => {
   const userId= user?.data?.id;
   try{
    const response = await fetch('http://localhost:8080/cart?userId=' + userId)
    const data = await response.json();
    resolve({ data })
   }catch(e){
    console.log(e.message)
   }
  })
}

export function updateCart(update) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('http://localhost:8080/cart/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json()
    // on server it will return only relevant information 
    resolve({ data })
  })
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('http://localhost:8080/cart/'+ itemId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json()
    // on server it will return only relevant information 
    resolve({ data:{id: itemId} })
  })
}

export  function resetCart(userId) {
  // get all items of user's cart and delete each item
  return new Promise(async (resolve, reject) => {
    const response = await fetchItemByUserId(userId)
    const items= response.data;
    for(let item of items){
      await deleteItemFromCart(item.id)
    }
    resolve({status:'success'});
  })
}
