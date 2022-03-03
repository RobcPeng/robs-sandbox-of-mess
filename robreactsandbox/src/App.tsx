import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.BACKEND_URL}</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
