import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  filteredTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggoleComplete: (state, action) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task.isCompleted = !task?.isCompleted;
    },
    editTask: (state, action) => {
      console.log({ action });
      const task = state.todos.find((item) => item.id === action.payload.id);
      console.log(task);
      task.title = action.payload.title;
      task.priority = action.payload.priority;
    },
    filterTask: (state, action) => {
      const filterValue = action.payload.toLowerCase();
      if (filterValue === "all") {
        state.filteredTodos = state.todos;
      } else if (filterValue === "complete") {
        state.filteredTodos = state.todos.filter((todo) => todo.isCompleted);
      } else if (filterValue === "incomplete") {
        state.filteredTodos = state.todos.filter((todo) => !todo.isCompleted);
      }
    },
  },
});
export const { addTodo, deleteTask, toggoleComplete, editTask, filterTask } =
  todoSlice.actions;
export default todoSlice.reducer;
