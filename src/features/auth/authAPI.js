// import { isRejected } from "@reduxjs/toolkit";

export  function CreateUser(userData) {
  return new Promise( async(resolve)=>{
    const response = await fetch('http://localhost:8080/users', {
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    });
    const data = await response.json()
    // on server it will return only relevant information 
  resolve({data})
// console.log(data)
  } )
}

export  function checkUser(loginInfo) {
  return new Promise( async(resolve, reject)=>{
    // console.log(loginInfo)
    const email= loginInfo.email;
    const password= loginInfo.password
    const url ='http://localhost:8080/users?email='+email
    // console.log(url)
    const response = await fetch(url);
    const data = await response.json()
    // console.log({data})
    if(data.length){
      if(password=== data[0].password){
        resolve({data: data[0]})
      }else{
        reject( {message:'wrong credentials'})
      }
    }
    else{
      reject({message:'user not found'})
    }
    // on server it will return only relevant information 
  } )
}


export  function signOut(userId) {
  return new Promise( async(resolve)=>{

    // on server it willremove the  user session info 
  resolve({data:'success on sign out'})
  } )
}