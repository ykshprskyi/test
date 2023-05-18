import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductsCollectionRef = collection(db, "products");

export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCTS";
export const CHANGE_COUNT = "CHANGE_COUNT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const setProducts = () => ({
  type: SET_PRODUCTS,
  payload: getDocs(ProductsCollectionRef).then((data) =>
    data.docs.map((el) => ({ ...el.data(), id: el.id }))
  ),
});

export const addProduct = (productId) => ({
  type: ADD_PRODUCT,
  payload: { productId: productId },
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
  setProducts,
  addProduct,
  changeCount,
  deleteProduct,
};
