import React from 'react';

import { TodoTitle } from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateButton } from './CreateButton';
import { TodoItem } from './TodoItem';
import { recogerTodos } from './recojerTodos';
import { updateTodos } from './updateTodos';


function App() {
  const arrayTodos = recogerTodos()

  const [todos, setTodos] = React.useState(arrayTodos)
  const [searchValue, setSearchValue] = React.useState('')
  console.log(`los usuariso buscano con el valor de ${searchValue}`)

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
      updateTodos(array)
    }
    const elimitFuncion = (key) => {
      const array = [...todos]
      const index = array.findIndex(todo => todo.text === key)
      array.splice(index, 1)
      setTodos(array)
      updateTodos(array)
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
        message={messageFelicitaciones}
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
