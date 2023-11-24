import React, { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import CCrowmie from "./Cards/CCrowmie";
import "./Cards/Cards.scss";
import CCantastik from "./Cards/CCantastik";
import CGameQuiz from "./Cards/CGameQuiz";

type Cards = "Crowmie" | "Cantastik" | "GameQuiz";

interface Props {
  children: React.ReactNode;
  target: Cards;
  customStyles?: React.CSSProperties;
}

const ModalBtn = ({ children, target, customStyles }: Props) => {
  const [open, setOpen] = useState(false);

  const imperativeClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
    const modalExternalBg = document.getElementsByClassName(
      "modalExternalBg",
    )[0] as HTMLElement;
    if (!modalExternalBg) return;
    modalExternalBg.classList.remove("modalExternalBg--active");
    setTimeout(() => {
      modalExternalBg.remove();
    }, 300);
  };

  const toRender = useMemo(() => {
    const getContent = (target: Cards) => {
      switch (target) {
        case "Crowmie":
          return <CCrowmie />;
        case "Cantastik":
          return <CCantastik />;
        case "GameQuiz":
          return <CGameQuiz />;
        default:
          return <div>default</div>;
      }
    };

    const content = getContent(target);

    return (
      <Modal open={open} imperativeClose={imperativeClose}>
        {content}
      </Modal>
    );
  }, [target]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.appendChild(document.createElement("div")).className =
        "modalExternalBg";
      const modalExternalBg = document.getElementsByClassName(
        "modalExternalBg",
      )[0] as HTMLElement;
      modalExternalBg.style.height = document.body.clientHeight + "px";
      modalExternalBg.classList.add("modalExternalBg--active");
      modalExternalBg.addEventListener("click", () => {
        setOpen(false);
        document.body.style.overflow = "auto";
        modalExternalBg.classList.remove("modalExternalBg--active");
        setTimeout(() => {
          modalExternalBg.remove();
        }, 300);
      });
    }
  }, [open]);

  const openCard = () => {
    setOpen(true);
    window.location.hash = `/${target}`;
  }

  return (
    <>
      <button
        onClick={openCard}
        style={{
          cursor: "pointer",
          border: "none",
          backgroundColor: "transparent",
          ...customStyles,
        }}
      >
        {children}
      </button>
      {open &&
        createPortal(
          toRender,
          document.getElementById("modalPortal") as HTMLElement,
        )}
    </>
  );
};

export default ModalBtn;
