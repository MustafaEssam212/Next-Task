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

export default Home



// export default function Products({ product }) {

//   return <>
//       <h1 className="title"> list of products </h1>
      
//       <div className="constainer">

//           {product.map(product => {
//               const [imag] = product.images
//               return (
//                   <>
//                       <div className="product-container" key={product.id}>
//                           <img className="product-img" src={imag} alt="" />
//                           <p className="product-title">{product.title}</p>
//                           <p className="product-description">{product.description}</p>
//                       </div>

//                   </>
//               )

//           })}
//       </div>

//   </>
// }

// export async function getStaticProps() {
//   const response = await fetch('https://dummyjson.com/products')
//   const data = await response.json();
//   const productItem = data.products
//   return {
//       props:
//       {
//           product: productItem,
//       }

//   }
// }