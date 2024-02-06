import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
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
  },
});
export const { addTodo, deleteTask, toggoleComplete, editTask } =
  todoSlice.actions;
export default todoSlice.reducer;
