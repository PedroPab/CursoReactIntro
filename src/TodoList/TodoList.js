import './TodoList.css'

function TodoList(props) {
    return (
        <ul className='tarjetas'>
            {props.children}
        </ul>
    )
}

export { TodoList}