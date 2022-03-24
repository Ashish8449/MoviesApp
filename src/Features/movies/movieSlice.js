import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from "../../Common/apis/Movieapi";
import { APIKEY } from "../../Common/apis/MovieapiKey";
export const fetchAsyncMovies = createAsyncThunk(
  `movies/fetchAsyncMovies`,
  async (movieText = "Harry") => {
    const res = await Movieapi.get(
      `?apiKey=${APIKEY}&s=${movieText}&type=movie`
    );

    return res.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  `movies/fetchAsyncShows`,
  async (seriesText = "Friends") => {
    const res = await Movieapi.get(
      `?apiKey=${APIKEY}&s=${seriesText}&type=series`
    ).catch((err) => console.log(err));

    return res.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await Movieapi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  loading: false,
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched sucefully movies");
      console.log(state);
      return {
        ...state,
        movies: payload,
      };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched sucefully");

      return {
        ...state,
        shows: payload,
      };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
