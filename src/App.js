import React from 'react';

import { TodoTitle } from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateButton } from './CreateButton';
import { TodoItem } from './TodoItem';

const arrayTodos = [
  { text: `La vida es vella`, complete: false },
  { text: `Aprender ortografia`, complete: true },
  { text: `Dormir`, complete: false },
  { text: `Ir al bano`, complete: false },
]

function App() {
  const [todos, setTodos] = React.useState(arrayTodos)
  const [searchValue, setSearchValue] = React.useState('')
  console.log(`los usuariso buscano con el valor de ${searchValue}`)

  const completeTodos = todos.filter(todo => !!todo.complete).length
  const totalTodos = todos.length

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
      <TodoTitle
        complete={completeTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todoValues}
      </TodoList>

      <CreateButton />
    </>
  );
}



export default App;
