import { axiosInstance } from "../../utils/axiosInstance";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess,
} from "./ListActions";
import { toast } from "react-toastify";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axiosInstance.get("/lists");
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axiosInstance.delete("/lists/" + id);
    dispatch(deleteListSuccess(id));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(deleteListFailure());
  }
};

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axiosInstance.post("/lists", list);
    dispatch(createListSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(createListFailure());
  }
};

export const updateList = async (list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axiosInstance.put(`/lists/${list._id}`, list);
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(updateListFailure());
  }
};
