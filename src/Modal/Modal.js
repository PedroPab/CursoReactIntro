import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import { TodoContex } from '../TodosContex/TodosContex';

function Modal({ children }) {
    const { setOpenModal } = React.useContext(TodoContex)

    return ReactDOM.createPortal(

        <div class="modal" id="myModal">
            <div class="modal-content">
                <span class="close" id="closeModal" onClick={() => { setOpenModal(state => !state) }}>&times;</span>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };