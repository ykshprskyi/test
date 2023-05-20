import * as API from "../api";
import { ThunkAction } from "redux-thunk";
import type { Reducer } from "../reducers/reducer";
type Action = {
  type: string;
  payload?: any;
};

export type MyThunkAction = ThunkAction<void, Reducer, string, Action>;
export const addOrder =
  (guestData): MyThunkAction =>
  async (dispatch: any, getState) => {
    const { cart, user } = getState();
    let userId = user?.uid;
    if (!userId) {
      userId = (await API.addGuest(guestData)).id;
      API.addOrder(userId, cart);
    } else {
      API.addOrder(userId, cart);
    }
  };
