import React from 'react';

import { TodoProvider } from '../TodosContex/TodosContex';
import { AppUi } from './AppUI';


function App() {

  return (
    <>

    <TodoProvider>
    <AppUi/>
    </TodoProvider>
      
    </>
  );
}



export default App;