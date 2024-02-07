import React from 'react'
import "./Wrapper.css"

const Wrapper = (props) => {
  const style = {
    backgroundColor: props.color,
    width: props.width,
    padding: props.padding,
    margin: "20px auto"
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Wrapper
