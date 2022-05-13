import {
  createApiContext,
  deleteApiContext,
  getApiContext,
  updateApiContext,
} from "../../utils/apiCall";
import * as M from "./MovieActions";

export const getMovies = async (dispatch) => {
  getApiContext(
    dispatch,
    M.getMoviesStart,
    M.getMoviesSuccess,
    M.getMoviesFailure,
    "/movies"
  );
};

export const deleteMovie = async (id, dispatch) => {
  deleteApiContext(
    dispatch,
    M.deleteMovieStart,
    M.deleteMovieSuccess,
    M.deleteMovieFailure,
    "/movies/",
    id
  );
};

export const createMovie = async (movie, dispatch) => {
  createApiContext(
    dispatch,
    M.createMovieStart,
    M.createMovieSuccess,
    M.createMovieFailure,
    "/movies",
    movie
  );
};

export const updateMovie = async (movie, dispatch) => {
  updateApiContext(
    dispatch,
    M.updateMovieStart,
    M.updateMovieSuccess,
    M.updateMovieFailure,
    `/movies/${movie._id}`,
    movie
  );
};
