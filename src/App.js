import React from "react";
import Login from "./components/login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header data-testid="App-header" className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
