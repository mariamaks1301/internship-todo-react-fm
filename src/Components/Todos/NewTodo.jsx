import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/reducers/todo";
import { addNewTodo } from "../../redux/reducers/todo";

const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSumbit = (e) => {
        e.preventDefault();
        const text = e.target.title.value;
        const description = e.target.description.value;

        const newTodo = {
            title: text,
            desc: description,
            completed: false
        }
        
        if (text.trim().length) {
            dispatch(addNewTodo(newTodo));
        }

        e.target.title.value = "";
        e.target.description.value = "";
        console.log(newTodo);

    };

    return (
        <form onSubmit={handleSumbit} className="todo__form">
            <input
                className="todo__form-field"
                type="text"
                name="title"
                placeholder="New Todo"
            />
            <input 
                className="todo__form-field todo__form-field-desc"
                type="text"
                name="description"
                placeholder="Todo description"
            />
            <button className="todo__form-btn" type="submit">
                +
            </button>
        </form>
    );
};

export default NewTodo;
