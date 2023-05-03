import React from 'react'
import classes from '../../styles/UI/Products.module.css'
import Image from 'next/image'

const ProductCard = ({product}) => {

    const renderImages = () => {
        return (
          <div>
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className={classes.imgContainer}
              >
                <Image
                  src={img}
                  alt="Picture of the Product"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        );
    }

  return (
    <section className={classes.container}>
        <div className={classes.card}>
            <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                {renderImages()}
            </div>
            <h3 className={classes.title}>{product.title}</h3>
            <p className={classes.description}>{product.description}</p>
        </div>
    </section>
  )
}

export default ProductCard