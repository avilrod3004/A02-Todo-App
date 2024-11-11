import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Todos from './components/Todos'

const initialStateTools = JSON.parse(localStorage.getItem("todos")) || []

const valoresIniciales = {
  title: "",
  description: "",
  state: "pendiente",
  priority: false
}

export const App = () => {
  
  const [todos, setTodos] = useState(initialStateTools)
  const [editionMode, setEditionMode] = useState(false)
  const [todo, setTodo] = useState(valoresIniciales)

  const addTodo = todo => {
    orderTodos([...todos, todo])
    setTodo(valoresIniciales)
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    orderTodos(newArray)
  }

  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state
      }

      return todo
    })

    orderTodos(newArray)
  }

  const editTodo = todo => {
    console.log("intercambioooo")
    console.log(todo)
    setEditionMode(true)
    setTodo(todo)

  }

  const applyChanges = todo => {
    const newArray = todos.map(tarea => {
      if (tarea.id === todo.id) {
        tarea = todo
      }

      return tarea
    })

    setEditionMode(false)
    setTodo(valoresIniciales)
    orderTodos(newArray)
  }

  const orderTodos = (todos) => {
    const pendientesPrioritarios = todos.filter(todo => !todo.state && todo.priority)
    const pendientesNoPrioritarios = todos.filter(todo => !todo.state && !todo.priority)
    const completadasPrioritarios = todos.filter(todo => todo.state && todo.priority)
    const completadasNoPrioritarios = todos.filter(todo => todo.state && !todo.priority)
    setTodos([...pendientesPrioritarios, ...pendientesNoPrioritarios, ...completadasPrioritarios, ...completadasNoPrioritarios])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className='container mb-2'>
      <h1 className='mb-4'>Formulario</h1>
      <Formulario addTodo={addTodo} todo={todo} setTodo={setTodo} editionMode={editionMode} applyChanges={applyChanges}/>
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
    </div>
  )
}

export default App