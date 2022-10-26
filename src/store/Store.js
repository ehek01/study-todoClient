import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../reducers/TodoSlice";

const store = configureStore({
  reducer: {
    todoReducer: todoSlice
  }
})

export default store;