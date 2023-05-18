import { ADD_PRODUCT, SET_PRODUCTS } from "../actions/actions";

export const initialState = {
  products: [],
  cart: [],
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case ADD_PRODUCT:
      if (state.cart.find((el) => el.id === action.payload.albumId)) {
        return { ...state };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            action.payload.products.find(
              (product) => product.id === action.payload.albumId
            ),
          ],
        };
      }
    default:
      return state;
  }
};

export default reducer;
export type Reducer = { products: Array<any>; cart: Array<any> };
