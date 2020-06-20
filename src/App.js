import React, { useState } from "react";
import ModeSelect from "./ModeSelect";
import LinesSelect from "./LinesSelect";
import LineRoadmap from "./LineRoadmap";
import "./App.css";

function App() {
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedLine, setSelectedLine] = useState(null);

  return (
    <div className="App">
      <ModeSelect
        setSelectedMode={setSelectedMode}
        selectedMode={selectedMode}
      />
      <LinesSelect
        selectedMode={selectedMode}
        selectedLine={selectedLine}
        setSelectedLine={setSelectedLine}
      />
      <LineRoadmap selectedLine={selectedLine} />
    </div>
  );
}

export default App;
