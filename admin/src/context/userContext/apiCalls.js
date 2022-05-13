import * as U from "./UserActions";
import {
  createApiContext,
  deleteApiContext,
  getApiContext,
  updateApiContext,
} from "../../utils/apiCall";

export const getUsers = async (dispatch) => {
  getApiContext(
    dispatch,
    U.getUsersStart,
    U.getUsersSuccess,
    U.getUsersFailure,
    "/users"
  );
};

export const deleteUser = async (id, dispatch) => {
  deleteApiContext(
    dispatch,
    U.deleteUserStart,
    U.deleteUserSuccess,
    U.deleteUserFailure,
    "/users/",
    id
  );
};

export const createUser = async (user, dispatch) => {
  createApiContext(
    dispatch,
    U.createUserStart,
    U.createUserSuccess,
    U.createUserFailure,
    "/register",
    user
  );
};

export const updateUser = async (user, dispatch) => {
  updateApiContext(
    dispatch,
    U.updateUserStart,
    U.updateUserSuccess,
    U.updateUserFailure,
    `/users/${user._id}`,
    user
  );
};
