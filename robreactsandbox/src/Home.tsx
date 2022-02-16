import { Link } from "react-router-dom";
import { Clock, FormTest, TestForm, Toggle } from "./components";
import { ToggleFuncComponent } from "./components/EventComponent";
import { ClockFuncComponent } from "./components/StateAndLifecycleComponent";

export function Home() {
  return (
    <>
      <Clock />
      <TestForm />
      <Toggle />
      <ToggleFuncComponent />
      <FormTest>
        <p>hi</p>
      </FormTest>
      <ClockFuncComponent />
      <Link to="/About">About</Link>
    </>
  );
}
