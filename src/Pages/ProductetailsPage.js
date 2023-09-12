import React from 'react'
import { ProductDetails } from '../features/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'

const ProductetailsPage = () => {
  const params= useParams()
  // console.log(params)
  return (
    <>
        <ProductDetails/>
    </>
  )
}

export default ProductetailsPage