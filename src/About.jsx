import React, {useState} from 'react'

function About() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [message, setMessage] = useState("")

    const increment = () => {
        setCount (count + 1)
    }

    const decrement = () => {
        if(count > 0) {
            setCount (count - 1)
        }
    }

    const miltyplay = () => {
        const factor = parseInt(prompt("san"))
        const result = count * factor
        setCount (result)
    }

    const Send = () => {
        setMessage (text)
        setText ("")
    }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={miltyplay}>*</button>
      <br/>
      <h3>{text}</h3>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
      <button onClick={Send}>Send</button>
      <h2> Massage: {message}</h2>
    </div>
  )
}

export default About
