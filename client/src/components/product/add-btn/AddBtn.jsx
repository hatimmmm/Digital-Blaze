import React from "react";
import "./addBtn.css";

import { motion } from "framer-motion";

const AddBtn = ({ classname, onAdd, newItem }) => {
  if (classname === "disabled-btn") {
    return <button className={classname}>add to cart</button>;
  } else {
    return (
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => onAdd(newItem)}
        className={classname}
      >
        add to cart
      </motion.button>
    );
  }
};

export default AddBtn;
