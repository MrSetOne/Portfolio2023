import React from "react";
import { motion } from "framer-motion";

interface props {
  width?: number | string;
  color?: string;
  animate?: boolean;
  delay?: number;
}

const Check = ({
  width = 100,
  color = "#3ACE6C",
  animate = true,
  delay = 0,
}: props) => {
  if (animate) {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/motion."
        data-name="Capa 1"
        viewBox="0 0 968.71 890.01"
        width={width}
        style={{ overflow: "visible" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 0.1,
          repeat: 1,
          repeatType: "reverse",
          delay: 0.7,
        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="55"
          d="M862.16 377.53a426.33 426.33 0 015.36 67.48c0 233.34-189.17 422.51-422.51 422.51S22.5 678.35 22.5 445.01 211.67 22.5 445.01 22.5a420.74 420.74 0 01263.31 92.07"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + delay, ease: "easeOut" }}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="55"
          d="M224.04 379.44L447.44 602.84 952.5 78.35"
        />
      </motion.svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 1"
      viewBox="0 0 968.71 890.01"
      width={width}
      style={{ overflow: "visible" }}
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="55"
        d="M862.16 377.53a426.33 426.33 0 015.36 67.48c0 233.34-189.17 422.51-422.51 422.51S22.5 678.35 22.5 445.01 211.67 22.5 445.01 22.5a420.74 420.74 0 01263.31 92.07"
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="55"
        d="M224.04 379.44L447.44 602.84 952.5 78.35"
      />
    </svg>
  );
};

export default Check;
