# <center><img src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/external-bee-spring-creatype-filed-outline-colourcreatype-2.png" alt="external-bee-spring-creatype-filed-outline-colourcreatype-2"/> Desafío React: Bootcamp Krowdy</center>

## <img src="https://img.icons8.com/color/30/null/box-important--v1.png"/> Requerimientos

    - Se debe poder cambiar de vista.
    - Se debe poder grabar.
    - Se debe poder regrabar.
    - Se debe poder detener.
    - El minutero comienza en cero y suma uno por uno hasta 2 minutos.
    - Se debe poder detener la grabación de forma manual, antes de los 2 minutos, o de forma automática a los 2 minutos de grabación.
    - Cuándo se comience el proceso de grabación el punto rojo debe "palpitar", aparecer y desaparecer. Debe permanecer estático si no se está grabando.
    - Cuando se termina de grabar un video, se muestra dos botones, uno para "Re grabar", y otro para "Previsualizar" la grabación.
    - Se debe tener en cuenta la lógica del boton "Siguiente" (la bpusqueda del siguiente es ciclico). Cuando se hace click en este, se debe mostrar la siguiente pregunta que aún no se haya respondido. En caso de faltar la pregunta número 2, y encontrarse en una pregunta posterior, se reiniciará la búsqueda hasta mostrar la misma. Otro ejemplo, si estas en la 4, y respondiste 1 y 3, al dar siguiente, va a la 2. Además, una vez que se respondan todas las preguntas, el botón siguiente, en la última pregunta, cambiará al nombre "Terminar", el mismo debe disparar un evento que nos llevará a la lista de respuestas.
    - Se debe tener en cuenta la lógica del boton "Terminar". Cuando se termina de responder todas las preguntas, si es que la última que se respondió no es la pregunta final (ejemplo, si son 4 preguntas, la pregunta final es la 4ta), al dar click en "Siguiente" debe mostrarse esta última pregunta y el botón "Siguiente" cambiará el nombre a "Terminar", al dar click en este, nos llevará a la lista de los videos.
    - Se debe poder reproducir los videos en la vista "lista de videos".
    - El boton enviar deberia estar habilitado sólo cuándo todas las preguntas estén respondidas. Caso contrario, debe permanecer deshabilitado.
    - Se debe poder hacer uso de lo aprendido en clase.
    - Se debe añadir rutas para las vistas (Deseable).
    - Se debe poder añadir n cantidad de preguntas, es decir, la cantidad de preguntas a realiarse debe poder ser dinámica.
    - Se debe tener una estructura facil de modificar.

## <img src="https://img.icons8.com/external-others-pike-picture/50/null/external-Product-Information-market-others-pike-picture.png"/> Recursos:

Modelo - FIGMA: [https://www.figma.com/file/qqx6eaZ9vZNi6YMsSzyrKI/VOD?node-id=0%3A1&authuser=1](FIGMA)

Administración de video - WebRTC: [https://webrtc.github.io/samples/?authuser=1](WebRTC)

---

---

## <img src="https://img.icons8.com/stickers/100/book-1.png" alt="book-1" /> Para este desarrollo se usaron la librerias React Router DOM y Styled Components

---

---

## <img src="https://img.icons8.com/office/30/null/console.png"/> Cómo probarlo localmente

- Puede clonar el proyecto en alguna carpeta o descargarlo en un archivo comprimido.
- Necesitará tener instalado `Node`.
- Puede usar npm o pnpm, por preferencia en base a rendimiento elijo `pnpm` ( [instalar pnpm ](https://www.npmjs.com/package/pnpm))
- Una vez clonado o descargado el proyecto puede usar los siguientes scripts:

### `npm o pnpm install`

Para instalar todos las dependencias que utiliza el proyecto.

### <img src="https://img.icons8.com/office/25/null/Production-order-history.png"/> Modo Development

### `npm o pnpm dev`

Para correr la app en modo desarrollo.

Para poder verlo en el navegador, abrir: [http://localhost:5173/](http://localhost:5173/).

---

---

## <img src="https://img.icons8.com/color/26/null/person-male.png"/> Desarrollado por:

- Gerez Martinez Luis [<img src="https://img.icons8.com/fluency/24/null/linkedin.png"/>](https://www.linkedin.com/in/luisgerezm/)
