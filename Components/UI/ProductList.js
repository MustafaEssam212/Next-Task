import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div>
        {products.map(product => {
            return (
                <div key={product.id} >
                <ProductCard product={product}/>
            </div>
            )
        })}
    </div>
  )
}

export default ProductList