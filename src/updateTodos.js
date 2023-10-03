function updateTodos(todos){
    const todosRta = JSON.stringify(todos)
    localStorage.setItem('TODOS_V1', todosRta)
}

export { updateTodos}