import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

import LoginScreen from "./screens/LoginScreen";

function App() {
  // console.log(process.env);
  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
