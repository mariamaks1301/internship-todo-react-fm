import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

//  export const fetchTodos = createAsyncThunk(
//      "@@todos/fetchTodos",
//      async function (_, { rejectWithValue }) {
//          try {
//              const res = await axios("http://localhost:8080/todos");
//              if (res.statusText !== "OK") {
//                  throw new Error("Can't fetch tods");
//              }
//              return await res.data;
//          } catch (error) {
//              return rejectWithValue(error.message);
//          }
//      }
//  );

export const addNewTodo = createAsyncThunk(
    "@@todos/addNewTodo",
    async (newTodo, { rejectWithValue, dispatch, getState}) => {

          const todoList = getState().todos.data

        //  let newTodo = {
        //      title: text,
        //      completed: false,
        //  }

        try {
             const res = await axios.post(`http://localhost:8080/todos`, newTodo);
             console.log(res.data);

             if (res.statusText !== 'Created') {
                 throw new Error("Can't add new todo!");
             }
            const todoData = await res.data;
       
            return [...todoList, todoData]

            // dispatch(addTodo(newTodo));
           
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

 export const removeTodo = createAsyncThunk(
     "@@todos/removeTodo",
     async (id, { rejectWithValue, dispatch, getState }) => {   
        
        const todoList = getState().todos.data

         try {
             const res = await axios.delete(`http://localhost:8080/todos/${id}`);

             if (res.statusText !== 'OK') {
                 throw new Error("Can't remove choosen todo!");
             }
 
             return todoList.filter(item => item.id !== id)

         } catch (error) {
             return rejectWithValue(error.message);
         }
     }
 );

  export const toggleTodo = createAsyncThunk(
      "@@todos/toggleTodo",
      async (id, { rejectWithValue, dispatch, getState}) => {   
        
        const todoList = getState().todos.data
         const toggledTodo = todoList.filter(item => item.id !== id)
        
        
          try {
              const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
                completed: !toggledTodo.completed
              });


              if (res.status !== 200) {
                  throw new Error("Can't toggle check todo");
              }

            const data =  await res.data
            dispatch(toggleCheck(data))
            return data

          } catch (error) {
              return rejectWithValue(error.message);
          }
      }
  );
 // export const resetTodos = createAsyncThunk(
 //    '@@todos/resetTodos',
//     async (_, {rejectWithValue, dispatch}) => {
//         try {
//             const res = await axios.delete('http://localhost:8080/todos');

//             if(!res.ok){
//                 throw new Error('Can\'t  reset todo list')
//             }
//             const data = await res.data;
//             dispatch(resetLocalTodos(data));
//             return data;
            
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )

const initialState = {
    data: [],
    status: "",
    error: "",
    filter: "all"
};

const todoSlice = createSlice({
    name: "@@todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.data.push(action.payload);
            
        },
        toggleCheck: (state, action) => {
            const toggledTodo = state.data.find(
                (todo) => todo.id === action.payload.id
            );
            toggledTodo.completed = !toggledTodo.completed;
        },
        deleteTodo: (state, action) => {
            state.data = state.data.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
        resetTodos: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchTodos.pending, (state) => {
            //     state.status = "loading";
            //     state.error = null;
            // })
            // .addCase(fetchTodos.fulfilled, (state, action) => {
            //     state.data = action.payload
            //     state.status = "done";
            // })
            // .addCase(fetchTodos.rejected, (state, action) => {
            //     state.error = action.payload;
            //     state.status = "error";
            // })
            .addCase(addNewTodo.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "done";
            })
            .addCase(addNewTodo.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "error";
            })
            .addCase(removeTodo.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "done";
            })
            .addCase(removeTodo.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "error";
            });
    },
});

export const { addTodo, deleteTodo, toggleCheck, resetTodos, showVisibleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;









