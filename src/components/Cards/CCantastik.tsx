import React from "react";
import cantastik from '../../assets/cantastik.webp'
import reactCode from '../../assets/reactCode.webp'

const CCantastik = () => {
  return (
    <article className="Card">
      <div className="Card__banner" id="CantastikTitle">
        <img src={cantastik.src} alt="Logo Cantastik" />
      </div>
      <div className="Card__Toc">
        <h3>Indice:</h3>
        <ul>
          <li>
            <a href="#">
              <span>1</span>¿Que es Cantastik?
            </a>
          </li>
          <li>
            <a href="#">
              <span>2</span>Tecnologias
            </a>
          </li>
          <li>
            <a href="#">
              <span>3</span>Aprendizaje
            </a>
          </li>
          <li>
            <a href="#">
              <span>4</span>Enlaces
            </a>
          </li>
        </ul>
      </div>
      <h3>¿Que es Cantastik?</h3>
      <p>
        Es un proyecto fullstack que consiste en una red social hibrida entre Instagram y Twitter, puedes crear posts con o sin imagen como en Twitter pero con la estetica minimalista y "user friendly" de instagram.<br/><br/>El proyecto nace como reto durante mi formación en The bridge y fue construido en dos semanas, una dedicada al backend y otra al frontend.
      </p>
      <h3>Tecnologias</h3>
      <div
        className="Card__banner"
        id="BannerCrowmieTechs"
        style={{
          backgroundImage: `url(${reactCode.src})`,
          backgroundSize: "cover",
        }}
      >
        <span>M</span>
        <span>E</span>
        <span>R</span>
        <span>N</span>
      </div>
      <div className="Card__Technologies" >
        <h4>Frontend</h4>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Sass</li>
          <li>Redux</li>
          <li>Ant Design</li>
          <li>Framer-motion</li>
        </ul>
      </div>
      <div className="Card__Technologies">
        <h4>Backend</h4>
        <ul>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>JWT</li>
          <li>Multer</li>
          <li>Firebase storage</li>
        </ul>
      </div>
      <h3>Aprendizaje</h3>
      <ul className="Card__Learning">
        <li>
          <h4>
            Desarrollo de API REST
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Uso de MongoDB y Mongoose
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Mejora de habilidades de diseño
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Uso de librerias frontend y UI
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Despliegue de apps complejas
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Control de estados globales y locales
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Routing
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
        <li>
          <h4>
            Sass
          </h4>
          <p>Descripcción del aprendizajr</p>
        </li>
      </ul>
    </article>
  );
};

export default CCantastik;
