import React from "react";
import { useEffect, useState,useRef } from "react";
import "./Sorting.css";
// import Graph from './graph.jsx'
import AITech from './AIcomponent'
const SortingPage = ({ funcName , name}) => {
  const [arr, setArr] = useState([]);
  const [compIndices, setCompIndices] = useState([]);
  const [step, setStep] = useState("");
  const [comparison, setComparison] = useState(0);
  const [message, setMessage] = useState("");
  const [paused,setPaused] = useState(false);
  const pausedRef = useRef(false);
  
  const time_complexity = {
    bubbleSort: "O(n²)",
    selectionSort: "O(n²)",
    insertionSort: "O(n²)",
    mergeSort: "O(n log n)",
    quickSort: "O(n log n)",
    heapSort: "O(n log n)",
  };
  const space_complexity = {
    bubbleSort: "O(1)",
    selectionSort: "O(1)",
    insertionSort: "O(1)",
    mergeSort: "O(n)",
    quickSort: "O(log n)",
    heapSort: "O(1)",
  };
  const details = {
    bubbleSort: "Inplace, Stable",
    selectionSort: "Inplace, not stable",
    insertionSort: "Inplace, Stable",
    mergeSort: "Not inplace, Stable",
    quickSort: "Inplace, not stable",
    heapSort: "Inplace, not stable",
  };

  const waitWhilePaused = async() => {
     while(pausedRef?.current){
      await new Promise(res => setTimeout(res,100));
     }
  }
  useEffect(()=>{
    pausedRef.current = paused;
  },[paused])
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 10; i++) {
      const elem = Math.floor(Math.random() * 30) + 1;
      temp.push(elem);
    }
    setArr(temp);
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-box">
          <div className="box1">
            <div className="graph">
              {arr.map((num, index) => (
                <div
                  className={`bar ${
                    compIndices.includes(index) ? "comparing" : ""
                  }`}
                  key={index}
                  // style={{ height: `${num * 18 + 30}px` }}
                  style={{ height: `${num+2}rem` }}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="buttons">
              <button className="graph-control" onClick = {() => setPaused(!paused)}>{paused?'Resume':'Pause'}</button>
              <button className="graph-control"
                onClick={() =>
                  funcName(arr, setArr, setCompIndices, setStep, setComparison,setMessage,waitWhilePaused)
                }
              >
                {paused?'Restart':'Start'}
              </button>
            </div>
          </div>
          <h1>{name}</h1>
        </div>
        <div className="details-box">
          <div className="row1">
            <div className="detail-card">
              Time Complexity
              Space Complexity
              <button className="getInfo">Comming Soon</button>
            </div>
            <div className="detail-card">
              Number of Comparision are{" "}
              <span style={{ color: "white", fontSize: "60px" }}>
                {comparison}{" "}
              </span>
            </div>
          </div>
          <div className="row2">
            <div className="detail-card">
              Enter Custom Data{" "}
              <button className="getInfo">Comming Soon</button>
            </div>
            <div className="detail-card">
              <AITech />
              <button className="getInfo">Comming Soon</button>
            </div>
          </div>
          <div className="box2">
            <h2 className="box2-heading">Steps Involved</h2>
            <p>{step}</p>
            {message && (
              <div
                className="sort-message"
                style={{
                  marginTop: "20px",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingPage;
