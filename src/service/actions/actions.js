import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductsCollectionRef = collection(db, "products");

export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCTS";

export const setProducts = () => ({
  type: SET_PRODUCTS,
  payload: getDocs(ProductsCollectionRef).then((data) =>
    data.docs.map((el) => ({ ...el.data(), id: el.id }))
  ),
});

export const addProduct = (products, productId) => ({
  type: ADD_PRODUCT,
  peyload: { products: products, productId: productId },
});

export const actions = {
  setProducts,
};
