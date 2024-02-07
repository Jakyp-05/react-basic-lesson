import React from 'react'
import './Product.css'

function Product(props) {
  const {title, age, price, discount, image, brand} = props
  return (
    <div className='product-card'>
      <div className='box-product'>
        <div className='image-product'>
          <img src={image} alt={title}/>
        </div>
        <div className='title-product'>
          <div className='title-box'>
            <h2>{title}</h2>
            <h2>{age}</h2>
            <p className='brand'>{brand}</p>
          </div>
          <div className='price-box'>
            <p>{price} <span>{discount}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
