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
  const [todos] = React.useState(arrayTodos)
  const [searchValue, setSearchValue] = React.useState('')
  console.log(`los usuariso buscano con el valor de ${searchValue}`)

  const completeTodos = todos.filter(todo => !!todo.complete).length
  const totalTodos = todos.length

  

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
        {arrayTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
          />
        ))}

      </TodoList>

      <CreateButton />
    </>
  );
}



export default App;
