import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../api/products'
function Home() {
  useEffect(()=>{
    getProducts().then((data)=>{
      console.log("products", data);
    });
  },[])
  return (
    <div>Home</div>
  )
}

export default Home