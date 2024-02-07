import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function Todo() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: todos.length + 1
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((x) => x.id !== id))
  }
  const toggleHandler = (id) => {
    setTodos (
      todos.map ((x) => x.id === id ? {...x, isCompleted: !x.isCompleted} : {...x})
    )
  }
  const clearBtn = () => {
    
  }
  const checkDelete = () => {
    setTodos(todos.filter ((x) => !x.isCompleted))
  }
  return (
    <div className='container'>
        <h1>Todo app</h1> 
        <TodoForm addTodo = {addTodoHandler} />
        <button onClick={clearBtn}>Clear</button>
        <button onClick={checkDelete}>Check Delete</button>
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleHandler}/>
    </div>
  )
}

export default Todo
