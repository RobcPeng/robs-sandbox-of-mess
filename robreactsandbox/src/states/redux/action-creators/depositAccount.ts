import { Dispatch } from "redux";
import {
  accountReducerActions,
  AccountReducerActionType,
} from "../reducers/accountReducer";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;

export const depositAccount = (amount: number) => {
  return (dispatch: Dispatch<AccountReducerActionType>) => {
    console.log("hi");
    dispatch({
      type: accountReducerActions.deposit,
      payload: amount,
    });
  };
};

export const withdrawAccount = (amount: number) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: accountReducerActions.withdraw,
      payload: amount,
    });
  };
};
