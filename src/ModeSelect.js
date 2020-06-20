import React, { useState, useEffect } from "react";

const ModeSelect = ({ selectedMode, setSelectedMode }) => {
  const [modes, setModes] = useState([]);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setModes(data));
  }, []);

  const changeHandler = (event) => {
    setSelectedMode(
      event.target.selectedIndex === 0 ? null : event.target.value
    );
  };

  return (
    <div>
      <select onChange={changeHandler}>
        <option>Select the Transport</option>
        {modes.map((element, index) => {
          return <option key={index}>{element.modeName}</option>;
        })}
      </select>
      <p>
        You selected mode:
        {selectedMode}
      </p>
    </div>
  );
};

export default ModeSelect;
