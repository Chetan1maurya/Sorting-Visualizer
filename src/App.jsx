import React from "react";
import { useState } from "react";
import SortingPage from './components/SortingPage'
import './App.css'
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort
} from './Algorithm'


const App = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("Selection Sorting");
  const [show,setShow] = useState(false)
  const algo = [
    "Selection Sorting",
    "Bubble Sorting",
    "Insertion Sorting",
    "Merge Sorting",
    "Quick Sorting",
    "Heap Sorting",
  ];
  const algoFunctions = {
  "Bubble Sorting": bubbleSort,
  "Selection Sorting": selectionSort,
  "Insertion Sorting": insertionSort,
  "Merge Sorting": mergeSort,
  "Quick Sorting": quickSort,
  "Heap Sorting": heapSort
  };


  return (
    <>
      {show ? <SortingPage funcName={algoFunctions[selectedAlgo]} name = {selectedAlgo} /> : 
      <div className="front-page">
         <h2 className="app-heading" >Sorting Visualizer</h2>
        <select
          name="algo"
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value)}
          className="drop-down"
        >
          {algo.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <button className="start" onClick={()=>setShow(true)} >Start</button>
      </div>
      }
    </>
  );
};

export default App;
