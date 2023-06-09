# <center><img src="https://img.icons8.com/external-filled-color-icons-papa-vector/80/null/external-Crypto-Mining-making-money-on-crypto-filled-color-icons-papa-vector.png"/> Desafío: React Crypto</center>

## <img src="https://img.icons8.com/color/30/null/box-important--v1.png"/> PROBLEMÁTICA

    Una compañía que realiza inversiones con distintos activos, desea realizar una aplicación web para ofrecerlo como servicio a sus clientes minoristas. La misma permite gestionar carteras de criptomonedas, visualizando en tiempo real la tenencia y valor de la misma.
    De manera más específica, la aplicación debe contemplar los siguientes requisitos:
        * La app debe ser web y responsive, tanto en desktop como en mobile debe visualizarse bien.
        * Se debe poder crear, modificar y eliminar carteras.
        * Dentro de una cartera es posible añadir y quitar criptomonedas, añadiendo transacciones.
        * Una transacción puede ser de dos tipos, venta o compra, y debe especificar criptomoneda, cantidad y precio, y fecha.
        * Las transacciones también se pueden modificar y eliminar.
        * También debe desarrollarse una pantalla con una visión general de las carteras, mostrando cantidad de activos en cada una, y valor total de la misma.

### CONSIDERACIONES GENERALES

        1. La aplicación web debe ser desarrollada utilizando el framework react Js, haciendo buen uso del mismo (preferentemente arquitectura basada en componentes).
        2. Se espera poder reproducir el entorno de desarrollo fácilmente.
        3. Para simplificar la prueba, no se requiere login de usuario, y la información sobre carteras y transacciones puede mantenerse de manera local en memoria, local Storage, cache, etc.
        4. Como entregable se espera:
            a. Un repositorio git con el desarrollo, que evidencia su utilización durante el desarrollo.
            b. Instrucciones para replicar el entorno de desarrollo y prueba.
            c. Un alto porcentaje de los requisitos están cubiertos, especificando qué requisitos no fueron desarrollados.
        5. Es deseable que el proyecto cuente con los correspondientes tests unitarios y/o de integración.

         Siéntase libre de añadir otras funcionalidades si lo ve necesario.

#### <img src="https://img.icons8.com/color/20/null/high-priority.png"/> El listado completo de criptomonedas soportados y sus precios deben ser obtenidos de la - [API de Coingecko](https://www.coingecko.com/en/api)

---

## <img src="https://img.icons8.com/emoji/26/null/hammer-and-pick.png"/> Tecnologías

Este proyecto fue creado con [**Vite**](https://vitejs.dev/guide/), utiliza las siguientes **tecnologías**:

- <img src="https://img.icons8.com/color/24/null/html-5--v1.png" alt="icono de HTML5"/> **HTML5**

- <img src="https://img.icons8.com/color/24/null/javascript--v1.png" alt="icono de JavaSCript" /> **JavaScript**

- <img src="https://img.icons8.com/office/24/null/react.png" alt="icono de React" /> [**React**](https://reactjs.org/)

- <img src="https://img.icons8.com/color/26/null/redux.png" alt="icono de Redux" /> [**Redux toolkit**](https://es.redux.js.org/)

- [**Styled Components**](https://styled-components.com/)

- [**Sweet Alert 2**](https://sweetalert2.github.io/)

- [**React-hook-form**](https://react-hook-form.com/) para formularios.

---

## <img src="https://img.icons8.com/external-others-pike-picture/50/null/external-Product-Information-market-others-pike-picture.png"/> Información adicional

- Se utilizó:

  - Intersection Observer API para montar y desmontar criptomonedas.
  - Infinit Scroll para la lista de carteras.
  - API fetch.
  - RXJS para el manejo de observables - MODAL.<br><br>

- Algunas otras caracteristicas:

  - Formularios con validaciones.
  - Compras de criptomonedas en base a las que aún no se tienen, ya que la lista de criptomonedas disponibles filtra las que ya existe en la cartera.
  - Se puede comprar más criptomonedas de las que ya tiene.
  - Vender criptomoneda parcial o completamente.
  - Ciclo de actualización de la lista de criptomonedas cada 225000 ms. (Tiempo estimado en que la API refresca los datos)
  - El nombre de cartera es único.
  - El botón para ver transacciones sólo se muestra si existen las mismas
  - El nombre de las criptomonedas se ajustan dependiendo al dispositivo.

### - Pendientes:

    - Completar Testing.
    - Edición de nombre y dinero de cartera.

---

## <img src="https://img.icons8.com/office/30/null/console.png"/> Cómo probarlo localmente

- Puede clonar el proyecto en alguna carpeta o descargarlo en un archivo comprimido.
- Necesitará tener instalado `Node`.
- Puede usar npm o pnpm, por preferencia en base a rendimiento elijo `pnpm` ( [instalar pnpm ](https://www.npmjs.com/package/pnpm))
- Tiene que crear en la raíz del proyecto un archivo .env, y agregarle: `VITE_API_BASE_URL=https://api.coingecko.com/api/v3`
- Una vez clonado o descargado el proyecto puede usar los siguientes scripts:

### `npm o pnpm install`

Para instalar todos las dependencias que utiliza el proyecto.

### <img src="https://img.icons8.com/office/25/null/Production-order-history.png"/> Modo Development

### `npm o pnpm dev`

Para correr la app en modo desarrollo.

Para poder verlo en el navegador, abrir: [http://localhost:5173/](http://localhost:5173/).

### <img src="https://img.icons8.com/color/35/null/backend-development--v1.png"/> Modo Production

### `npm o pnpm run build-preview`

Para replicar la app en modo producción.

Para poder verlo en el navegador, abrir: [http://localhost:4173/](http://localhost:4173/)

También puedes verlo en: [https://react-crypto-challenge.vercel.app/](https://react-crypto-challenge.vercel.app/)

---

---

## <img src="https://img.icons8.com/color/26/null/person-male.png"/> Desarrollado por:

- Gerez Martinez Luis [<img src="https://img.icons8.com/fluency/24/null/linkedin.png"/>](https://www.linkedin.com/in/luisgerezm/)
