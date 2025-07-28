import React from "react";
import { useEffect, useState,useRef } from "react";
import "./Sorting.css";
import Graph from './Graph.jsx'
import AITech from './AIcomponent'
import TCModal from './TCModal.jsx'
import AIModal from './AIModal.jsx'

const SortingPage = ({ funcName , name}) => {
  const [arr, setArr] = useState([]);
  const [compIndices, setCompIndices] = useState([]);
  const [comparison, setComparison] = useState(0);
  const [paused,setPaused] = useState(false);
  const pausedRef = useRef(false);
  const [showTCModal,setShowTCModal] = useState(false);
  const [showAIModal,setShowAIModal] = useState(false);

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
        <Graph
          arr={arr}
          compIndices={compIndices}
          paused={paused}
          setPaused={setPaused}
          funcName={funcName}
          name = {name}
          setArr={setArr}
          setCompIndices={setCompIndices}
          setComparison={setComparison}
          waitWhilePaused={waitWhilePaused}
        />
        <div className="details-box">
          <div className="row1">
            <div className="detail-card">
              Time Complexity
              Space Complexity
              <button className="getInfo" onClick={()=>setShowTCModal(true)}><i class="ri-send-plane-fill"></i></button>
              <TCModal isOpen={showTCModal} onClose={()=>setShowTCModal(false)}>
                <div className="tcandsc">
                  <h3>Time Complexity : {time_complexity[funcName.name]}</h3> 
                  <h3>Space Complexity : {space_complexity[funcName.name]}</h3>
                </div>
                <h4>Other Details: {details[funcName.name]}</h4>
              </TCModal>
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
              <button className="getInfo"><i class="ri-send-plane-fill"></i></button>
            </div>
            <div className="detail-card">
              Saastri Ji
              <button className="getInfo" onClick = {() => setShowAIModal(true)}><i class="ri-send-plane-fill"></i></button>
              <AIModal isOpen = {showAIModal} onClose = {()=>setShowAIModal(false)}>
                <h2>Abhi backend padh loo fir banata hu!😉</h2>
                <textarea type="text" className="inputBox" placeholder="Comming Soon..."></textarea>
                <button>Submit</button>
              </AIModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingPage;
