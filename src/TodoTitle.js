import './TodoTile.css'

function TodoTitle({ total, complete }) {
    return (
        <h1
            className="contador">
            Has completado <span className="completado">
                {complete}
            </span> de <span className="total">
                {total}
            </span>
        </h1>

    )
}

export { TodoTitle }