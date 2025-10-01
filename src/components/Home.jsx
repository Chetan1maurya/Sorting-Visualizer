import { React, useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SortingNameCard from "./SortingNameCard";
import Star from "../assets/star1.svg?react";
import SortSVG from "../assets/sortMan.svg?react";
import Sorting from "../assets/sorting.svg?react";
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
        <Sorting className="man"/>
        <div className="firstHeading">Let's Visualize <Star className="my_star" /></div>
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
              onClick={() => setSelectedAlgo(algoname)}
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
          <h4 className="tagline">Made with Love</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
