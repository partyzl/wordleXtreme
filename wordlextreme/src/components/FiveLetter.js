import React from "react";
import { useEffect, useState } from "react";

function FiveLetter() {
  const { wordGrid, setWordGrid } = useState([]);

  useEffect(() => {
    const initialiseGrid = () => {
      let newWordGrid = [];
      for (let i = 0; i < 6; i++) {
        newWordGrid.push([]);
      }

      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
          newWordGrid[i].push({ letter: "", state: "empty" }); //states: correct, correct-wrong position, incorrect
        }
      }
    };
    // if (wordGrid.length === 0) {
    //   initialiseGrid();
    // }
  });
  return <div>Hello</div>;
}

export default FiveLetter;
