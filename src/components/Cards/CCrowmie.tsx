import React from 'react'

const CCrowmie = () => {
  return (
    <article>
      <h2>Mi paso por Crowmie</h2>
      <div>
        <h3>Indice:</h3>
        <ul>
          <li><a href="#">Ocupación</a></li>
          <li><a href="#">Tecnología</a></li>
          <li><a href="#">Logros</a></li>
        </ul>
      </div>
      <ul>
        <li>
          <h3>Ocupación</h3>
          <p>Como frontend developer, mi objetivo era mejorar la experiencia de usuario de la web y la aplicación de la compañía. En la aplicación, implementé nuevas features como un nuevo formulario de KYC, un mercado P2P y un sistema de referidos. Además, refactoricé parte del código para mejorar la performance, legibilidad y mantenimiento, implementando hooks como useMemo, useCallback y useRef.<br/>En la web, cambié completamente la arquitectura haciendo la migración desde WordPress a Astro. Esto permitió mejorar la velocidad de carga de la web y la facilidad de mantenimiento. Además, optimicé las etiquetas del head incluyendo schemas para mejorar la indexación de la web por los motores de búsqueda.</p>
        </li>
        <li>
          <h3>Tecnología</h3>
          <ul>
            <li>
              <ul>
                <h4>Frontend</h4>
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
            </li>
            <li>
              <ul>
                <h4>UX/UI</h4>
                <li>Figma</li>
                <li>Miro</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h3>Logros</h3>
          <ul>
            <li>
              <h4>Migración a Astro con SSR</h4>
              <h5>El problema</h5>
              <ul>
                <li>El tiempo de carga de la web era muy lento, llegando a tardar hasta 10 segundos en cargar.</li>
                <li>La web no era responsive, lo que provocaba que la experiencia de usuario fuera deficiente en dispositivos móviles y tablets.</li>
                <li>La web carecía de contenido dinámico e interactivo, lo que limitaba su potencial para ofrecer una experiencia de usuario atractiva.</li>
              </ul>
              <h5>Solución</h5>
              <p>En primer lugar, se decidió usar WordPress solo como un CMS, ya que la API de WordPress funcionaba a buena velocidad.<br/>En segundo lugar, se realizó un estudio de viabilidad para determinar el framework de desarrollo web más adecuado para encargarse de los renderizados. Tras el estudio, se determinó que Astro era la mejor opción por su flexibilidad, facilidad de uso y mantenimiento. También se decidió usar Tailwind por su agilidad de desarrollo.</p>
              <h5>Resultado</h5>
              <p>El tiempo de carga se redujo de 7 segundos a 0,3 segundos gracias a la capacidad de Astro para decidir qué partes de la web se renderizan desde el servidor y cuáles se renderizan desde el cliente. Esta solución permitió que la web fuera más fluida e interactiva, ya que el contenido dinámico solo se cargaba cuando era necesario.<br/>Además, al usar Tailwind, se solucionaron todos los problemas de responsive de la web. Esta solución permitió que la web fuera accesible para todos los usuarios, independientemente del dispositivo que utilicen.</p>
            </li>
            <li>
              <h4>Nuevo formulario de KYC</h4>
              <p>El formulario de KYC es un requisito legal para muchas empresas, pero puede ser un proceso largo y tedioso para los clientes.</p>
              <h5>El problema</h5>
              <li>
                <ul>Formulario extenso y aburrido</ul>
                <ul>Solo una pequeña parte finalizaba el formulario y la gran mayoria siquiera lo iniciaba</ul>
              </li>
              <h5>Solución</h5>
              <p>El nuevo formulario se muestra en un modal que aparece nada más acceder a la aplicación. Esto garantiza que los clientes no olviden completar el formulario y que puedan recuperar fácilmente su progreso en caso de que lo dejen a medias. También se envía una notificación a los clientes para recordarles que deben completar el formulario.<br/>El formulario se divide en vistas de máximo 3 inputs cada una. Esto permite a los clientes completar el formulario de forma más rápida y sencilla. Además, el formulario está gamificado con elementos como un indicador de progreso. Esto ayuda a los clientes a mantenerse motivados y conseguir un porcentaje menor de abandono.</p>
              <h5>Resultado</h5>
              <p>El nuevo formulario de KYC es una mejora significativa sobre el anterior. Es más accesible, dinámico y gamificado, lo que lo hace más fácil y agradable de completar para los clientes. Estos cambios han contribuido a aumentar el número de formularios completados, lo que es beneficioso para la empresa y para los clientes. El número de formularios iniciados y finalizados ha aumentado significativamente. Además, los clientes han informado de que la experiencia ha sido mucho más positiva.</p>
            </li>
            <li>
              <h4>Mercado P2P</h4>
              <h5>El problema</h5>
              <p>Para dar respuesta a las necesidades de los clientes que querían salirse de la inversión o adquirir tokens de inversiones ya completamente distribuidas, se creó un mercado P2P donde los usuarios pueden comprar y vender tokens.</p>
              <h5>La solución</h5>
              <ul>
                <li>Métodos de pago flexibles: El mercado P2P permite la compra y venta de tokens mediante transferencia bancaria o distintos tipos de criptomonedas. Esto ofrece a los usuarios una mayor flexibilidad a la hora de elegir el método de pago que más les conviene.</li>
                <li>Proceso de compra y venta automático: El proceso de compra y venta de tokens es automático hasta donde sea seguro que así sea. Esto permite que las transacciones se realicen de forma rápida y sencilla.</li>
                <li>Información al comprador: El comprador recibe información de valor sobre el token que está adquiriendo, como su precio, su rendimiento, su liquidez, etc. Esta información ayuda al comprador a tomar una decisión informada.</li>
                <li>Facilidad de búsqueda: El mercado P2P cuenta con un sistema de filtrado y búsqueda que permite a los usuarios encontrar los tokens que están buscando. Esto facilita la búsqueda de tokens específicos.</li>
                <li>Seguridad y transparencia: El mercado P2P proporciona mensajes de información y pasos a seguir para que las transacciones sean correctas y seguras. Esto ayuda a garantizar que las transacciones se realicen de forma segura y transparente.</li>
              </ul>
              <h5>Resultado</h5>
              <p>El mercado P2P ha tenido una respuesta muy positiva por parte de los usuarios. En las primeras horas de apertura del sistema, ya se realizaron varias transacciones. Los usuarios han reportado que el mercado es sencillo y práctico de usar.</p>
            </li>
            <li>
              <h4>Sistema de referidos</h4>
              <h5>El problema</h5>
              <p>Algunos usuarios que querían un sistema de referidos con el cual traer gente y sacar beneficio con ello.</p>
              <h5>La solución</h5>
              <ul>
                <li>Sencillez: El sistema de referidos es sencillo de entender y de usar. Los usuarios pueden ver fácilmente cómo funciona y cómo pueden beneficiarse de él.</li>
                <li>Gamificación: El sistema de referidos está gamificado con niveles y con curva de dificultad. Esto hace que sea más divertido para los usuarios participar en él y que tengan más incentivos para seguir invitando a nuevos usuarios.</li>
                <li>Facilidad de emisión de invitaciones: El sistema de referidos permite a los usuarios emitir invitaciones de forma sencilla. Los usuarios pueden usar un código QR, compartir un enlace o crear una publicación en redes sociales para invitar a nuevos usuarios.</li>
                <li>Recompensas para ambos: El sistema de referidos recompensa tanto al emisor de la invitación como al usuario que entra nuevo. Esto hace que sea más atractivo para ambos participar en él.</li>
              </ul>
              <h5>Resultado</h5>
              <p>El sistema de referidos ha tenido una respuesta muy positiva por parte de los usuarios. Los usuarios reportan que es sencillo de usar. El sistema también ha contribuido al incremento en el número de usuarios registrados.</p>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  )
}

export default CCrowmie