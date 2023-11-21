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
  return (
    <article className="CCrowmie Card">
      <h2 className="CCrowmie__mainTitle">
        Mi paso por
        <br /> <span>Crowmie</span>
      </h2>
      <div className="Card__Toc">
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
            <a href="#CrowmieLearning">
              <span>4</span>Aprendizaje
            </a>
          </li>
          <li>
            <a href="#CrowmieGoals">
              <span>5</span>Logros
            </a>
          </li>
          <li>
            <ul>
              <li>
                <a href="#CrowmieSSR">
                  <span>5.1</span>Migración a Astro con SSR
                </a>
              </li>
              <li>
                <a href="#CrowmieKYC">
                  <span>5.2</span>Nuevo formulario de KYC
                </a>
              </li>
              <li>
                <a href="#CrowmieP2P">
                  <span>5.3</span>Mercado P2P
                </a>
              </li>
              <li>
                <a href="#CrowmieReferral">
                  <span>5.4</span>Sistema de referidos
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 id="whatIsCrowmie">¿Que es Crowmie?</h3>
      <p style={{marginTop:'1rem'}}>
        Crowmie es una <b>plataforma de inversión en energía renovable</b> que
        permite a cualquier persona, sin importar su ubicación o su nivel de
        inversión, participar en proyectos de energía solar y fotovoltaica. La
        plataforma
        <b>tokeniza los proyectos de energía renovable</b>, lo que los convierte
        en activos digitales que se pueden comprar y vender a través de la
        plataforma.
      </p>
      <h3 id="tasksInCrowmie">Ocupación</h3>
      <div
        id="BannerCrowmieTasks"
        className="Card__banner"
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
      <p style={{marginTop:'1rem'}}>
        En mi puesto de desarrollador <b>frontend y UX/UI</b>, me encargaba de
        todo el ciclo de vida de las nuevas funcionalidades de la web y la
        aplicación de la compañía. Desde el estudio de la viabilidad, el diseño,
        el desarrollo y el despliegue.
        <br />
        <br />
        En concreto, mis principales responsabilidades eran:
      </p>
      <ul>
        <li>
          <b>Estudiar la viabilidad de nuevas funcionalidades:</b> Para ello,
          utilizaba técnicas como el análisis de usuarios, la investigación de
          la competencia y la creación de prototipos de bajo nivel.
        </li>
        <li>
          <b>Diseñar nuevas funcionalidades:</b> En esta fase, trabajaba en
          estrecha colaboración con el equipo de marketing para crear diseños de
          alto nivel que fueran intuitivos, usables y atractivos.
        </li>
        <li>
          <b>Desarrollar nuevas funcionalidades:</b> Utilizaba TypeScript con
          tecnologías como React, Sass, Framer-motion, nodeJs y MongoDB para
          implementar las funcionalidades diseñadas.
        </li>
        <li>
          <b>Desplegar nuevas funcionalidades:</b> Una vez desarrolladas,
          desplegaba las funcionalidades en producción y probaba su correcto
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
      <div className="Card__Technologies">
        <h4>UX/UI</h4>
        <ul>
          <li>Figma</li>
          <li>Miro</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div className="Card__Technologies">
        <h4>Backend</h4>
        <ul>
          <li>NodeJs</li>
          <li>TypeScript</li>
          <li>MongoDb</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <h3 id="CrowmieLearning">Aprendizaje</h3>
      <ul className="Card__Learning">
        <li>
          <h4>Trabajo en equipo y colaboración</h4>
          <p>
            En mi experiencia en Crowmie, tuve la oportunidad de trabajar en un
            <b>equipo multidisciplinar</b> de profesionales con diferentes
            habilidades y conocimientos. Esto me permitió mejorar mi capacidad
            de comunicación, escuchar y respetar las opiniones de los demás, y
            trabajar de forma coordinada para <b>alcanzar objetivos comunes</b>.
            <br />
            Por ejemplo, trabajé con el equipo de backend para acordar cómo iban
            a funcionar los distintos endpoints y comprender la lógica de los
            servidores. También trabajé con el equipo de marketing para trabajar
            sobre los aspectos de la UI y que se lograra tanto el mensaje, como
            la estética deseada.
          </p>
        </li>
        <li>
          <h4>Planificación</h4>
          <p>
            Aprendí la importancia de la <b>planificación</b> y la{" "}
            <b>gestión del tiempo</b>. En este sentido, tuve la oportunidad de
            trabajar con la metodología
            <b>Scrum</b>, basada en sprints de dos semanas. Esto me permitió
            aprender a dividir el trabajo en pequeñas tareas, priorizarlas y
            estimar su duración.
            <br />
            En este proceso, pude conocer mejor mi potencial y limitaciones. Por
            ejemplo, aprendí que soy capaz de trabajar de forma eficiente y
            organizada, pero que también necesito aprender a gestionar mejor mi
            tiempo en situaciones de estrés o tareas muy extensas.
          </p>
        </li>
        <li>
          <h4>Cultura del feedback</h4>
          <p>
            En Crowmie, aprendí la importancia de la cultura del feedback. En
            esta empresa, el feedback es un proceso continuo y abierto, que se
            ofrece y se recibe de forma constructiva. Esto me permitió aprender
            a aceptar mis errores de forma positiva y verlos como una
            oportunidad de mejora.
          </p>
        </li>
        <li>
          <h4>TypeScript y tipados</h4>
          <p>
            Aprendí que el tipado fuerte es una herramienta esencial para el
            desarrollo de aplicaciones de software{" "}
            <b>seguras, fiables y legibles</b>.
            <br />
            El tipado fuerte asocia un tipo de dato a cada variable, función y
            expresión de un programa. Esto permite al compilador de TypeScript
            realizar verificaciones de tipo en tiempo de compilación, lo que
            ayuda a prevenir errores y mejorar la seguridad, la fiabilidad y la
            legibilidad del código.
            <br />
            El compilador de TypeScript puede verificar que los tipos de datos
            coinciden, gracias a esto es{" "}
            <b>menos probable que se produzcan errores</b>
            en tiempo de ejecución. Esto puede ayudar a reducir el tiempo de
            depuración y el coste de mantenimiento de las aplicaciones.
            <br />
            También ayuda a la legibilidad del código. Cuando el tipo de dato de
            cada variable y expresión está claramente definido, es más fácil
            entender el funcionamiento del código. Esto puede ayudar a los
            desarrolladores a colaborar más eficazmente y a reducir el tiempo de
            aprendizaje de nuevas aplicaciones.
            <br />
            En resumen, el tipado fuerte es una herramienta poderosa que puede
            ayudar a los desarrolladores a crear aplicaciones de{" "}
            <b>software de alta calidad</b>.
          </p>
        </li>
        <li>
          <h4>Principios SOLID y buenas prácticas</h4>
          <p>
            En mi experiencia en Crowmie, tuve la oportunidad de trabajar en un
            entorno de desarrollo ágil, con plazos de entrega ajustados. Esto
            supuso un reto a la hora de implementar los principios SOLID y las
            buenas prácticas de desarrollo de software.
            <br />A pesar de las limitaciones, pude aprender a aplicar los
            principios SOLID en mi trabajo de forma progresiva. Por ejemplo,
            aprendí a <b>separar responsabilidades</b>. También aprendí a
            escribir código más <b>legible</b> y <b>mantenible</b>, utilizando
            convenciones de nomenclatura y comentarios claros.
            <br />
            En algunos casos, no fue posible implementar los principios SOLID al
            100%. Por ejemplo, en algunas ocasiones fue necesario hacer cambios
            rápidos al código para atender a nuevas necesidades del negocio. En
            estos casos, intenté aplicar los principios SOLID siempre que fuera
            posible, pero también tuve que ser flexible y priorizar la entrega
            del producto.
            <br />
            En general, creo que mi experiencia en Crowmie me ha ayudado a
            comprender la importancia de los principios SOLID y las buenas
            prácticas de desarrollo de software. He aprendido a aplicar estos
            principios de forma progresiva, incluso en entornos de desarrollo
            ágil con plazos ajustados.
          </p>
        </li>
        <li>
          <h4>Server side rendering</h4>
          <p>
            Tuve la oportunidad de aprender sobre server side rendering (SSR)
            con Astro. SSR consiste en renderizar el contenido de una página web
            en el servidor, en lugar de en el cliente.
            <br />
            Algunas de sus ventajas son la <b>mejora de SEO</b> ya que al
            renderizarse el contenido en el servidor el documento se descarga
            con todos los metadatos necesarios. También se{" "}
            <b>aligera la carga en el cliente</b>, consiguiendo así una mejor
            experiencia de usuario y un menor consumo de datos.
          </p>
        </li>
        <li>
          <h4>Analisis y mejora de performance</h4>
          <p>
            En mi experiencia en Crowmie, tuve la oportunidad de aprender sobre
            el análisis y la mejora de la performance en React. Aprendí el uso
            de hooks como <b>useMemo, useCallback y useRef</b>, que pueden
            ayudar a evitar la rerenderización innecesaria de los componentes.
            Esto puede ayudar a mejorar el rendimiento de la aplicación,
            mejorando la experiencia del usuario.
          </p>
        </li>
      </ul>
      <h3 id="CrowmieGoals">Logros</h3>
      <ul className="Card__goals">
        <li id="CrowmieSSR">
          <h4 style={{ marginTop: ".5rem" }}>Migración a Astro con SSR</h4>
          <div className="Card__banner" id="BannerCrowmieRocket">
            <div style={{ backgroundImage: `url(${rocket.src})` }} />
          </div>
          <h5>Problema</h5>
          <p>
            La web de la empresa <b>tenía un tiempo de carga lento</b> (llegando
            hasta los <b>7seg</b>), no era completamente responsive y carecía de
            contenido dinámico, lo que afectaba negativamente a su rendimiento,
            usabilidad y atractivo.
          </p>
          <h5>Solución</h5>
          <ul>
            <li>
              <b>WordPress</b> se utilizará solo <b>como CMS</b>, ya que su API
              funciona a buena velocidad y ahí es donde se alojaba todo el
              sistema del blog.
            </li>
            <li>
              <b>Astro</b> será el framework de desarrollo web encargado de los
              renderizados, por su{" "}
              <b>velocidad, flexibilidad, facilidad de uso y mantenimiento</b>.
            </li>
            <li>
              Como librerías adicionales se usarán <b>React</b> para los
              componentes dinamicos y <b>Tailwind</b> para mejorar los tiempos
              de desarrollo.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            <b>El tiempo de carga se redujo de 7 segundos a 0,3 segundos</b>{" "}
            gracias a la capacidad de Astro para decidir qué partes de la web se
            renderizan desde el servidor y cuáles se renderizan desde el
            cliente. Esta solución permitió que la web fuera más{" "}
            <b>fluida e interactiva</b>, ya que el contenido dinámico solo se
            cargaba cuando era necesario.
            <br />
            <b>Además, se solucionaron todos los problemas de responsive</b> de
            la web. Esta solución permitió que la web fuera accesible para todos
            los usuarios, independientemente del dispositivo que utilicen.
          </p>
        </li>
        <li id="CrowmieKYC">
          <h4>Nuevo formulario de KYC</h4>
          <div className="Card__banner" id="BannerCrowmieHandshake">
            <img src={handshake.src} alt="handshake" />
          </div>
          <p style={{ fontSize: ".8rem" }}>
            Un formulario KYC es un requisito legal para muchas empresas, pero
            puede ser un proceso largo y tedioso para los clientes.
          </p>
          <h5>Problema</h5>
          <p>
            El formulario de KYC de nuestra empresa era{" "}
            <b>demasiado extenso, aburrido y difícil de encontrar</b>. Esto
            ocasionaba que muy pocos usuarios terminaras completándolo.
          </p>
          <h5>Solución</h5>
          <ul>
            <li>
              <b>Visibilidad:</b> El formulario se muestra en un modal que
              aparece nada más acceder a la aplicación. Esto garantiza que los
              clientes no olviden completarlo.
            </li>
            <li>
              <b>Notificación:</b> Al usuario se le muestra una notificación de
              forma permanente en el caso de que no haya completado el
              formulario.
            </li>
            <li>
              <b>Facilidad de uso:</b> El formulario se divide en vistas de
              máximo 3 inputs cada una. Esto permite a los clientes completar el
              formulario de forma más rápida, amigable y sencilla.
            </li>
            <li>
              <b>Autoguardado:</b> Para evitar que el usuario tenga que volver a
              empezar el formulario desde cero tendrá un sistema de
              autoguardado, en cualquier momento puede retomarlo donde lo dejó.
            </li>
            <li>
              <b>Motivación:</b> El formulario está gamificado con elementos
              como un indicador de progreso. Esto ayuda a los clientes a
              mantenerse motivados y conseguir un porcentaje menor de abandono.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El nuevo formulario de KYC es una <b>mejora significativa</b> sobre
            el anterior. Es <b>más accesible, dinámico y gamificado</b>, lo que
            lo hace más fácil y agradable de completar para los clientes. Estos
            cambios han contribuido a aumentar el número de formularios
            completados, lo que es beneficioso para la empresa y para los
            clientes. El número de formularios iniciados y finalizados ha
            aumentado significativamente. Además, los clientes han informado de
            que la <b>experiencia ha sido mucho más positiva</b>.
          </p>
        </li>
        <li id="CrowmieP2P">
          <h4>Mercado P2P</h4>
          <div className="Card__banner" id="BannerCrowmieMarket">
            <img src={market.src} alt="market" />
          </div>
          <h5>Problema</h5>
          <p>
            Para dar respuesta a las necesidades de los clientes que querían
            <b>salirse de la inversión o adquirir tokens</b> de inversiones ya
            completamente distribuidas, se requería un mercado P2P donde los
            usuarios pueden comprar y vender tokens.
          </p>
          <h5>La solución</h5>
          <ul>
            <li>
              <b>Métodos de pago flexibles:</b> El mercado P2P permite la compra
              y venta de tokens mediante transferencia bancaria o distintos
              tipos de criptomonedas. Esto ofrece a los usuarios una mayor
              flexibilidad a la hora de elegir el método de pago que más les
              conviene.
            </li>
            <li>
              <b>Proceso de compra y venta automático:</b> El proceso de compra
              y venta de tokens es automático hasta donde sea seguro que así
              sea. Esto permite que las transacciones se realicen de forma
              rápida y sencilla.
            </li>
            <li>
              <b>Información al comprador:</b> El comprador recibe información
              de valor sobre el token que está adquiriendo, como su precio, su
              rendimiento, su liquidez, etc. Esta información ayuda al comprador
              a tomar una decisión informada.
            </li>
            <li>
              <b>Facilidad de búsqueda:</b> El mercado P2P cuenta con un sistema
              de filtrado y búsqueda que permite a los usuarios encontrar los
              tokens que están buscando. Esto facilita la búsqueda de tokens
              específicos.
            </li>
            <li>
              <b>Seguridad y transparencia:</b> El mercado P2P proporciona
              mensajes de información y pasos a seguir para que las
              transacciones sean correctas y seguras. Esto ayuda a garantizar
              que las transacciones se realicen de forma segura y transparente.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El mercado P2P ha tenido una <b>respuesta muy positiva</b> por parte
            de los usuarios. En las primeras horas de apertura del sistema, ya
            se realizaron varias transacciones. Los usuarios han reportado que
            el mercado es <b>sencillo y práctico</b> de usar.
          </p>
        </li>
        <li id="CrowmieReferral">
          <h4>Sistema de referidos</h4>
          <div className="Card__banner" id="BannerCrowmieReferral">
            <img src={friends.src} alt="friends" />
          </div>
          <h5>Problema</h5>
          <p>
            Algunos usuarios que querían un sistema de referidos con el cual{" "}
            <b>traer gente</b> y sacar beneficio con ello.
          </p>
          <h5>La solución</h5>
          <ul>
            <li>
              <b>Sencillez:</b> El sistema de referidos es sencillo de entender
              y de usar. Los usuarios pueden ver fácilmente cómo funciona y cómo
              pueden beneficiarse de él.
            </li>
            <li>
              <b>Gamificación:</b> El sistema de referidos está gamificado con
              niveles y con curva de dificultad. Esto hace que sea más divertido
              para los usuarios participar en él y que tengan más incentivos
              para seguir invitando a nuevos usuarios.
            </li>
            <li>
              <b>Facilidad de emisión de invitaciones:</b> El sistema de
              referidos permite a los usuarios emitir invitaciones de forma
              sencilla. Los usuarios pueden usar un código QR, compartir un
              enlace o crear una publicación en redes sociales para invitar a
              nuevos usuarios.
            </li>
            <li>
              <b>Recompensas para ambos:</b> El sistema de referidos recompensa
              tanto al emisor de la invitación como al usuario que entra nuevo.
              Esto hace que sea más atractivo para ambos participar en él.
            </li>
          </ul>
          <h5>Resultado</h5>
          <p>
            El sistema de referidos ha tenido una <b>respuesta muy positiva</b>{" "}
            por parte de los usuarios. Los usuarios reportan que es sencillo de
            usar. El sistema también ha contribuido al{" "}
            <b>incremento en el número de usuarios registrados</b>.
          </p>
        </li>
      </ul>
    </article>
  );
};

export default CCrowmie;
