import './TodoItem.css'


function TodoItem({ text, complete, completarTodo , eliminarTodo}) {
    let completado = "🎃"
    if (complete) completado = '🐸'

    return (
        <li>
            <span onClick={() => completarTodo()} >{completado}</span>
            <p>{text}</p>
            <span onClick={() => eliminarTodo()}>❌</span>
        </li>
    )
}

export { TodoItem }