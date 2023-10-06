import React from 'react';

import { AppUi } from './AppUI';
import { UselocalStorage } from '../utils/recojerTodos';


const arrayTodos = [
  { text: `La vida es vella`, complete: false },
  { text: `Aprender ortografia`, complete: true },
  { text: `Dormir`, complete: false },
  { text: `Ir al bano`, complete: true },
]
function App() {

  const { item: todos, updateItem: setTodos, loading, error } = UselocalStorage({ itemName: `TODO_V1`, valueInit: arrayTodos })

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
  console.log("🚀 ~ file: App.js:32 ~ App ~ searchedTodos:", searchedTodos)


  const completFuncion = (key) => {
    console.log(`hola esto seio cmpletse ${key}`)
    
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
    <>
      <AppUi
        loading={loading}
        error={error}
        completeTodos={completeTodos}
        totalTodos={totalTodos}
        messageFelicitaciones={messageFelicitaciones}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completFuncion}
        deleteTodo={elimitFuncion}
      />
    </>
  );
}



export default App;