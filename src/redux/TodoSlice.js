import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const todoSlice = createSlice({
  name: "todos",
  initialState: loadState(),
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        todo: action.payload,
        visible: false,
        edit: false,
        hideText: false,
      });

      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleVisibility: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.visible = !todo.visible;
        todo.hideText = false;
        todo.edit = false;
      }
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.edit = true;
        todo.hideText = true;
      }
    },
    saveTodo: (state, action) => {
      const { id, editedTodo } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.edit = false;
        todo.todo = editedTodo;
        todo.hideText = false;
      }
    },
    clearTodo: () => {
      return [];
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleVisibility,
  clearTodo,
  saveTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
