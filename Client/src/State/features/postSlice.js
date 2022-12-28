import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { records: [], loading: false, error: null };
//Get Posts from database
export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const res = await fetch("http://localhost:5000/posts");
			const data = await res.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
// Delete post from database
export const deletePost = createAsyncThunk(
	"posts/deletePost",
	async (id, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			await fetch(`http://localhost:5000/posts/${id}`, {
				method: "Delete",
			});
			return id;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (build) => {
		// fetch posts
		build.addCase(fetchPosts.pending, (state, action) => {
			state.loading = true;
			state.error = null;
		});
		build.addCase(fetchPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.records = action.payload;
		});
		build.addCase(fetchPosts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
		// Delete post
		build.addCase(deletePost.pending, (state, action) => {
			state.loading = true;
			state.error = null;
		});
		build.addCase(deletePost.fulfilled, (state, action) => {
			state.loading = false;
			state.records = state.records.filter(
				(record) => record.id !== action.payload
			);
		});
		build.addCase(deletePost.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export default postSlice.reducer;
