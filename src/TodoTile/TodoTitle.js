import React from 'react'
import './TodoTile.css'
import { TodoContex } from '../TodosContex/TodosContex'

function TodoTitle() {
    const {
        completeTodos: complete,
        totalTodos: total,
        messageFelicitaciones: message
    } = React.useContext(TodoContex)

    return (
        <h1
            className="contador">
            Has completado <span className="completado">
                {complete}
            </span> de <span className="total">
                {total}
            </span>
            <h2>{message}</h2>
        </h1>

    )
}

export { TodoTitle }