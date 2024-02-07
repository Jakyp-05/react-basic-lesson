import React, {useState, useEffect} from 'react'
import User from "./User"
import UseInfo from './UseInfo'
import "./UseEffect.css"
import "./Main.css"

const Url='https://reqres.in/api/users?page=2'

const Main = () => {
  const [user, setUser] = useState([])
  const [info, setInfo] = useState({})

  useEffect(() => {
    fetch(Url) 
      .then((response) => response.json())
      .then((x) => setUser(x.data))
  } , [])

  function getUserId (id) {
    console.log(id);
    fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((x) => setInfo(x.data))
  }
  console.log(info);

  return (
    <div className='container'>
      <div className='card'>
        {
          user.map((item) => (
          <User key={item.id} data={item} getUser={getUserId}/>
        ))
        }
      </div>
      <div className='text-content'>
          <UseInfo info={info} />
      </div>
    </div>
  )
}

export default Main
