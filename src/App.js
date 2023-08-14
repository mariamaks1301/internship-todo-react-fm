import "./styles/style.scss";
import Filter from "./Components/Filters/Filter";
import Theme from "./Components/Theme/Theme";
import NewTodo from "./Components/Todos/NewTodo";
import TodoList from "./Components/Todos/TodoList";

import { useSelector, useDispatch } from "react-redux";


function App() {
  
  const {theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();


  return (
    <div className="App" data-theme={theme === 'dark' ? 'light' : 'dark'}>

      <div className="todo ">
        <div className="todo__row todo__top">
          <h1 className="todo__title">Todo</h1>
          <Theme/>
        </div>
        <NewTodo/>
        <TodoList/>
        
      </div>
    </div>
  );
}

export default App;
