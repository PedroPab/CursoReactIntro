import './TodoItem.css'


function TodoItem({ text, complete }) {
    let completado = "🎃"
    if (complete) completado = '🐸'

    return (
        <li>
            <span>{completado}</span>
            <p>{text}</p>
            <span>❌</span>
        </li>
    )
}

export { TodoItem}