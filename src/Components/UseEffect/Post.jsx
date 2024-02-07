import React from 'react'
import Main from './Main.css'

function Post({data, ubdate, onDelete}) {

  return (
    <div className='item-post'>
      <img src={data.avatar} alt={data.name}/>
      <p>{data.name}</p>
      <div className='btns'>
        <button onClick={() => ubdate(data.id)}>Update</button>
        <button onClick={() => onDelete(data.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Post
