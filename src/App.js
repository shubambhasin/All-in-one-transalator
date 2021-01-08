import React from "react";
import Main from "./Component/Main";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <Main />
      </div>
      <footer className="center">
        Made by{" "}
        <a href="https://github.com/shubambhasin" className="link flex-item">
          Shubam Bhasin
        </a>{" "}
      </footer>
    </div>
  );
}
