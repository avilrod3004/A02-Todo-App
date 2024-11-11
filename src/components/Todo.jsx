import React from 'react'

const Todo = ({todo, deleteTodo, updateTodo, editTodo}) => {

    const {title, description, priority, state, id} = todo;


  return (
    <li className='list-group-item'>
        <div className='d-flex justify-content-between align-items-start'>
            <div>
                <h5 className={state? "completada" : undefined}>{title}</h5>
                <p className={state? "completada" : undefined}>{description}</p>
                <div className='d-flex'>
                    <button className='btn btn-sm btn-primary mr-2' onClick={() => editTodo(todo)}>Editar</button>
                    <button className='btn btn-sm btn-danger mr-2' onClick={() => deleteTodo(id)}>Eliminar</button>
                    <button className='btn btn-sm btn-warning' onClick={() => updateTodo(id)}>Actualizar</button>
                </div>
            </div>
            <span className='badge rounded-pill text-bg-primary'>{priority && "Prioridad"}</span>
        </div>
    </li>
  )
}

export default Todo