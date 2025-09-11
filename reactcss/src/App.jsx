import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./styles/Greeting.module.css";
import Greeting from "./components/Greeting.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, welcome to our website!</h1>
    </>
  );
}

export default App;
