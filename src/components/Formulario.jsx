import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Formulario = ({addTodo, todo, setTodo, editionMode, applyChanges}) => {

    //console.log(formInputs)

    const {title, description, priority, state, id} = todo;

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y descripcion son obligatorios",
            });
        }

        Swal.fire({
            title: "Tarea añadida correctamente",
            icon: "success"
        });

        if (editionMode) {
            console.log("todo nuevo")
            console.log(todo)
            applyChanges(todo)

        } else {
            addTodo({
                id: Date.now(),
                ...todo,
                state: state === "completada"
            })
        }

        console.log("enviado")
    }

    const handleChange = e => {
        console.log(e.target.name)

        const {name, value, checked, type} = e.target
        setTodo({
            ...todo, // hace una copia del objeto y sobreescribe la propiedad
            [name]: type === "checkbox" ? checked : value
        })

        //e => setTodo({...todo, title: e.target.value})
    }

    return (
        <>
            <h2>Formulario controlado</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                placeholder='Introduce la tarea'
                className="form-control mb-2"
                value={title}
                onChange={handleChange}
                />
    
                <textarea 
                name="description" 
                placeholder='Introduce la descripcion' 
                className="form-control mb-2"
                value={description}
                onChange={handleChange}
                />
    
                <select 
                name="state" 
                id=""
                className="form-control mb-2"
                value={state}
                onChange={handleChange}
                >
                    <option value="pendiente">pendiente</option>
                    <option value="completada">completada</option>
    
                </select>

                <div className='form-checked mb2'>
                    <input 
                    type="checkbox" 
                    name="priority" 
                    id="inputCheck" 
                    className='form-checked mb2'
                    checked={priority}
                    onChange={handleChange}
                    />

                    <label 
                    htmlFor="inputCheck" 
                    className='form-checked mb2'
                    >
                        Prioridad
                    </label>

                </div>
    
                <button
                type='submit'
                className="btn btn-primary"
                >
                    {editionMode ? "Guardar cambios" : "Añadir"}
                </button>
    
            </form>
        </>
      )
}

export default Formulario