import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import TmAxios from '../axios/tmdb';

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies", async (params: any, thunkAPI) => {
        console.log('calling', params)
        try {
            const response = await TmAxios.get('trending/movie/week', { params });
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
    loadedMovies: []
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
            state.movies = {
                page: 1,
                results: [],
                total_pages: 1000,
                total_results: 20000,
            };
            state.loading = "loading";
        });
        builder.addCase(
            fetchMovies.fulfilled, (state, { payload }) => {
                state.movies = payload;
                state.loadedMovies = [
                    ...state.loadedMovies,
                    ...payload.results
                ]
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
