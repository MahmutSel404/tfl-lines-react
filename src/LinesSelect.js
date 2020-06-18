import React, { useState, useEffect } from "react";

const LinesSelect = ({ selectedMode }) => {
  const [lines, setLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);

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
      <h1>You selected line : {selectedLine}</h1>
      
    </div>
  );
};

export default LinesSelect;
