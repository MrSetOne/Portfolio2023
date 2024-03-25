import React, { useMemo, useRef, useState } from "react";
import { useWindowSize } from "../hooks/useWindowsSize";
import "./Expience.scss";


const Experience = () => {
  const firstDot = useRef<HTMLInputElement>(null);
  const lastDot = useRef<HTMLInputElement>(null);

  const { width } = useWindowSize();

  const lineHeight = useMemo(() => {
    if (!lastDot.current || !firstDot.current) return 0;
    return (
      lastDot.current.getBoundingClientRect().top -
      firstDot.current.getBoundingClientRect().top
    );
  }, [width]);

  const crowmieTechs = [
    "TypeScript",
    "React",
    "Astro",
    "Node.js",
    "Redux",
    "SCSS",
    "i18n",
    "Tailwind",
  ];

  const quasarTechs = [
    "TypeScript",
    "Angular",
    "RXJS",
    "SCSS",
    "Symfony",
  ];

  return (
    <div style={{ overflow: "hidden", position: "relative" }} >
      <div className="experience__line" style={{ height: lineHeight }} />
      <ul className="experience__list">
        <li className="experience__item">
          <div className="experienceItem__header">
            <div ref={firstDot} className="dotItem" />
            <div>
              <h3>Quasar Dynamics - Frontend developer</h3>
              <h4>Enero 2024 - Actualidad</h4>
            </div>
          </div>
          <p className="experienceItem__description">
            Responsable de desarrollar nuevas funcionalidades, mantener el código existente, corregir bugs. También colaboraré con el equipo de backend y diseño para asegurar la cohesión del proyecto. En este puesto pude probar a trabajar en varios proyectos de forma simultanea, cumpliendo con los plazos y objetivos establecidos.
          </p>
          <div className="experience__tech-list">
            {quasarTechs.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </li>
        <li className="experience__item">
          <div className="experienceItem__header">
            <div ref={lastDot} className="dotItem" />
            <div>
              <h3>Crowmie - Frontend developer & UX/UI</h3>
              <h4>Diciembre 2022 - Septiembre 2023</h4>
            </div>
          </div>
          <p className="experienceItem__description">
            Responsable del completo ciclo de vida de las nuevas funcionalidades. Estudiaba su viabilidad, realizaba el diseño, desarrollaba el código, y desplegaba las nuevas funcionalidades, siguiendo los principios SOLID para asegurar un código limpio, mantenible y escalable.
          </p>
          <div className="experience__tech-list">
            {crowmieTechs.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
