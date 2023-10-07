
import { TodoTitle } from '../TodoTile/TodoTitle';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateButton } from '../CreateButton/CreateButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos.js';
import { TodoContex } from '../TodosContex/TodosContex';
import React from 'react';

function AppUi() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        elimitFuncion,
    } = React.useContext(TodoContex)

    return (
        <>
            <TodoTitle
            // complete={completeTodos}
            // total={totalTodos}
            // message={messageFelicitaciones}
            />
            <TodoSearch
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading &&
                    <div>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </div>
                }
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {!loading && searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        complete={todo.complete}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => elimitFuncion(todo.text)}
                    />
                ))}
            </TodoList>



            <CreateButton />
        </>
    );
}

export { AppUi }