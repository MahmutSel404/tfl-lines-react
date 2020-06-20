import React, { useState, useEffect } from "react";

const LinesSelect = ({ selectedMode, selectedLine, setSelectedLine }) => {
  const [lines, setLines] = useState([]);
 
  useEffect(() => {
    if (selectedMode) {
      fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
        .then((res) => res.json())
        .then((data) => setLines(data));
    }
  }, [selectedMode]);
  const changeHandler = (event) => {
    setSelectedLine(event.target.value);
  };
  return (
    <div>
      <select onChange={changeHandler}>
        <option>Choose a Line </option>
        {lines.map((element, index) => {
          return <option key={index}>{element.name}</option>;
        })}
      </select>
      <p>You selected line : {selectedLine}</p>
    </div>
  );
};

export default LinesSelect;
