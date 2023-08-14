import React from 'react';
import Close from "../../images/icon-cross.svg";
import Check from "../../images/icon-check.svg";
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../redux/reducers/todo';


const TodoItem = (props) => {
    const dispatch = useDispatch();

    const {id, title, desc, completed} = props

     const makeComplete = (id) => {
          dispatch(toggleTodo(id));
     }
   




    return (
        <li id={id} className="todo__item" onClick={()=> console.log(id)}>
                  <div className="todo__item-left">
                      <div class="round">
                        <input type="checkbox" checked />
                          <input 
                              className="todo__item-check"
                              type="checkbox"
                              checked={completed}
                              onChange={() => dispatch(toggleTodo(id))}
                            //   onClick={() => dispatch(toggleTodo(id))}

                          />
                          <label htmlFor="checkbox" onClick={() => dispatch(toggleTodo(id))}></label>
                      </div>

                      <div className='todo__item-row-text'>
                          <p className="todo__item-title">Title: {title}</p>
                          <p className="todo__item-title">Desc: {desc}</p>
                      </div>

                  </div>
                  <div className="todo__item-remove" onClick={()=> dispatch(removeTodo(id))}>
                      <img src={Close} alt="" style={{ marginTop: "4px" }} />
                  </div>
              </li>
    );
};

export default TodoItem;