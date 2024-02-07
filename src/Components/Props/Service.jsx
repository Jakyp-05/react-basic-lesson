import React from 'react'
import './Service.css'
function Service({item}) {
  return (
    <div className={`item-service ${item.student ? 'bg1': "bg"}`}>
        <img src={item.image}/>
        <div className='service-detail'>
            <div className='service-detail-name'>
                <h2>{item.name}</h2>
                <h3>{item.lastname}</h3>
            </div>
            <div className='service-age-country'>
                <p>{item.age}</p>
                <h2>{item.city}</h2>
            </div>
        </div>
    </div>
  )
}

export default Service
