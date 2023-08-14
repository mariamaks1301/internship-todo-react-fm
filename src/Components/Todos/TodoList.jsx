import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodosByFilter } from "../../redux/reselect";
// import { fetchTodos } from "../../redux/reducers/todo";
// import { useEffect } from "react";

import Filter from "../Filters/Filter";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filter);
    const data = useSelector(selectTodosByFilter);


    // useEffect(()=> {
    //      dispatch(fetchTodos())
    // }, [])

    return (
        <ul className="todo__list">
            {data.map((item) => (
                <TodoItem key={item.id} {...item} />
            ))}

            <Filter />
        </ul>
    );
};

export default TodoList;
