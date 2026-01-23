import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",

  initialState: {
    input: "",  
    arr: [],     
  },

  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },

    addTask: (state) => {
      if (state.input.trim() !== "") {
        state.arr.push(state.input);
        state.input = "";
      }
    },

     deleteTask: (state, action) => {
      state.arr.splice(action.payload, 1);
    },



    startEdit: (state, action) => {
      state.editIndex = action.payload;
      state.input = state.arr[action.payload];
    },

    updateTask: (state) => {
      if (state.editIndex !== null && state.input.trim() !== "") {
        state.arr[state.editIndex] = state.input;
        state.editIndex = null;
        state.input = "";
      }
    },
  },
});

export const { setInput, addTask,deleteTask ,  startEdit,
  updateTask,} = todoSlice.actions;
export default todoSlice.reducer;
