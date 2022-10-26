import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {refresh: false},
  reducers: {
    changeRefresh: (state) => {
      state.refresh = !state.refresh;
      console.log('changeRefresh!!!');
    }
  }
})

export const {changeRefresh} = todoSlice.actions;
export default todoSlice.reducer;