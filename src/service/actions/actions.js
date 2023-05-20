import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductsCollectionRef = collection(db, "products");

export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const CHANGE_COUNT = "CHANGE_COUNT";
export const SET_CART = "SET_CART";
export const SET_USER = "SET_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: { user: user },
});

export const addProduct = (productId) => ({
  type: ADD_PRODUCT,
  payload: { productId: productId },
});
export const setCart = (cart) => ({
  type: SET_CART,
  payload: { cart: cart },
});

export const changeCount = (productId, count) => ({
  type: CHANGE_COUNT,
  payload: { productId: productId, count: count },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const actions = {
  addProduct,
  changeCount,
  deleteProduct,
  setCart,
  setUser,
};
