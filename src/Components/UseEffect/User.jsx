import React from 'react'
import "./UseEffect.css"

const User = ({data, getUser}) => {
  return (
    <div onClick={() => getUser(data.id)} className='content'>
      <img src={data.avatar} alt='image'/>
      <h2>{data.last_name}</h2>
    </div>
  )
}

export default User
