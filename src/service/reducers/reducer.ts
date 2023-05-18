import {
  ADD_PRODUCT,
  CHANGE_COUNT,
  DELETE_PRODUCT,
  SET_PRODUCTS,
} from "../actions/actions";

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
      if (state.cart.find((el) => el.id === action.payload.productId)) {
        return { ...state };
      } else {
        const productToAdd = state.products.find(
          (product) => product.id === action.payload.productId
        );
        if (!productToAdd) {
          return { ...state };
        }
        const updatedProductToAdd = {
          ...productToAdd,
          count: 1,
        };
        return {
          ...state,
          cart: [...state.cart, updatedProductToAdd],
        };
      }

    case CHANGE_COUNT:
      const productToChangeIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      const newCart = [...state.cart];
      newCart[productToChangeIndex].count = action.payload.count;
      return {
        ...state,
        cart: [...newCart],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload.productId),
      };

    default:
      return state;
  }
};

export default reducer;
export type Reducer = { products: Array<any>; cart: Array<any> };
