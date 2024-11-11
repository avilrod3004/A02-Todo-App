import React from 'react'
import Todo from './Todo'

const Todos = ({todos, deleteTodo, updateTodo, orderTodos, editTodo}) => {
    //orderTodos()
    return (
        <div className='mt-4'>
            <h2 className='text-center' >Lista de tareas</h2>
            <ul className='list-group'>
                {
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
                    ))
                }
                {
                    todos.length === 0 && (
                        <li className='list-group-item text-center'>No hay tareas</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Todos