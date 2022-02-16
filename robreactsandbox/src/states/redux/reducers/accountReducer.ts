import { PayloadAction } from "@reduxjs/toolkit";

export const enum accountReducerActions {
  deposit = "deposit",
  withdraw = "withdraw",
}

//reducer - takes the action and state and updates them - kinda like a resolver I guess?
export const accountReducer = (state = 0, action: PayloadAction<number>) => {
  switch (action.type) {
    case accountReducerActions.deposit:
      return state + action.payload;
    case accountReducerActions.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
