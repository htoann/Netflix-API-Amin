import * as L from "./ListActions";
import {
  createApiContext,
  deleteApiContext,
  getApiContext,
  updateApiContext,
} from "../../utils/apiCall";

export const getLists = async (dispatch) => {
  getApiContext(
    dispatch,
    L.getListsStart,
    L.getListsSuccess,
    L.getListsFailure,
    "/lists"
  );
};

export const deleteList = async (id, dispatch) => {
  deleteApiContext(
    dispatch,
    L.deleteListStart,
    L.deleteListSuccess,
    L.deleteListFailure,
    "/lists/",
    id
  );
};

export const createList = async (list, dispatch) => {
  createApiContext(
    dispatch,
    L.createListStart,
    L.createListSuccess,
    L.createListFailure,
    "/lists",
    list
  );
};

export const updateList = async (list, dispatch) => {
  updateApiContext(
    dispatch,
    L.updateListStart,
    L.updateListSuccess,
    L.updateListFailure,
    `/lists/${list._id}`,
    list
  );
};
