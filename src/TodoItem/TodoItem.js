import React from 'react';
import './TodoItem.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'

function TodoItem({ text, complete, onComplete, onDelete }) {
    let completado = <AiOutlineCheck/>
    if (complete) completado = <BsFillTrash3Fill/>
    return (
        <li>
            <span onClick={onComplete} > {completado} </span>
            <p>{text}</p>
            <span onClick={onDelete}>❌</span>
        </li>
    )
}

export { TodoItem }