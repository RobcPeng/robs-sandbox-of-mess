import { Link } from "react-router-dom";
import { Clock, FormTest, TestForm, Toggle } from "./components";
import { ApiSandbox } from "./components/ApiStuff";
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
      <ApiSandbox />
      <Link to="/About">About</Link>
    </>
  );
}
