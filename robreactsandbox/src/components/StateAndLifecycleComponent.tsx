import { Component, useEffect, useState } from "react";

//what do the props look like?
interface ClockInterface {}

//what does the state look like?
interface ClockState {
  date: Date;
  timerId?: any;
}

//passing in the interfaces to describe prop and state
export default class Clock extends Component<ClockInterface, ClockState> {
  //   date = new Date(Date.now()).toLocaleTimeString();
  constructor({ props }: { props: ClockInterface }) {
    super(props);
    this.state = { date: new Date(), timerId: null };
  }

  // lifecycle method for when a component has been rendered to the DOM
  // The docs say it's a good place to put a timer soo...
  componentDidMount() {
    this.setState({ timerId: setInterval(() => this.tick(), 1000) });
  }

  // teardown for unmounting the component
  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <>
        <h1>Hi the current time is {this.state.date.toLocaleTimeString()}</h1>
      </>
    );
  }
}

//functionally the same as above, but with useeffect replacing lifecycle
// this is soooo much more clean
export function ClockFuncComponent() {
  const [clockState, setClockState] = useState(new Date());

  const tick = () => {
    setClockState(new Date());
  };

  //use effect here replaces the need for lifecycle functions
  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return (
    <>
      <p> hi, it is currently {clockState.toLocaleTimeString()}</p>
    </>
  );
}

//Functions to re-render

//

// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// }

// setInterval(tick, 1000);

// but this isn't encapsulated
