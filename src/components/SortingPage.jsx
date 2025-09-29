import React from "react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./CSS files/Sorting.css";
import Graph from "./Graph.jsx";
import TCModal from "./TCModal.jsx";
import ExploreModal from "./ExploreModal.jsx";

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort
} from '../Algorithm'
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

const SortingPage = () => {
  const [step, setStep] = useState("");
  const [message, setMessage] = useState("");
  const [arr, setArr] = useState([]);
  const [compIndices, setCompIndices] = useState([]);
  const [comparison, setComparison] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const [showTCModal, setShowTCModal] = useState(false);
  const [showExploreModal,setShowExploreModal] = useState(false);
  const algoFunctions = {
    "Bubble Sorting": bubbleSort,
    "Selection Sorting": selectionSort,
    "Insertion Sorting": insertionSort,
    "Merge Sorting": mergeSort,
    "Quick Sorting": quickSort,
    "Heap Sorting": heapSort,
  };
  const location = useLocation();
  const {algo} = location.state || {};
  const funcName = algoFunctions[algo];
  console.log(funcName.name)
  const name = algo;
  console.log(algo);
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

  const waitWhilePaused = async () => {
    while (pausedRef?.current) {
      await new Promise((res) => setTimeout(res, 100));
    }
  };
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 10; i++) {
      const elem = Math.floor(Math.random() * 30) + 1;
      temp.push(elem);
    }
    setArr(temp);
  }, []);

  const exploreInfo = {
  bubbleSort: "1). Bubble Sort repeatedly compares adjacent elements and swaps them if out of order. Best for small datasets. \n\n 2). Time Complexity : o(n^2) \n Space Complexity : O(1)",
  selectionSort: "1). Selection Sort repeatedly finds the smallest element and places it in the right position. Simple but inefficient. \n\n 6). Time Complexity of : O(n^2) \n Space Complexity : O(1)",
  insertionSort: "1). Insertion Sort builds the sorted list one item at a time, good for small or nearly-sorted datasets. \n\n 2). Time Complexity : O(n^2) \n Space Complexity : O(1)",
  mergeSort: "1). Merge Sort uses divide & conquer, recursively splitting and merging arrays. Very efficient, but needs extra space. \n\n 2). Time Complexity : O(nlogn) \n Space Complexity : O(n)",
  quickSort: "1). Quick Sort partitions the array around a pivot and sorts each side. Fast but not stable. \n\n 2). Time Complexity : O(nlogn) \n Space Complexity : O(logn)",
  heapSort: "1). Heap Sort builds a heap and repeatedly extracts the max/min. Efficient and in-place. \n\n 2). Time Complexity : O(nlogn) \n Space Complexity : O(1)",
};

  return (
    <>
      <div className="container">
        <Graph
          arr={arr}
          compIndices={compIndices}
          paused={paused}
          setPaused={setPaused}
          funcName={funcName}
          name={name}
          setArr={setArr}
          setMessage={setMessage}
          setStep={setStep}
          setCompIndices={setCompIndices}
          setComparison={setComparison}
          waitWhilePaused={waitWhilePaused}
        />
        <div className="details-box">
          <div className="row1">
            <div className="detail-card">
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
            <div className="detail-card">
              Working of {name}
               <button className="getInfo" onClick={() => setShowTCModal(true)}>
                <i class="ri-send-plane-fill"></i>
              </button>
              <TCModal
                isOpen={showTCModal}
                onClose={() => setShowTCModal(false)}
              >
                <div className="tcandsc">
                  <h3>Time Complexity : {time_complexity[funcName.name]}</h3>
                  <h3>Space Complexity : {space_complexity[funcName.name]}</h3>
                </div>
                <h4>Other Details: {details[funcName.name]}</h4>
              </TCModal>
            </div>
            <div className="detail-card">
              Number of Comparision are : {" "}
              <span style={{ color: "white", fontSize: "60px" }}>
                {comparison}{" "}
              </span>
            </div>
            <div className="detail-card">
              Explore about {name}
              <button className="getInfo" onClick={() => setShowExploreModal(true)}>
                <i class="ri-send-plane-fill"></i>
              </button>
              <ExploreModal 
                isOpen={showExploreModal}
                onClose={() => setShowExploreModal(false)}
              >
                <div className="imp">
                  <p>{exploreInfo[funcName.name]}</p>
                </div>
              </ExploreModal>
            </div>
          </div>
        </div>
      </div>
      <CopilotKit publicApiKey="ck_pub_2c599eeaf68e8d8a3d81dc39267b3f66">
        <CopilotPopup
          instructions={
            "You are assisting the user in visualizing sorting techniques and algorithm . Answer in the best way possible given the data you have."
          }
          labels={{
            title: "Helping Assistant 🤖",
            initial: "Need any help?",
          }}
        />
      </CopilotKit>
    </>
  );
};

export default SortingPage;
