import * as API from "../api";
import { SET_PRODUCTS } from "../actions/actions";
import { ThunkAction } from "redux-thunk";
import type { Reducer } from "../reducers/reducer";
type Action = {
  type: string;
  payload?: any;
};

export type MyThunkAction = ThunkAction<void, Reducer, null, Action>;
export const getProducts = (): MyThunkAction => async (dispatch: any) => {
  // dispatch(setLoading(true));
  const products = await API.getProducts();
  dispatch({ type: SET_PRODUCTS, payload: { products } });
  //if namefilter
  // dispatch(setLoading(false));
  return products;
};
