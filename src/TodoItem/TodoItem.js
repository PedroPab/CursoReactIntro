import React from 'react';
import './TodoItem.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'

function TodoItem({ text, complete, completarTodo, eliminarTodo }) {
    let completado = <AiOutlineCheck/>
    if (complete) completado = <BsFillTrash3Fill/>

    return (
        <li>
            <span onClick={completarTodo} > {completado} </span>
            <p>{text}</p>
            <span onClick={eliminarTodo}>❌</span>
        </li>
    )
}

export { TodoItem }