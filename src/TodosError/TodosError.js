import React from 'react';
import './TodosError.css'


function TodosError() {
    return (
        <div className="error-skeleton">
            <span className="error-icon">⚠️</span>
            <div className="error-message">Error al cargar los datos.</div>
        </div>
    );
}

export { TodosError }