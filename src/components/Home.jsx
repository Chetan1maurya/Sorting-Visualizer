import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SortingNameCard from "./SortingNameCard";
import Star from "../assets/star1.svg?react";
import Sorting from "../assets/sorting.svg?react";
import { motion } from "framer-motion";
import "./CSS files/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [selectedAlgo, setSelectedAlgo] = useState("");
  const [textColor, setTextColor] = useState("red");
  const algo = [
    "Selection Sorting",
    "Bubble Sorting",
    "Insertion Sorting",
    "Merge Sorting",
    "Quick Sorting",
    "Heap Sorting",
  ];
  const handleStart = (algoname) => {
    setSelectedAlgo(algoname);
  }
  return (
    <>
      <div className="front-page">
        <Sorting className="man" />
        <div className="firstHeading">
          Let's Visualize <Star className="my_star" />
        </div>
        <div
          style={{
            fontSize: "2vmax",
            color: textColor,
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Selection Sorting", // initially rendered starting point
              () => setTextColor("aqua"),
              1000,
              "Bubble Sorting",
              () => setTextColor("deeppink"),
              1000,
              "Insertion Sorting",
              () => setTextColor("darkkhaki"),
              1000,
              "Merge Sorting",
              () => setTextColor("aqua"),
              1000,
              "Quick Sorting",
              () => setTextColor("deeppink"),
              1000,
              "Heap Sorting",
              () => setTextColor("darkkhaki"),
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="sorting_name">
          {algo.map((algoname, index) => (
            <SortingNameCard
              key={index}
              name={algoname}
              onClick={() => handleStart(algoname)}
              isSelected={selectedAlgo === algoname}
            />
          ))}
        </div>
        <br />
        <button
          className="start"
          onClick={() =>
            navigate("/sort", {
              state: {
                algo: selectedAlgo,
              },
            })
          }
        >
          Start
        </button>
        <div className="baseline">
          <h4 className="tagline">Made with Love ❣️</h4>
        </div>
      </div>
      <div className="comparison">
        <motion.h4
        initial={{
          scale: 0.8,
          opacity: 0
        }}
        whileInView={{
          scale: 1,
          opacity: 1
        }}
        transition={{ 
          duration: 1, 
          ease: "easeOut" 
        }}
        >Analysis of Algoritm Complexity</motion.h4>
        <div className="showImage">
          <motion.img
            className="image"
            src="comparison.png"
            alt=""
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
