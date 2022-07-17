import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // console.log(process.env);
  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
