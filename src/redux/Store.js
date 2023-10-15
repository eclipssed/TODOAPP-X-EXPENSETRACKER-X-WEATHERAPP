import { configureStore } from "@reduxjs/toolkit";
import todos from './TodoSlice'
import history from "./HistorySlice";

const store = configureStore({
    reducer: {
      todos: todos,
      history: history,
    },
  });
  
export default store;
