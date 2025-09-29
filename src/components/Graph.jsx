import React from "react";
import { useEffect, useRef, useState } from "react";
import "./CSS files/Sorting.css";
const Graph = ({
  arr,
  compIndices,
  paused,
  setPaused,
  funcName,
  name,
  setArr,
  setMessage,
  setStep,
  setCompIndices,
  setComparison,
  waitWhilePaused,
}) => {
  // const [step, setStep] = useState("");
  // const [message, setMessage] = useState("");
  const [speed, setSpeed] = useState(1);
  const speedRef = useRef(1);
  const handleSpeed = (val, name) => {
    if (name == "dec" && val >= 1) {
      speedRef.current = val;
      setSpeed(val);
    }
    if (name == "inc" && val <= 2) {
      speedRef.current = val;
      setSpeed(val);
    }
  };
  return (
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
              style={{ height: `${num + 7}vmax` }}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="graph-control" onClick={() => setPaused(!paused)}>
            {paused ? "Resume" : "Pause"}
          </button>
          <button
            className="graph-control"
            onClick={() =>
              funcName(
                arr,
                setArr,
                setCompIndices,
                setStep,
                setComparison,
                setMessage,
                speedRef,
                waitWhilePaused
              )
            }
          >
            Start
          </button>
        </div>
        <div className="speed-control">
          <button
            className="incdec"
            onClick={() => handleSpeed(speed - 0.5, "dec")}
          >
            -
          </button>
          <button
            className="speed"
            style={{ width: "10px" }}
            onClick={() => handleSpeed(speed + 0.5)}
          >
            {speed}
          </button>
          <button
            className="incdec"
            onClick={() => handleSpeed(speed + 0.5, "inc")}
          >
            +
          </button>
        </div>
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default Graph;
