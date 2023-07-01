import React from "react";
import { useState } from "react";
import "./features.css";
import features from "./featuresList";
import { motion } from "framer-motion";

const Card = ({ title, icon, description }) => {
  const [mousOver, setMouseOver] = useState(false);

  const HandleMouseEnter = () => {
    setMouseOver(true);
  };
  const HandleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onMouseOver={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      className="feature-card"
    >
      <motion.div className="feature-icon-con">
        <motion.span layout="position">{icon}</motion.span>
      </motion.div>
      <motion.div className="feature-title">
        <motion.h3 layout="position">{title}</motion.h3>
      </motion.div>
      {mousOver && (
        <motion.div className="feature-desc">
          <motion.p layout="position">{description}</motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="features-title">
        <h1>Features</h1>
      </div>
      <div className="feature-card-container">
        {features.map((feature) => {
          return (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
