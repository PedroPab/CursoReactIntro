import React from 'react';
import { useLocalStorage } from '../utils/recojerTodos';


const TodoContex = React.createContext()


const arrayTodos = [
    { text: `La vida es vella`, complete: false },
    { text: `Aprender ortografia`, complete: true },
    { text: `Dormir`, complete: false },
    { text: `Ir al bano`, complete: true },
  ]
function TodoProvider({ children }) {

    const { item: todos, saveItem: setTodos, loading, error } = useLocalStorage({ itemName: `TODO_V1`, initialValue: arrayTodos })
    console.log(todos);
    console.log("🚀 ~ file: App.js:17 ~ App ~ todos:", todos)
    const [searchValue, setSearchValue] = React.useState('')

    const completeTodos = todos.filter(todo => !!todo.complete).length
    const totalTodos = todos.length
    const messageFelicitaciones = completeTodos >= totalTodos ? 'Feliciataicones haz completado todos los todos' : ''

    //codigo para mostra los todos en tiempso real segun la busqueda

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );


    const completFuncion = (key) => {
        const array = [...todos]
        const index = array.findIndex(todo => todo.text === key)
        array[index].complete = true
        setTodos(array)
    }
    const elimitFuncion = (key) => {
        const array = [...todos]
        const index = array.findIndex(todo => todo.text === key)
        array.splice(index, 1)
        setTodos(array)
    }



    return (
        <TodoContex.Provider value={{
            loading,
            error,
            completeTodos,
            totalTodos,
            searchValue,
            messageFelicitaciones,
            setSearchValue,
            searchedTodos,
            completFuncion,
            elimitFuncion,
        }}>
            {children}
        </TodoContex.Provider>
    )
}

function TodoConsume() {
    return (
        <TodoContex.Consume></TodoContex.Consume>
    )
}

export { TodoContex, TodoProvider, TodoConsume }