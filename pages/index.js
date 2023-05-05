import React from 'react'
import ProductList from '@/Components/UI/ProductList'

const Home = ({product}) => {

  return (
    <div>
        <ProductList products={product}/>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json();
  const productItem = data.products
  return {
      props:
      {
          product: productItem,
      }

  }
}
Home.Layout = "L1"

export default Home
