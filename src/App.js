import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setModes(data));
  }, []);

  const changeHandler = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changeHandler}>
        <option> Select the Transport </option>
        {modes.map((element, index) => {
          return <option key={index}>{element.modeName}</option>;
        })}
      </select>
      <h1>You selected mode:{selectedMode }</h1>
    </div>
  );
}

export default App;
