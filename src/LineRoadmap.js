import React, { useState, useEffect } from "react";

const LineRoadmap = ({ selectedLine }) => {
  const [startEnd, setStartEnd] = useState([]);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${selectedLine}/Route`)
      .then((res) => res.json())
      .then((data) => setStartEnd(data));
  }, [selectedLine]);

  return (
    <div>
      {startEnd.routeSections ? (
        <div>
          <div>Start of Line : {startEnd.routeSections[0].originationName}</div>
          <div>End of line : {startEnd.routeSections[0].destinationName}</div>
        </div>
      ) : null}
    </div>
  );
};

export default LineRoadmap;
