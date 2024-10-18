import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header"> Token Generator App</header>
      </div>
      <Home />
    </React.Fragment>
  );
}

export default App;
