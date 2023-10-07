import React from 'react';
import { TodoContex } from '../TodosContex/TodosContex';
import './CreateButton.css'

function CreateButton() {
    const { setOpenModal } = React.useContext(TodoContex)



    return (
        <div className="custom-button-container">
            <button className='custom-button' id='openModal'
                onClick={(event) => {
                    console.log(`precionaste muy fuerte el boton`);
                    console.log(event)
                    console.log(event.target)
                    setOpenModal(state => !state)

                }}
            >Crear</button>
        </div >
    )
}

export { CreateButton }