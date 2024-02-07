import React from 'react'
import "./Todo.css"

function TodoItem({item, deleteTodo, toggleTodo}) {
  console.log(item);
  return (
    <div className='todo-item'>
      <input type='checkbox' checked={item.isCompleted} onChange={() => toggleTodo(item.id)}
      />
      <p className={item.isCompleted ? 'text' : ""}>{item.text}</p>
      <button className='btn' onClick={() => deleteTodo(item.id)}>Delete Todo</button>
    </div>
  )
}

export default TodoItem
