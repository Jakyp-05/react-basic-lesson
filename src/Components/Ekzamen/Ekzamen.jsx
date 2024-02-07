import React from 'react'
import "./Ekzamen.css"

function Ekzamen({item}) {
  return (
    <div className='box'>
      <img src={item.strCategoryThumb}/>
      <button>Add To Cart</button>
      <div className='position-title'>
        <h2>{item.strCategory}</h2>
      </div>
    </div>
  )
}

export default Ekzamen
