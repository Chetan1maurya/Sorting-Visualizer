import React from "react";
import { motion } from "framer-motion";
import "./CSS files/SortingNameBox.css";
const SortingNameCard = ({ name, onClick, isSelected}) => {
  return (
      <motion.div
        className={`sorting_box ${isSelected ? "select" : ""}`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
          {name}
      </motion.div>
  );
};

export default SortingNameCard;

