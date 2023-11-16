import React from "react";
import cantastik from "../../assets/cantastik.webp";
import reactCode from "../../assets/reactCode.webp";
import Github from "../icons/Github";

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
        Es un proyecto fullstack que consiste en una red social hibrida entre
        Instagram y Twitter, puedes crear posts con o sin imagen como en Twitter
        pero con la estetica minimalista y "user friendly" de instagram.
        <br />
        <br />
        El proyecto nace como reto durante mi formación en The bridge y fue
        construido en dos semanas, una dedicada al backend y otra al frontend.
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
      <div className="Card__Technologies">
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
          <h4>Desarrollo de API REST</h4>
          <p>
            Desarrollo de un backend con NodeJs y Express basado en la
            arquitectura MVC (Model-View-Controller) con uso de librerias,
            middelware y autenticación.
          </p>
        </li>
        <li>
          <h4>Uso de MongoDB y Mongoose</h4>
          <p>
            En este proyecto, utilicé MongoDB como base de datos para almacenar
            los datos de la API. MongoDB es una base de datos NoSQL de
            documentos que es ideal para aplicaciones web y MVP por la
            flexibilidad que ofrece.
            <br />
            Para interactuar con MongoDB, utilicé la librería Mongoose. Mongoose
            es una librería ODM (Object Data Modeling) que proporciona una capa
            de abstracción entre el código de la aplicación y la base de datos.
          </p>
        </li>
        <li>
          <h4>Mejora de habilidades de diseño</h4>
          <p>
            En este proyecto, tuve la oportunidad de planificar y diseñar la
            UX/UI de una aplicación web inspirada en Instagram y Twitter.
            <br />
            El diseño se realizó en un iPad con Procreate, utilizando una paleta
            de colores vibrantes para crear una apariencia moderna, atractiva y
            sencilla. También se creó un logotipo desde cero que reflejara la
            personalidad de la aplicación.
          </p>
        </li>
        <li>
          <h4>Uso de librerias frontend y UI</h4>
          <p>
            En este proyecto, utilicé Ant Design como librería de UI para
            agilizar el desarrollo y facilitar la implementación de componentes
            y funcionalidades comunes. Ant Design es una librería de componentes
            UI de código abierto muy popular, que proporciona una amplia gama de
            componentes listos para usar.
            <br />
            Para poder implementar Ant Design, aprendí a comprender la
            documentación de la librería.
            <br />
            También aprendí a customizar Ant Design usando scss. Esto me
            permitió adaptar la librería a las necesidades específicas del
            proyecto.
            <br />
            El uso de librerías frontend y UI me permitió ahorrar tiempo y
            esfuerzo en el desarrollo del proyecto. También me permitió crear
            una interfaz de usuario más consistente y atractiva.
          </p>
        </li>
        <li>
          <h4>Despliegue de apps complejas</h4>
          <p>
            Desplegué la aplicación en la nube utilizando Vercel para el
            frontend, Render para el backend, MongoAtlas para la base de datos y
            Firebase Storage para los archivos multimedia. La dificultad fue
            encontrar hostings gratuitos que cumplieran con los requisitos de la
            aplicación. Durante la vida de la aplicación se ha migrado tanto el
            frontend como el backend, ya que originalmente ambos se encontraban
            en Heroku.
          </p>
        </li>
        <li>
          <h4>Control de estados globales y locales</h4>
          <p>
            En este proyecto, pude trabajar con estados de React de forma más
            compleja y aprender a controlar estados globales. Para los estados
            locales, utilicé los hooks de React, y para los estados globales,
            utilicé Redux. Mi experiencia previa me ayudó a comprender los
            conceptos básicos, pero el tamaño y la complejidad del proyecto me
            obligaron a aprender nuevas habilidades y mejorar mis conocimientos.
          </p>
        </li>
        <li>
          <h4>Routing</h4>
          <p>
            Aprendí a usar React Router, una librería de enrutamiento para React
            que me permitió crear aplicaciones web con navegación entre
            diferentes rutas de forma sencilla y segura.
          </p>
        </li>
        <li>
          <h4>Sass</h4>
          <p>
            Aprendí a usar Sass, un preprocesador de CSS que me pareció muy
            interesante. Lo que más me gustó fue que el código queda más legible
            gracias a su sintaxis. También me gustó el uso del nesting, que
            permite agrupar las propiedades CSS en un bloque, y las variables,
            que permiten almacenar valores que se pueden utilizar en varias
            partes del código de forma muy legible.
          </p>
        </li>
      </ul>
      <h3>Enlaces</h3>
      <div className="Card__Links Card__Links--odd">
        <a href="" target='_blank'>
          <Github size="1.7rem" color="#0095f6"/>
          <span>Frontend</span>
        </a>
        <a href="" target='_blank'>
          <Github size="1.7rem" color="#0095f6"/>
         <span>Backend</span>
        </a>
        <a href="" target='_blank' className="Card__Links--itemFill">
          Visita el sitio
        </a>
      </div>
    </article>
  );
};

export default CCantastik;
