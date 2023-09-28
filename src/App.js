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
  return (
    <>
      <TodoTitle
        complete={100}
        total={85}
      />
      <TodoSearch />

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
