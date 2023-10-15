import { createSlice } from "@reduxjs/toolkit";

// Load state from local storage, if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("history");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const historySlice = createSlice({
  name: "history",
  initialState: loadState(),
  reducers: {
    handleHistory: (state, action) => {
      const { text, amount, withdraw } = action.payload;
      state.unshift({
        id: Date.now(),
        text: text,
        amount: "$" + amount,
        withdraw: withdraw,
      });
      localStorage.setItem("history", JSON.stringify(state));
    },
    clearHistory: (state) => {
      state = [];
      localStorage.setItem("history", JSON.stringify(state));
      return [];
    },
  },
});

export const { handleHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
