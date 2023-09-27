
function TodoTitle() {
    return (
        <h1>
            Has completado 3 de 5
        </h1>
    )
}

function TodoSearch() {
    return (
        <input placeholder="Dormir 32 minutos" />
    )
}

function CreateButton() {
    return (
        <button>Enviar</button>
    )
}

function TodoList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}


export { TodoTitle, TodoSearch, CreateButton, TodoList }