import { store } from "../store";
import { depositAccount, withdrawAccount } from "./depositAccount";

export type AppDispatch = typeof store.dispatch;
export { depositAccount, withdrawAccount };
