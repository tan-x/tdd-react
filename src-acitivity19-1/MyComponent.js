import React from "react";
import "./App.css";

function MyComponent(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>HEY HEY HEY {props.name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MyComponent;
