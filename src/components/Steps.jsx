import React from "react";
import "./CSS files/steps.css";
import { motion } from "framer-motion";

const Steps = ({ step }) => {
  if (!step) return null;

  const stepList = step.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="timeline">
      {stepList.map((line, i) => (
        <div key={i} className="step">
          <motion.div 
          className="icon"
          initial={{
            bottom: '3rem',
            opacity: 0,
          }}
          whileInView={{
            top: '0',
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          >{line}</motion.div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
