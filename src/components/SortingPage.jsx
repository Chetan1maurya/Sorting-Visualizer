import React from "react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./CSS files/Sorting.css";
import Graph from "./Graph.jsx";
import TCModal from "./TCModal.jsx";
import ExploreModal from "./ExploreModal.jsx";
import Sorting from "../assets/sorting.svg?react";
import Divider from "../assets/divider.svg?react";
import Opening from "../assets/opening.svg?react";
import Closing from "../assets/closing.svg?react";

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
} from "../Algorithm";

const SortingPage = () => {
  const [step, setStep] = useState("");
  const [message, setMessage] = useState("");
  const [arr, setArr] = useState([]);
  const [compIndices, setCompIndices] = useState([]);
  const [comparison, setComparison] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const [showTCModal, setShowTCModal] = useState(false);
  const [showExploreModal, setShowExploreModal] = useState(false);
  const algoFunctions = {
    "Bubble Sorting": bubbleSort,
    "Selection Sorting": selectionSort,
    "Insertion Sorting": insertionSort,
    "Merge Sorting": mergeSort,
    "Quick Sorting": quickSort,
    "Heap Sorting": heapSort,
  };
  const location = useLocation();
  const { algo } = location.state || {};
  const funcName = algoFunctions[algo];
  console.log(funcName.name);
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
    bubbleSort:
      "1). Bubble Sort repeatedly compares adjacent elements and swaps them if out of order. Best for small datasets. \n\n 2). Time Complexity : o(n^2) \n Space Complexity : O(1)",
    selectionSort:
      "1). Selection Sort repeatedly finds the smallest element and places it in the right position. Simple but inefficient. \n\n 2). Time Complexity of : O(n^2) \n Space Complexity : O(1)",
    insertionSort:
      "1). Insertion Sort builds the sorted list one item at a time, good for small or nearly-sorted datasets. \n\n 2). Time Complexity : O(n^2) \n Space Complexity : O(1)",
    mergeSort:
      "1). Merge Sort uses divide & conquer, recursively splitting and merging arrays. Very efficient, but needs extra space. \n\n 2). Time Complexity : O(nlogn) \n Space Complexity : O(n)",
    quickSort:
      "1). Quick Sort partitions the array around a pivot and sorts each side. Fast but not stable. \n\n 2). Time Complexity : O(nlogn) \n Space Complexity : O(logn)",
    heapSort:
      "1). Heap Sort builds a heap and repeatedly extracts the max/min. Efficient and in-place. \n\n 2). Time Complexity : O(nlogn) \n Space Complexity : O(1)",
  };
  const workingSteps = {
    selectionSort:
      "1). Find the minimum element in the unsorted part. \n\n 2). Swap it with the first element of the unsorted part. \n\n 3). Move boundary forward, repeat until array is sorted.",
    bubbleSort:
      "1). Start from the first element. \n\n 2). Compare it with the next element. \n\n 3). If they are in the wrong order → swap them. \n\n 4). Move to the next pair, repeat till the last element. \n\n 5). After 1 pass → largest element is at the end. \n\n 6). Repeat passes for remaining unsorted part until no swaps are needed.",
    insertionSort:
      "1). Start from the second element (first is already “sorted”). \n\n 2). Take the current element → call it key. \n\n 3). Compare key with elements in the sorted part (to the left). \n\n 4). Shift all larger elements one position right. \n\n 5). Insert key into its correct place. \n\n 6). Repeat for all elements until array is sorted.",
    mergeSort:
      "1). Divide the array into two halves. \n\n 2). Recursively divide each half until only one element remains. \n\n 3). Merge two sorted halves into one sorted array: \n Compare elements from both halves. \n Pick smaller one and place in output. \n Repeat until all elements are merged. \n\n 4). Continue merging back up until full array is sorted.",
    quickSort:
      "1). Pick a pivot element (first/last/random). \n\n 2). Partition array: \n Place all smaller elements on left. \n Place all larger elements on right. \n Pivot goes in its correct position. \n\n 3). Recursively apply Quick Sort to left and right partitions. 4). Continue until subarrays have size 1.",
    heapSort:
      "1). Build a max heap (largest element at root). \n\n 2). Swap root (largest) with last element of heap. \n\n 3). Reduce heap size by 1. \n\n 4). Heapify the root to maintain heap property. \n\n 5). Repeat steps 2–4 until heap size becomes 1.",
  };
  const definitions = {
    selectionSort:
      " Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.",
    bubbleSort:
      "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.",
    insertionSort:
      "Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.",
    mergeSort:
      "Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the Divide and Conquer approach. It works by recursively dividing the input array into two halves, recursively sorting the two halves and finally merging them back together to obtain the sorted array.",
    quickSort:
      "QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array. It works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.",
    heapSort:
      "Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first). We repeat the same process for the remaining elements. In Heap Sort, we use Binary Heap so that we can quickly find and move the max element in O(Log n) instead of O(n) and hence achieve the O(n Log n) time complexity.",
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
                  <h4>Steps: </h4>
                  <p>{workingSteps[funcName.name]}</p>
                </div>
              </TCModal>
            </div>
            <div className="detail-card">
              Number of Comparision are :{" "}
              <span style={{ color: "white", fontSize: "60px" }}>
                {comparison}{" "}
              </span>
            </div>
            <div className="detail-card">
              Explore about {name}
              <button
                className="getInfo"
                onClick={() => setShowExploreModal(true)}
              >
                <i class="ri-send-plane-fill"></i>
              </button>
              <ExploreModal
                isOpen={showExploreModal}
                onClose={() => setShowExploreModal(false)}
              >
                <div className="imp">
                  <h4>{name}</h4>
                  <p>{exploreInfo[funcName.name]}</p>
                </div>
              </ExploreModal>
            </div>
          </div>
        </div>
      </div>
      <Divider className="partition"/>
      <div className="definition">
        <div className="circle">
          <Sorting className="mensvg" />
        </div>
        <div className="sortdef">
          <Opening className="braces"/>
          <div className="shape"></div>
          {definitions[funcName.name]}
          <Closing className="braces"/>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default SortingPage;
