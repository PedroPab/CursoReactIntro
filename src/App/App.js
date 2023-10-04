import React from 'react';

import { AppUi } from './AppUI';
import { TodoItem } from '../TodoItem/TodoItem';
import { UselocalStorage } from '../utils/recojerTodos';


const arrayTodos = [
  { text: `La vida es vella`, complete: false },
  { text: `Aprender ortografia`, complete: true },
  { text: `Dormir`, complete: false },
  { text: `Ir al bano`, complete: false },
]
function App() {
  const [todos, setTodos] = UselocalStorage({ itemName: `TODO_V1`, valueInit: arrayTodos })

  const [searchValue, setSearchValue] = React.useState('')

  const completeTodos = todos.filter(todo => !!todo.complete).length
  const totalTodos = todos.length
  const messageFelicitaciones = completeTodos >= totalTodos ? 'Feliciataicones haz completado todos los todos' : ''

  //codigo para mostra los todos en tiempso real segun la busqueda
  const searchTodos = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()))
  const todoValues = searchTodos.map((todo, i, array) => {

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
      <TodoItem
        key={todo.text}
        text={todo.text}
        complete={todo.complete}
        completarTodo={() => { completFuncion(todo.text) }}
        eliminarTodo={() => { elimitFuncion(todo.text) }}
      />
    )
  })


  return (
    <>
      <AppUi
        completeTodos={completeTodos}
        totalTodos={totalTodos}
        messageFelicitaciones={messageFelicitaciones}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todoValues={todoValues}
      />
    </>
  );
}



export default App;