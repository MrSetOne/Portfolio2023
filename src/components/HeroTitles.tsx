import React, { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval, useWindowSize } from "usehooks-ts";
import "./HeroTitles.scss";

const HeroTitles = () => {
  const [step, setStep] = useState(0);

  const { width } = useWindowSize();

  const changeStep = useCallback(() => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  }, [step]);

  useInterval(changeStep, 3000);

  const titles = useMemo(() => {
    return [
      {
        title: "Frontend Developer",
      },
      {
        title: "UI/UX Designer",
      },
      {
        title: "BackEnd Developer",
      },
    ];
  }, [step]);

  return (
    <div className="hero__titles">
      <AnimatePresence>
        {step === 0 && (
          <motion.span
            className="hero__work"
            key="Frontend Developer"
            initial={{ opacity: 0, x: width <= 900 ? "calc(50% - 100)" : 100 }}
            animate={{ opacity: 1, x: width <= 900 ? "50%" : 0 }}
            exit={{ opacity: 0, x: width <= 900 ? "calc(50% + 100)" : -100 }}
          >
            Frontend Developer
          </motion.span>
        )}
        {step === 1 && (
          <motion.span
            className="hero__work"
            key="UI/UX Designer"
            initial={{ opacity: 0, x: width <= 900 ? "calc(50% - 100)" : 100 }}
            animate={{ opacity: 1, x: width <= 900 ? "50%" : 0 }}
            exit={{ opacity: 0, x: width <= 900 ? "calc(50% + 100)" : -100 }}
          >
            UI/UX Designer
          </motion.span>
        )}
        {step === 2 && (
          <motion.span
            className="hero__work"
            key="BackEnd Developer"
            initial={{ opacity: 0, x: width <= 900 ? "calc(50% - 100)" : 100 }}
            animate={{ opacity: 1, x: width <= 900 ? "50%" : 0 }}
            exit={{ opacity: 0, x: width <= 900 ? "calc(50% + 100)" : -100 }}
          >
            BackEnd Developer
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroTitles;
