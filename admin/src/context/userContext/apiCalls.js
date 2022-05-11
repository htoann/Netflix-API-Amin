import { axiosInstance } from "../../utils/axiosInstance";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./UserActions";
import { toast } from "react-toastify";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosInstance.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axiosInstance.delete("/users/" + id);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(deleteUserFailure());
  }
};

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axiosInstance.post("/users", user);
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(createUserFailure());
  }
};

export const updateUser = async (user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axiosInstance.put(`/users/${user._id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(updateUserFailure());
  }
};
