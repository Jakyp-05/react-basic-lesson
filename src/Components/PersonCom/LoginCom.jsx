import React, { useState } from 'react'
import "./Login.css"
import Validation from './Validation'
function LoginCom() {
  const [values, setValues] = useState ({
    name: "",
    email: "",
    password: "",
  });
  
  function handlInput(event) {
    const newObj = {...values, [event.target.name] : event.target.value}
    setValues(newObj)
  };

  const [errors, setErrors] = useState({});

  const handlValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  };

  return (
    <div className='form'>
      <h1>Register</h1>
      <form onSubmit={handlValidation}>
          <label>
              Name:
              <input type="text" name="name" placeholder='Enter your login' onChange={handlInput}/>
              {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
          </label>
          <label>
              email:
              <input  type="email" name="email" placeholder='Enter your email' onChange={handlInput}/>
              {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
          </label>
          <label>
              Password:
              <input type="password" name="password" placeholder='Enter your password' onChange={handlInput}/>
              {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
          </label>
          <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default LoginCom
