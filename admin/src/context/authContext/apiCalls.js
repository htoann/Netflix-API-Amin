import { axiosInstance } from "./../../utils/axiosInstance";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./AuthActions";
import { toast } from "react-toastify";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
    window.location.href = "/";
    toast.info("Loading...");
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};
