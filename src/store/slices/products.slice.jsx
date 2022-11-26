
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    }
  }
});



export const getNewsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterNewsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.categories)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterHeadlineThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`)
    .then((res) => dispatch(setProducts(res.data.data.product)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;