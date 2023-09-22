
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
    const userId = user?.data?.id;
    try {
      const response = await fetch('http://localhost:8080/cart?userId=' + userId)
      const data = await response.json();
      resolve({ data })
    } catch (e) {
      console.log(e.message)
    }
  })
}

export function updateCart(update) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('http://localhost:8080/cart/' + update.id, {

      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json()
    // on server it will return only relevant information 
    resolve({ data })
  })
}

// export function deleteItemFromCart(itemId) {
//   return new Promise(async (resolve, reject) => {
//     const response = await fetch('http://localhost:8080/cart/' + itemId, {
//       method: 'DELETE',
//       headers: { 'content-type': 'application/json' }
//     });
//     const data = await response.json()
//     // on server it will return only relevant information 
//     resolve({ data: { id: itemId } })
//   })
// }

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart/' + itemId, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
      });

      if (response.status === 404) {
        // Handle the case where the item was not found
        // console.log(`Item with ID ${itemId} not found.`);
      } else {
        const data = await response.json();
        // Handle the successful deletion
        resolve({ data: { id: itemId } });
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      reject(error);
    }
  });
}


// export function resetCart(userId) {
//   // get all items of user's cart and delete each item
//   return new Promise(async (resolve, reject) => {
//     console.log(userId)
//     // const response = await fetchItemByUserId(userId)
//     try {
//       const response = await fetch('http://localhost:8080/cart?userId=' + userId)
//        const data = await response.json(); 
//       const items = data
//       console.log('items', items)
//       for (let item of items) {
//         console.log(item, item.id)
//         await deleteItemFromCart(item.id)
//       }
//     } 
//     catch (e) {
//       console.log(e.message)
//     }
//     resolve({ status: 'success' });
//   })
// }


export async function resetCart(userId) {
  try {
    const response = await fetch('http://localhost:8080/cart?userId=' + userId);
    const data = await response.json();
    const items = data;

    // Create an array to store items that need to be deleted
    const itemsToDelete = [];

    // Determine which items need to be deleted
    for (let item of items) {
      itemsToDelete.push(item.id);
    }

    // Delete all items in parallel
    const deletePromises = itemsToDelete.map(async (itemId) => {
      const deleteResponse = await deleteItemFromCart(itemId);
      if (deleteResponse.status === 200) {
        console.log(`Item with ID ${itemId} deleted successfully.`);
      } else {
        console.log(`Item with ID ${itemId} was not found or could not be deleted.`);
      }
    });

    // Wait for all delete requests to complete
    await Promise.all(deletePromises);

    return { status: 'success' };
  } catch (e) {
    console.error('Error resetting cart:', e.message);
    return { status: 'error' };
  }
}

