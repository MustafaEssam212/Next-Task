import React from 'react'
import ProductList from '@/Components/UI/ProductList'

const Home = ({products}) => {

  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products')
    const {products} = await res.json()

    return {
      props: {
        products,
      },
    }
  }

export default Home