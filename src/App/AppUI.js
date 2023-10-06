
import { TodoTitle } from '../TodoTile/TodoTitle';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateButton } from '../CreateButton/CreateButton';
import { TodoItem } from '../TodoItem/TodoItem';

function AppUi({
    loading,
    error,
    completeTodos,
    totalTodos,
    searchValue,
    messageFelicitaciones,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {


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
                {loading && <p>Cargando</p>}
                {error && <p>Error</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer todo</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        complete={todo.complete}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateButton />
        </>
    );
}

export { AppUi }