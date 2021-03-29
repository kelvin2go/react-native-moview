import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import TmAxios from '../axios/tmdb';

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies", async (_, thunkAPI) => {
        try {
            const response = await TmAxios.get('trending/movie/week');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });


export const initialState = {
    movies: {
        page: 1,
        results: [],
        total_pages: 1000,
        total_results: 20000,
    },
    loading: 'idle',
    error: null,
}

// Slice
const slice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.movies = [];
            state.loading = "loading";
        });
        builder.addCase(
            fetchMovies.fulfilled, (state, { payload }) => {
                state.movies = payload;
                state.loading = "loaded";
            });
        builder.addCase(
            fetchMovies.rejected, (state, action) => {
                state.loading = "error";
                state.error = action.error.message;
            });
    }
});
export default slice.reducer

// Action
// const { getMovies } = slice.actions