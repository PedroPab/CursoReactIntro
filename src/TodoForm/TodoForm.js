import React from 'react';
import './TodoForm.css'
import { TodoContex } from '../TodosContex/TodosContex';

function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContex)
    const [newTodoValue, setNewTodoValue] = React.useState('')


    const cancelarFuncion = () => setOpenModal(state => !state)
    const onSubmitTodo = (event) => {
        event.preventDefault()
        //creamos el nuevo todod
        addTodo(newTodoValue)

        setOpenModal(state => !state)
    }

    const onChange = (event) => {
        const value = event.target.value
        setNewTodoValue(value)
    }

    return (
        <form onSubmit={onSubmitTodo}>
            <label>
                Escribe tu nuevo todo
            </label>

            <textarea
                onChange={onChange}
                placeholder='corta Cebollas con mayusculas'
            >
            </textarea>
            <div>
                <button type='button' className='buttonCancelarTodo' onClick={cancelarFuncion}>Cancelar</button>
                <button type='submit' className='buttonAceptarTodo' >Crear</button>
            </div>
        </form>
    )
}

export { TodoForm }