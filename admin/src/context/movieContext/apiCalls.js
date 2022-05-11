import { axiosInstance } from "../../utils/axiosInstance";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
} from "./MovieActions";
import { toast } from "react-toastify";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axiosInstance.get("/movies");
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axiosInstance.delete("/movies/" + id);
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(deleteMovieFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axiosInstance.post("/movies", movie);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(createMovieFailure());
  }
};

export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axiosInstance.put(`/movies/${movie._id}`, movie);
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(updateMovieFailure());
  }
};
