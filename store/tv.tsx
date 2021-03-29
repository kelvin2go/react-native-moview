import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import TmAxios from '../axios/tmdb';

export const fetchtv = createAsyncThunk(
    "tv/fetchtv", async (_, thunkAPI) => {
        try {
            const response = await TmAxios.get('trending/tv/week');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });


export const initialState = {
    tv: {
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
    name: 'tv',
    initialState,
    reducers: {
        gettv: (state, action) => {
            state.tv = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchtv.pending, (state) => {
            state.tv = [];
            state.loading = "loading";
        });
        builder.addCase(
            fetchtv.fulfilled, (state, { payload }) => {
                state.tv = payload;
                state.loading = "loaded";
            });
        builder.addCase(
            fetchtv.rejected, (state, action) => {
                state.loading = "error";
                state.error = action.error.message;
            });
    }
});
export default slice.reducer

// Action
// const { gettv } = slice.actions