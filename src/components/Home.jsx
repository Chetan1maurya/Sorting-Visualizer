import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SortingNameCard from "./SortingNameCard";
import Particles from "react-tsparticles";

import "./CSS files/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [selectedAlgo, setSelectedAlgo] = useState("Selection Sorting");
  const [textColor, setTextColor] = useState("red");
  const algo = [
    "Selection Sorting",
    "Bubble Sorting",
    "Insertion Sorting",
    "Merge Sorting",
    "Quick Sorting",
    "Heap Sorting",
  ];
  return (
    <>
      <div className="front-page">
        <div
          style={{
            fontSize: "2.5vmax",
            color: textColor,
          }}
        >
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Let's Visualize Selection Sorting", // initially rendered starting point
              () => setTextColor("aqua"),
              1000,
              "Let's Visualize Bubble Sorting",
              () => setTextColor("deeppink"),
              1000,
              "Let's Visualize Insertion Sorting",
              () => setTextColor("darkkhaki"),
              1000,
              "Let's Visualize Merge Sorting",
              () => setTextColor("aqua"),
              1000,
              "Let's Visualize Quick Sorting",
              () => setTextColor("deeppink"),
              1000,
              "Let's Visualize Heap Sorting",
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
            <SortingNameCard key={index} name={algoname} onClick={() => setSelectedAlgo(algoname)}/>
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
            <h4 className="tagline">Copowered by Copilot 🤖</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
