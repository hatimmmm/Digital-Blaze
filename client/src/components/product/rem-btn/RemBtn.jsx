import React from "react";
import { motion } from "framer-motion";
import "./remBtn.css";

const RemBtn = ({ onAdd, newItem }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={() => onAdd(newItem)}
      className="remove-btn"
    >
      remove
    </motion.button>
  );
};

export default RemBtn;
