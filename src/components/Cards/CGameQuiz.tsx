import React from "react";
import gameQuiz from "../../assets/quiz.webp";
import Github from "../icons/Github";
import reactCode from "../../assets/reactCode.webp";
import JavaScriptBicolor from "../icons/ExperienceIcons/JavaScriptBicolor";

const CGameQuiz = () => {
  return (
    <article className="Card">
      <div className="Card__banner" id="GameQuizTitle">
        <img src={gameQuiz.src} alt="gameQuiz" />
      </div>
      <div className="Card__Toc">
        <h3>Indice:</h3>
        <ul>
          <li>
            <a href="#whatIsGameQuiz">
              <span>1</span>¿Que es GameQuiz?
            </a>
          </li>
          <li>
            <a href="#GameQuizTechnologies">
              <span>2</span>Tecnologias
            </a>
          </li>
          <li>
            <a href="#GameQuizLearning">
              <span>3</span>Aprendizaje
            </a>
          </li>
          <li>
            <a href="#GameQuizLinks">
              <span>4</span>Enlaces
            </a>
          </li>
        </ul>
      </div>
      <h3 id="whatIsGameQuiz">¿Que es GameQuiz?</h3>
      <p>
        La idea de GameQuiz es desarrollar un juego tipo Quiz estilo SPA con
        VanillaJS utilizando la API OpenTrivia (https://opentdb.com/), la cual
        nos proporciona una gran cantidad de preguntas de diferentes categorías
        y dificultades.
        <br />A modo de reto personal, decidí añadir más dificultad añadiendo un
        contador de tiempo y un sistema de puntos basado en el mismo.
        <br />
        Este fue mi primer proyecto en el que me enfrenté seriamente a
        JavaScript y me sirvió para afianzar conceptos como el uso de promesas,
        async/await, fetch, intervalos, control del DOM, etc.
      </p>
      <h3 id="GameQuizTechnologies">Tecnologias</h3>
      <div
        className="Card__banner"
        id="BannerGameQuizTechs"
        style={{
          backgroundImage: `url(${reactCode.src})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <JavaScriptBicolor size="5rem" />
        </div>
      </div>
      <div className="Card__Technologies">
        <h4>Frontend</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>LocalStorage</li>
          <li>ChartJs</li>
        </ul>
      </div>
      <h3 id="GameQuizLearning">Aprendizaje</h3>
      <ul className="Card__Learning">
        <li>
          <h4>Fetching de datos</h4>
          <p>
            En el proyecto GameQuiz, aprendí a utilizar el fetching de datos
            para traer las preguntas de la API OpenTrivia. Gracias a este
            aprendizaje, pude realizar peticiones HTTP a una API y procesar los
            datos de la respuesta.
          </p>
        </li>
        <li>
          <h4>Uso del LocalStorage</h4>
          <p>
            Utilicé el localstorage para almacenar las puntuaciones de los
            jugadores en una leaderboard. Esto me permitió crear una tabla de
            clasificación que se actualizaba automáticamente cada vez que un
            jugador completaba una partida.
            <br />
            El uso del localstorage me permitió almacenar los datos de forma
            local, sin necesidad de utilizar una base de datos.
          </p>
        </li>
        <li>
          <h4>Uso de intervalos</h4>
          <p>
            Utilicé la función setInterval() para crear un cronometro que se
            reiniciaba después de cada respuesta. Esto me permitió asignar una
            puntuación adicional por velocidad de respuesta, en el caso de que
            esta sea acertada. El uso de intervalos me permitió crear un sistema
            de puntuación que recompensaba a los jugadores por no solo por
            responder correctamente, si no también rápido, haciendo asi un juego
            mucho más dinamico.
          </p>
        </li>
        <li>
          <h4>Pseudo elementos</h4>
          <p>
            Utilicé los pseudoelementos after y before para añadir contenido a
            los elementos HTML. Esta fue la primera vez que utilizaba estos
            pseudoelementos, y me resultó muy útil para añadir elementos de
            diseño y funcionalidad a mi proyecto.
          </p>
        </li>
      </ul>
      <h3 id="GameQuizLinks">Enlaces</h3>
      <div className="Card__Links">
        <a
          href="https://github.com/MrSetOne/Quiz"
          target="_blank"
          className="Card__Links--GitHub"
        >
          <Github size="1.5rem" color="white" />
          <span>Repo</span>
        </a>
        <a
          href="https://mrsetone.github.io/Quiz/"
          target="_blank"
          className="Card__Links--itemFill"
        >
          Visita el sitio
        </a>
      </div>
    </article>
  );
};

export default CGameQuiz;
