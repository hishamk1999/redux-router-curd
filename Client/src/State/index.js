import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/postSlice";

const store = configureStore({
	reducer: { posts },
});

export default store;
