import React from 'react';
import './TodoSearch.css'


function TodoSearch({searchValue, setSearchValue}) {
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