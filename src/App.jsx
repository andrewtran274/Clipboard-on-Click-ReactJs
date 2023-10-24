import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        alert("Copy Text...");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <div className="app">
      <h2>Clipboard</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your text..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleCopyClick} className="copy-btn">
          Copy
        </button>
      </div>
    </div>
  );
};

export default App;
