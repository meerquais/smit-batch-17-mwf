import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/couter/counterSlice"
import todoReducer from "../features/todo/todoSlice"
import postsReducer from "../features/post/postsSlice"


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoReducer,
        posts:postsReducer
    }
});