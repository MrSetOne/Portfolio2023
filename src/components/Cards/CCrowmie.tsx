import React from "react";
import windmill from "../../assets/windmillSunset.webp";
import Experience from "../icons/Experience";
import Pantone from "../icons/Pantone";
import Code from "../icons/Code";
import Cloud from "../icons/Cloud";
import reactCode from "../../assets/reactCode.webp";
import rocket from "../../assets/rocket.webp";
import handshake from "../../assets/handshake.webp";
import market from "../../assets/market.webp";
import friends from "../../assets/friends.webp";

const CCrowmie = () => {
  console.log(windmill);
  return (
    <article className="CCrowmie CCard">
      <h2 className="CCrowmie__mainTitle">
        Mi paso por
        <br /> <span>Crowmie</span>
      </h2>
      <div className="CCard__Toc">
        <h3>Indice:</h3>
        <ul>
          <li>
            <a href="#whatIsCrowmie">
              <span>1</span>¿Que es Crowmie?
            </a>
          </li>
          <li>
            <a href="#tasksInCrowmie">
              <span>2</span>Ocupación
            </a>
          </li>
          <li>
            <a href="#CrowmieTechnologies">
              <span>3</span>Tecnología
            </a>
          </li>
          <li>
            <a href="#CrowmieGoals">
              <span>4</span>Logros
            </a>
          </li>
          <li>
            <ul>
              <li>
                <a href="#CrowmieSSR">
                  <span>4.1</span>Migración a Astro con SSR
                </a>
              </li>
              <li>
                <a href="#CrowmieKYC">
                  <span>4.2</span>Nuevo formulario de KYC
                </a>
              </li>
              <li>
                <a href="#CrowmieP2P">
                  <span>4.3</span>Mercado P2P
                </a>
              </li>
              <li>
                <a href="#CrowmieReferral">
                  <span>4.4</span>Sistema de referidos
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 id="whatIsCrowmie">¿Que es Crowmie?</h3>
      <p>
        Crowmie es una plataforma de inversión en energía renovable que permite
        a cualquier persona, sin importar su ubicación o su nivel de inversión,
        participar en proyectos de energía solar y fotovoltaica. La plataforma
        tokeniza los proyectos de energía renovable, lo que los convierte en
        activos digitales que se pueden comprar y vender a través de la
        plataforma.
      </p>
      <h3 id="tasksInCrowmie">Ocupación</h3>
      <div
        id="BannerCrowmieTasks"
        className="CCard__banner"
        style={{
          backgroundImage: `url(${windmill.src})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <Experience size="2.8rem" strokeWidth={3.5} />
          <span>Analisis</span>
        </div>
        <div>
          <Pantone size="2.8rem" />
          <span>Diseño</span>
        </div>
        <div>
          <Code size="2.8rem" strokeWidth={1.8} />
          <span>Desarrollo</span>
        </div>
        <div>
          <Cloud size="2.8rem" strokeWidth={1.4} />
          <span>Cloud</span>
        </div>
      </div>
      <p>
        En mi puesto de desarrollador frontend y UX/UI, me encargaba de todo el
        ciclo de vida de las nuevas funcionalidades de la web y la aplicación de
        la compañía. Desde el estudio de la viabilidad, el diseño, el desarrollo
        y el despliegue.
        <br />
        <br />
        En concreto, mis principales responsabilidades eran:
      </p>

      <ul>
        <li>
          Estudiar la viabilidad de nuevas funcionalidades: Para ello, utilizaba
          técnicas como el análisis de usuarios, la investigación de la
          competencia y la creación de prototipos de bajo nivel.
        </li>
        <li>
          Diseñar nuevas funcionalidades: En esta fase, trabajaba en estrecha
          colaboración con el equipo de marketing para crear diseños de alto
          nivel que fueran intuitivos, usables y atractivos.
        </li>
        <li>
          Desarrollar nuevas funcionalidades: Utilizaba TypeScript con
          tecnologías como React, Sass, Framer-motion, nodeJs y MongoDB para
          implementar las funcionalidades diseñadas.
        </li>
        <li>
          Desplegar nuevas funcionalidades: Una vez desarrolladas, desplegaba
          las funcionalidades en producción y probaba su correcto
          funcionamiento.
        </li>
      </ul>
      <br />
      <p>
        Además de desarrollar nuevas funcionalidades, también refactoricé parte
        del código para mejorar su legibilidad y performance. Para ello, utilicé
        buenas prácticas, algunos principios SOLID y hooks como useMemo,
        useCallback y useRef.
      </p>
      <h3 id="CrowmieTechnologies">Tecnología</h3>
      <div
        className="CCard__banner"
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
      <div className="CCard__Technologies">
        <h4>Frontend</h4>
        <ul>
          <li>NodeJs</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Astro</li>
          <li>Redux</li>
          <li>i18n</li>
          <li>MateriaUI</li>
          <li>Framer-motion</li>
          <li>Tailwind</li>
          <li>Sass</li>
          <li>Chart.js</li>
          <li>Leaflet</li>
          <li>GIT</li>
          <li>Github</li>
        </ul>
      </div>
      <div className="CCard__Technologies">
        <h4>UX/UI</h4>
        <ul>
          <li>Figma</li>
          <li>Miro</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div className="CCard__Technologies">
        <h4>Backend</h4>
        <ul>
          <li>NodeJs</li>
          <li>TypeScript</li>
          <li>MongoDb</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <h3 id="CrowmieGoals">Logros</h3>
      <ul className="Ccard__goals">
        <li id="CrowmieSSR">
          <h4 style={{ marginTop: ".5rem" }}>Migración a Astro con SSR</h4>
          <div className="CCard__banner" id="BannerCrowmieRocket">
            <div style={{ backgroundImage: `url(${rocket.src})` }} />
          </div>
          <h5>Problema</h5>
          <p>
            La web de la empresa tenía un tiempo de carga lento (llegando hasta
            los 7seg), no era completamente responsive y carecía de contenido
            dinámico, lo que afectaba negativamente a su rendimiento, usabilidad
            y atractivo.
          </p>
          <h5>Solución</h5>
          <ul>
            <li>
              WordPress se utilizará solo como CMS, ya que su API funciona a
              buena velocidad y ahí es donde se alojaba todo el sistema del
              blog.
            </li>
            <li>
              Astro será el framework de desarrollo web encargado de los
              renderizados, por su velocidad, flexibilidad, facilidad de uso y
              mantenimiento.
            </li>
            <li>
              Como librerías adicionales se usarán React para los componentes
              dinamicos y Tailwind para mejorar los tiempos de desarrollo.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El tiempo de carga se redujo de 7 segundos a 0,3 segundos gracias a
            la capacidad de Astro para decidir qué partes de la web se
            renderizan desde el servidor y cuáles se renderizan desde el
            cliente. Esta solución permitió que la web fuera más fluida e
            interactiva, ya que el contenido dinámico solo se cargaba cuando era
            necesario.
            <br />
            Además, al usar Tailwind, se solucionaron todos los problemas de
            responsive de la web. Esta solución permitió que la web fuera
            accesible para todos los usuarios, independientemente del
            dispositivo que utilicen.
          </p>
        </li>
        <li id="CrowmieKYC">
          <h4>Nuevo formulario de KYC</h4>
          <div className="CCard__banner" id="BannerCrowmieHandshake">
            <img src={handshake.src} alt="handshake" />
          </div>
          <p style={{ fontSize: ".8rem" }}>
            Un formulario KYC es un requisito legal para muchas empresas, pero
            puede ser un proceso largo y tedioso para los clientes.
          </p>
          <h5>Problema</h5>
          <p>
            El formulario de KYC de nuestra empresa era demasiado extenso,
            aburrido y difícil de encontrar. Esto ocasionaba que muy pocos
            usuarios terminaras completándolo.
          </p>
          <h5>Solución</h5>
          <ul>
            <li>
              Visibilidad: El formulario se muestra en un modal que aparece nada
              más acceder a la aplicación. Esto garantiza que los clientes no
              olviden completarlo.
            </li>
            <li>
              Notificación: Al usuario se le muestra una notificación de forma
              permanente en el caso de que no haya completado el formulario.
            </li>
            <li>
              Facilidad de uso: El formulario se divide en vistas de máximo 3
              inputs cada una. Esto permite a los clientes completar el
              formulario de forma más rápida, amigable y sencilla.
            </li>
            <li>
              Autoguardado: Para evitar que el usuario tenga que volver a
              empezar el formulario desde cero tendrá un sistema de
              autoguardado, en cualquier momento puede retomarlo donde lo dejó.
            </li>
            <li>
              Motivación: El formulario está gamificado con elementos como un
              indicador de progreso. Esto ayuda a los clientes a mantenerse
              motivados y conseguir un porcentaje menor de abandono.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El nuevo formulario de KYC es una mejora significativa sobre el
            anterior. Es más accesible, dinámico y gamificado, lo que lo hace
            más fácil y agradable de completar para los clientes. Estos cambios
            han contribuido a aumentar el número de formularios completados, lo
            que es beneficioso para la empresa y para los clientes. El número de
            formularios iniciados y finalizados ha aumentado significativamente.
            Además, los clientes han informado de que la experiencia ha sido
            mucho más positiva.
          </p>
        </li>
        <li id="CrowmieP2P">
          <h4>Mercado P2P</h4>
          <div className="CCard__banner" id="BannerCrowmieMarket">
            <img src={market.src} alt="market" />
          </div>
          <h5>Problema</h5>
          <p>
            Para dar respuesta a las necesidades de los clientes que querían
            salirse de la inversión o adquirir tokens de inversiones ya
            completamente distribuidas, se requería un mercado P2P donde los
            usuarios pueden comprar y vender tokens.
          </p>
          <h5>La solución</h5>
          <ul>
            <li>
              Métodos de pago flexibles: El mercado P2P permite la compra y
              venta de tokens mediante transferencia bancaria o distintos tipos
              de criptomonedas. Esto ofrece a los usuarios una mayor
              flexibilidad a la hora de elegir el método de pago que más les
              conviene.
            </li>
            <li>
              Proceso de compra y venta automático: El proceso de compra y venta
              de tokens es automático hasta donde sea seguro que así sea. Esto
              permite que las transacciones se realicen de forma rápida y
              sencilla.
            </li>
            <li>
              Información al comprador: El comprador recibe información de valor
              sobre el token que está adquiriendo, como su precio, su
              rendimiento, su liquidez, etc. Esta información ayuda al comprador
              a tomar una decisión informada.
            </li>
            <li>
              Facilidad de búsqueda: El mercado P2P cuenta con un sistema de
              filtrado y búsqueda que permite a los usuarios encontrar los
              tokens que están buscando. Esto facilita la búsqueda de tokens
              específicos.
            </li>
            <li>
              Seguridad y transparencia: El mercado P2P proporciona mensajes de
              información y pasos a seguir para que las transacciones sean
              correctas y seguras. Esto ayuda a garantizar que las transacciones
              se realicen de forma segura y transparente.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El mercado P2P ha tenido una respuesta muy positiva por parte de los
            usuarios. En las primeras horas de apertura del sistema, ya se
            realizaron varias transacciones. Los usuarios han reportado que el
            mercado es sencillo y práctico de usar.
          </p>
        </li>
        <li id="CrowmieReferral">
          <h4>Sistema de referidos</h4>
          <div className="CCard__banner" id="BannerCrowmieReferral">
            <img src={friends.src} alt="friends" />
          </div>
          <h5>Problema</h5>
          <p>
            Algunos usuarios que querían un sistema de referidos con el cual
            traer gente y sacar beneficio con ello.
          </p>
          <h5>La solución</h5>
          <ul>
            <li>
              Sencillez: El sistema de referidos es sencillo de entender y de
              usar. Los usuarios pueden ver fácilmente cómo funciona y cómo
              pueden beneficiarse de él.
            </li>
            <li>
              Gamificación: El sistema de referidos está gamificado con niveles
              y con curva de dificultad. Esto hace que sea más divertido para
              los usuarios participar en él y que tengan más incentivos para
              seguir invitando a nuevos usuarios.
            </li>
            <li>
              Facilidad de emisión de invitaciones: El sistema de referidos
              permite a los usuarios emitir invitaciones de forma sencilla. Los
              usuarios pueden usar un código QR, compartir un enlace o crear una
              publicación en redes sociales para invitar a nuevos usuarios.
            </li>
            <li>
              Recompensas para ambos: El sistema de referidos recompensa tanto
              al emisor de la invitación como al usuario que entra nuevo. Esto
              hace que sea más atractivo para ambos participar en él.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El sistema de referidos ha tenido una respuesta muy positiva por
            parte de los usuarios. Los usuarios reportan que es sencillo de
            usar. El sistema también ha contribuido al incremento en el número
            de usuarios registrados.
          </p>
        </li>
      </ul>
    </article>
  );
};

export default CCrowmie;
