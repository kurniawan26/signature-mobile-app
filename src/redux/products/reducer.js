import { ActionType } from "./action";

const allProductReducer = (state, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_PRODUCTS:
      return action.payload.products;
    default:
      return state || [];
  }
};

export default allProductReducer;
