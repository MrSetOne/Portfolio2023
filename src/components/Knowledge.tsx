import React, { useMemo, useState } from "react";
import "./Knowledge.scss";
import json from "../assets/knowledge.json";
import ExperienceIcons from "./icons/ExperienceIcons/ExperienceIcons";
type clickOptions = "Front" | "Back" | "Others" | null;
import { motion } from "framer-motion";
import Screen from "./icons/Screen";

interface Props {
  imperativeClose: () => void;
}

const Knowledge = ({imperativeClose}:Props) => {
  const [selectedOption, setSelectedOption] = useState<clickOptions>(null);

  window.onpopstate = () => {
    if (window.location.pathname === "/") return imperativeClose();
  };

  const cardContent = useMemo(() => {
    if (!selectedOption) return (
      <div className="knowledge__content--empty">
        <Screen/>
        <h3>¿Que quieres saber?</h3>
        <p>Selecciona la opción que desees</p>
      </div>
    );
    
    const techs = json.filter((item) => item.sections.includes(selectedOption));

    switch (selectedOption) {
      case "Front":
        return (
          <>
            <div className="knowledge__section">
              <h3>Principales</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "main")
                  .map((tech) => {
                    return (
                      <>
                        <div
                          key={tech.title}
                          style={{
                            backgroundColor: tech.color,
                            color: tech.invert ? "#181818" : "white",
                          }}
                        >
                          <ExperienceIcons
                            icon={tech.title}
                            color={tech.invert ? "#181818" : "white"}
                          />
                          <p>{tech.title}</p>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="knowledge__section">
              <h3>Librerias</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "frontLib")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        );
      case "Back":
        return (
          <>
            <div className="knowledge__section">
              <h3>Principales</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {techs
                  .filter((tech) => tech.subsection === "main")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="knowledge__section">
              <h3>Librerias</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "backLib")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        );
      case "Others":
        return (
          <>
            <div className="knowledge__section">
              <h3>Diseño</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "design")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="knowledge__section">
              <h3>Cloud</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "cloud")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="knowledge__section">
              <h3>Organización</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "scheduling")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />
                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="knowledge__section">
              <h3>Más</h3>
              <div>
                {techs
                  .filter((tech) => tech.subsection === "extra")
                  .map((tech) => {
                    return (
                      <div
                        key={tech.title}
                        style={{
                          backgroundColor: tech.color,
                          color: tech.invert ? "#181818" : "white",
                        }}
                      >
                        <ExperienceIcons
                          icon={tech.title}
                          color={tech.invert ? "#181818" : "white"}
                        />

                        <p>{tech.title}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        );
    }
  }, [selectedOption]);



  return (
    <div className="knowledge__container">
      <div className="knowledge__selector">
        <motion.button
          animate={{ color: selectedOption === "Front" ? "#fca311" : "white" }}
          onClick={() => setSelectedOption("Front")}
        >
          Frontend
        </motion.button>
        <motion.button
          animate={{ color: selectedOption === "Back" ? "#fca311" : "white" }}
          onClick={() => setSelectedOption("Back")}
        >
          Backend
        </motion.button>
        <motion.button
          animate={{ color: selectedOption === "Others" ? "#fca311" : "white" }}
          onClick={() => setSelectedOption("Others")}
        >
          Otros
        </motion.button>
      </div>
      <div className="knowledge__divider" />
      <div className="knowledge__content">{cardContent}</div>
    </div>
  );
};

export default Knowledge;
