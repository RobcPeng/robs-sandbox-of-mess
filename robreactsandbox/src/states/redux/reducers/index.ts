import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";

export const reducers = combineReducers({
  account: accountReducer,
});

// return type of the output
//https://www.typescriptlang.org/docs/handbook/utility-types.html
export type reducerRoot = ReturnType<typeof reducers>;
