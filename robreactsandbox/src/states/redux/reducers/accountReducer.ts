export const enum accountReducerActions {
  deposit = "deposit",
  withdraw = "withdraw",
}

interface DepositReducer {
  type: accountReducerActions.deposit;
  payload: number;
}

interface WithdrawReducer {
  type: accountReducerActions.withdraw;
  payload: number;
}

export type AccountReducerActionType = DepositReducer | WithdrawReducer;

//reducer - takes the action and state and updates them - kinda like a resolver I guess?
export const accountReducer = (state = 0, action: AccountReducerActionType) => {
  switch (action.type) {
    case accountReducerActions.deposit:
      return state + action.payload;
    case accountReducerActions.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
