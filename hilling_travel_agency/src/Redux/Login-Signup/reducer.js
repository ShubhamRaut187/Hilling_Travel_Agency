import { ADD_USER } from "./actionTypes"

const initVal = {
  users: []
};

const reducer = (store = initVal, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...store,
        users: [...store.users, action.payload]
      };
    default:
      return store;
  }
};

export default reducer;
