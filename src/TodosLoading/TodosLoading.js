import React from 'react';
import './TodosLoading.css'

function TodosLoading() {
    return (
        <li className="loading-skeleton">
          <span className="loading-box"></span>
          <div className="loading-text"></div>
          <span className="loading-box"></span>
        </li>
      );
}

export { TodosLoading }