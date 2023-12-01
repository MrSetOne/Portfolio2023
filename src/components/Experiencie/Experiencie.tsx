import React, { useRef, useEffect, useState, useMemo } from "react";
import FatCap from "../icons/FatCap";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import ExperiencieRow from "./ExperiencieRow";
import ExperienceIcons from "../icons/ExperienceIcons/ExperienceIcons";
import json from "../../assets/knowledge.json";
import { useWindowSize } from "../../hooks/useWindowsSize";
import ModalBtn from "../ModalBtn";

interface Props {
  openCard: boolean;
}

const Experiencie = ({openCard}:Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { width: screenWidth } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { current: knowledge } = useRef(
    json.filter((item) => item.visibleOnHome),
  );

  return (
    <div
      id="experienceMainBanner"
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "black",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "3.5vw",
        padding: "5rem 0",
        position: "relative",
        borderTop: "1px solid #ffffff59",
        borderBottom: "1px solid #ffffff59",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
          zIndex: 2,
          textTransform: "uppercase",
          fontWeight: "bold",
          textShadow: "0 0 1rem black",
        }}
      >
        <h2
          style={{
            fontSize: "min(12vw, 11rem)",
          }}
        >
          Experiencia
        </h2>
        <button>Saber más</button>
        <ModalBtn defaultOpen={openCard} target="Knowledge">Here</ModalBtn>
      </div>
      <ExperiencieRow
        screenWidth={screenWidth}
        knowledge={knowledge}
        scrollRef={scrollRef}
        scrollYProgress={scrollYProgress}
        dir="right"
      />
      <ExperiencieRow
        screenWidth={screenWidth}
        knowledge={knowledge}
        scrollRef={scrollRef}
        scrollYProgress={scrollYProgress}
        dir="left"
      />
      <ExperiencieRow
        screenWidth={screenWidth}
        knowledge={knowledge}
        scrollRef={scrollRef}
        scrollYProgress={scrollYProgress}
        dir="right"
      />
    </div>
  );
};

export default Experiencie;
