import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { records: [], loading: false, error: null };
export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const res = await fetch("http://localhost:5000/post");
			const data = await res.json();
			return data;
		} catch (error) {
			console.log("error", error);
			return rejectWithValue(error.message);
		}
	}
);
const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (build) => {
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
	},
});

export default postSlice.reducer;
