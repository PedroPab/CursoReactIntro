import logo from './platzi.webp';
import './App.css';
import { CreateButton, TodoList, TodoSearch, TodoTitle } from './TodoCounter';

function App() {
  return (
    <div className="App">
      <TodoTitle />
      <TodoSearch />

      <TodoList>

        <TodoItem />
        <TodoItem />
        <TodoItem />

      </TodoList>

      <CreateButton />

    </div>
  );
}


export function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar porque  esta es vida es muy linda</p>
      <span>X</span>
    </li>
  )
}

export default App;
