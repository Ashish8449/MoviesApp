import { configureStore } from "@reduxjs/toolkit"
import movieSliceReducer from "../Features/movies/movieSlice"
export const store = configureStore({
    reducer: movieSliceReducer
})