import React from "react";
import "./App.css";

import TouchSlider from "./components/touchSlider";
import TravelPage from "./TravelPage";

function App() {
  return (
    <div className={"App"}>
      <TouchSlider />
      <TravelPage />
    </div>
  );
}

export default App;
