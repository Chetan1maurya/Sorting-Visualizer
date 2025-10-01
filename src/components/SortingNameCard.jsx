import React from "react";
import { motion } from "framer-motion";
import "./CSS files/SortingNameBox.css";
const SortingNameCard = ({ name, onClick}) => {
  return (
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="sorting_box" onClick={onClick}>
          {name}
        </div>
      </motion.div>
  );
};

export default SortingNameCard;

