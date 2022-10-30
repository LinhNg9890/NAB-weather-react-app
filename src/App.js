import React from "react";
import './App.css';
import Weather from "./components/Weather/Weather";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="navbar-main">
          <h1>NAB Weather Application Test</h1>
      </div>
        <Weather />
    </div>
  );
}

export default App;
