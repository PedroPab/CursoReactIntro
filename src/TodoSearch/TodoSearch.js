import React from 'react';
import './TodoSearch.css'
import { TodoContex } from '../TodosContex/TodosContex';


function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContex)

    console.log(`los usuariso buscano con el valor de ${searchValue}`)

    return (
        <input
            type="text"
            className="custom-input"
            placeholder="Dormir 32 minutos"
            value={searchValue}
            onChange={(event) => {
                const cambio = event.target.value
                setSearchValue(cambio)

            }}
        />
    )
}

export { TodoSearch }