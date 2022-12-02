import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    }
  }
});

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .catch(error => console.log(error?.response?.data))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addToCartThunk = (car) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post("https://e-commerce-api.academlo.tech/api/v1/cart",car, getConfig())
    .then((res) => dispatch(getCartThunk()))
    //.catch(error => console.log(error.response.data))
    .finally(() => dispatch(setIsLoading(false)));
};

export const checkoutCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post("https://e-commerce-api.academlo.tech/api/v1/purchases",{}, getConfig())
    .then((res) => dispatch(setCart([])))
    .catch(error => console.log(error.response.data))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
