import React from "react";
import { useDispatch } from "react-redux";
import { resetTodos } from "../../redux/reducers/todo";

const ResetApp = () => {
  const dispatch = useDispatch()
  return <p className="todo__filter todo__filter-reset" onClick={()=> dispatch(resetTodos())}>Reset</p>;
};

export default ResetApp;
