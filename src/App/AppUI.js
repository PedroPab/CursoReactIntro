
import { TodoTitle } from '../TodoTile/TodoTitle';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateButton } from '../CreateButton/CreateButton';

function AppUi({
    completeTodos,
    totalTodos,
    messageFelicitaciones,
    searchValue,
    setSearchValue,
    todoValues,
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
                {todoValues}
            </TodoList>

            <CreateButton />
        </>
    );
}

export { AppUi }