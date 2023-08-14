import {createSelector} from "@reduxjs/toolkit";



export const selectAllTodos = state => state.todos.data;
export const selectActiveFilter = state => state.filter;

export const selectTodosByFilter = createSelector(
    [selectAllTodos, selectActiveFilter],
    (allTodos, activeFilter) => {
        if(activeFilter === 'all') return allTodos;
        if(activeFilter === 'completed'){
            return allTodos.filter(todo => todo.completed)
        }
        return allTodos.filter(todo => !todo.completed)
    }
);