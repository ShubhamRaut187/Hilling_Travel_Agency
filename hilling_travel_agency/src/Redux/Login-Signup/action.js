import { ADD_USER } from "./actionTypes"

export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data
  };
};
