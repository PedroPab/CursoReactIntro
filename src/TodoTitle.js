import './TodoTile.css'

function TodoTitle({ total, complete, message }) {
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