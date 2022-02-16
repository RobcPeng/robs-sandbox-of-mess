import React, { Component, FormEvent, ReactNode, useState } from "react";

export function TestForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitttttted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

interface ToggleProps {}

interface StateProps {
  toggle: boolean;
}

export class Toggle extends Component<ToggleProps, StateProps> {
  constructor(props: ToggleProps) {
    super(props);
    this.state = { toggle: false };

    //Class methods are not bound to this by default
    // need to bind methods to local scope to call
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({
      toggle: !prev.toggle,
    }));
  }

  render(): ReactNode {
    return (
      <>
        <button onClick={this.handleClick}>
          Toggle Val: {this.state.toggle ? "on" : "off"}
        </button>
      </>
    );
  }
}

type propInputs = {
  children: React.ReactChild;
};

export function ToggleFuncComponent() {
  const [toggle, setToggle] = useState(false);
  return (
    <button onClick={() => setToggle(!toggle)}>
      Toggle {toggle ? "on" : " off"}
    </button>
  );
}

export function FormTest<T extends propInputs>(props?: T) {
  const [val, setVal] = useState<string>("");
  return (
    <>
      {props?.children}
      <form>
        <input
          value={val}
          onInput={(tempVal: FormEvent<HTMLInputElement>) =>
            setVal(tempVal.currentTarget.value)
          }
        />
      </form>
    </>
  );
}
