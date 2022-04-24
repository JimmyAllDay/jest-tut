import React from "react";
import Button from "./components/button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="spam">Tinned Meat</h1>
        <Button label="Click here" />
        <ul>
          <li>Superb</li>
          <li>Fox</li>
          <li>Malevolent</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
