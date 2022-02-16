import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { reducerRoot } from "./states/redux/reducers";
import {
  depositAccount,
  withdrawAccount,
} from "./states/redux/action-creators";

export function About() {
  const state = useSelector((state: reducerRoot) => state);
  const [amountVal, setAmountVal] = useState<number>(0);
  const accountDispatch = useDispatch();
  const depositAC = bindActionCreators(depositAccount, accountDispatch);
  const withdrawAc = bindActionCreators(withdrawAccount, accountDispatch);

  console.log(JSON.stringify(depositAccount));
  return (
    <>
      <span> Account Amount {state.account}</span>

      <input
        style={{ backgroundColor: "white" }}
        type="number"
        pattern="[0-9]*"
        value={amountVal}
        onChange={(val: FormEvent<HTMLInputElement>) =>
          setAmountVal(parseInt(val.currentTarget.value))
        }
      />

      <button onClick={() => depositAC(amountVal)}>Deposit</button>
      <button onClick={() => withdrawAc(amountVal)}>Withdraw</button>

      <p>About</p>
      <Link to="/">Home</Link>
    </>
  );
}
