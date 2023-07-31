import api from "../../utils/api";

const ActionType = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
};

const getAllProducts = (products) => ({
  type: ActionType.GET_ALL_PRODUCTS,
  payload: { products },
});

const asyncGetAllProducts = () => async (dispatch) => {
  try {
    const products = await api.seeAllProducts();
    dispatch(getAllProducts(products));
  } catch (error) {
    console.log(error);
  }
};

export { ActionType, asyncGetAllProducts };
