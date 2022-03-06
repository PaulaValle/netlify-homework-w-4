import "./App.css";
import React from "react";
import DisplayInfo from "./displayInfo.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <DisplayInfo />
      <footer>
        <a
          href="https://github.com/PaulaValle/paulavalleweatherappshecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source
        </a>
        Coded by
        <a
          href="https://es.linkedin.com/in/paula-valle-romero-a8869a184"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paula Valle
        </a>
      </footer>
    </div>
  );
}

export default App;
