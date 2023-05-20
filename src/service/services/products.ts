import * as API from "../api";
import { SET_PRODUCTS, FILTER_PRODUCTS } from "../actions/actions";
import { ThunkAction } from "redux-thunk";
import type { Reducer } from "../reducers/reducer";
type Action = {
  type: string;
  payload?: any;
};

export type MyThunkAction = ThunkAction<void, Reducer, string, Action>;
export const getProducts = (): MyThunkAction => async (dispatch: any) => {
  const products = await API.getProducts();
  dispatch({ type: SET_PRODUCTS, payload: { products } });
  return products;
};

export const filterProducts =
  (nameFilter: string | null): MyThunkAction =>
  async (dispatch: any) => {
    const products = await API.filterProducts(nameFilter);
    dispatch({ type: FILTER_PRODUCTS, payload: { products } });
    return products;
  };
