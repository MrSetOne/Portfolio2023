import React, { useEffect, useState, useMemo, useRef } from "react";
import "./Modal.scss";
import { motion, motionValue, useTransform } from "framer-motion";
import ShortArrow from "./icons/ShortArrow";
import { useWindowSize } from "../hooks/useWindowsSize";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  imperativeClose: () => void;
}

const Modal = ({ children, imperativeClose }: Props) => {
  const { width, height } = useWindowSize();

  const [closing, setClosing] = useState(false);
  const isDesktop = useMemo(() => width > 600, [width]);

  window.onpopstate = () => {
    if (window.location.pathname === "/") return imperativeClose();
  };

  const variants = useMemo(
    () => ({
      open: {
        bottom: 0,
        opacity: 1,
      },
      close: {
        bottom: "-80vh",
        opacity: 0,
      },
    }),
    [],
  );

  const closeCard = () => {
    setClosing(true);
    setTimeout(() => {
      return imperativeClose();
    }, 100);
  };

  const y = motionValue(0);
  y.on("change", (latest) => {
    if (latest >= 100) return closeCard();
  });

  const start = useRef(0);

  useEffect(() => {
    const content = document.getElementsByClassName(
      "Modal__content",
    )[0] as HTMLElement;
    if (!content) return;
    const setStart = (e: TouchEvent) => {
      start.current = e.touches[0].clientY;
    };
    const calculateMove = (e: TouchEvent) => {
      if (content.scrollTop > 0) return;
      if ((start.current - e.touches[0].clientY) * -1 >= 50) return closeCard();
    };
    content.addEventListener("touchstart", setStart);
    content.addEventListener("touchmove", calculateMove);

    return () => {
      content.removeEventListener("touchstart", setStart);
      content.removeEventListener("touchmove", calculateMove);
    };
  }, []);

  return (
    <motion.div
      className={`Modal ${isDesktop ? "Modal--desktop" : ""}`}
      initial={"close"}
      variants={variants}
      animate={closing ? "close" : "open"}
      style={{ height: isDesktop ? height : "80vh" }}
    >
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onClick={closeCard}
        style={{ y }}
        className="Modal__head"
      >
        <motion.div className="Modal__closeLine" />
        <div className="Modal__closeLine--desktop">
          <ShortArrow direction="left" size=".7rem" color="black" />
          <span>Cerrar</span>
        </div>
      </motion.div>
      <motion.div className="Modal__bg" style={{ y }} />
      <motion.div className="Modal__content" style={{ y }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
