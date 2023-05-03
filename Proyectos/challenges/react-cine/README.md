# **"Desafío de código React"**

El objetivo de este desafío de codificación es brindarle la oportunidad de mostrar su conocimiento y mostrarnos cómo trabaja en un proyecto de la vida real.\
No lo obligamos intencionalmente a usar ninguna biblioteca en particular (que no sea React) para que no tenga que aprender algo nuevo solo para un desafío de código, pero tenga en cuenta que incluso cuando no esperamos una aplicación lista para producción, esperamos que pueda explicar por qué eligió esas dependencias/librerías para el trabajo.\
Además, tenga en cuenta no agregar funciones fuera del alcance de este desafío de código para que no termine invirtiendo más tiempo del necesario.

## **Introducción 📍**

Su sala de cine local tiene una gran necesidad de atraer una nueva audiencia.\
Para hacer esto, le piden que cree una aplicación web simple que permita a los usuarios descubrir nuevas películas y buscarlas.
Dado que no tienen un servicio de back-end, la primera versión de la aplicación se creará utilizando la API pública:

- https://developers.themoviedb.org/3
- FAQ: https://www.themoviedb.org/documentation/api

## **Características**

El cine solicita las siguientes funciones para la primera versión

## **Descubrir** 📝

Al abrir la aplicación web, los usuarios deberían poder ver una lista de películas sugeridas por la aplicación y ordenadas por popularidad.

La paginación no es necesaria para esta versión.

- Referencia de la API: https://developers.themoviedb.org/3/discover/movie-discover

## **Búsqueda** 👓

En la vista de descubrimiento, agregue una barra de búsqueda en la parte superior para permitir a los usuarios consultar información sobre películas.
Si el campo de búsqueda está vacío, muestra los resultados del descubrimiento

- Referencia de la API: https://developers.themoviedb.org/3/search/search-movies

## **Filtrar por clasificaciónbrir** 🔎

La calificación es un valor entre 0 y 10.
Agrega un filtro de clasificación en forma de cinco estrellas como https://dribbble.com/shots/1053518-Filters.\
Al seleccionar una estrella, también deben seleccionarse todas las estrellas de la izquierda.
El rango de cada estrella es 2, por lo que, si se selecciona la primera estrella, sólo deberían aparecer películas con calificación 0-2. Si se selecciona la segunda estrella, sólo deberían aparecer películas con una calificación de 2 a 4, y así sucesivamente.\
Si la estrella en la que se hizo clic es la actualmente activa, deshabilite el filtro.

Haga este filtrado en el lado del cliente.

- Campo de calificación en el modelo de película: `vote_average`

## **Vista de detalles** 👁️‍🗨️

Al hacer clic, se debe mostrar una vista detallada, mostrando más información sobre la película.

## **Diseño** 🎨

No requerimos diseños asombrosos.
Una interfaz de usuario limpia y mínima servirá.
Queremos ver las imágenes de películas proporcionadas por la API.
Una sugerencia de diseño (pero tú decides) es:

- https://dribbble.com/shots/1682568-Flixus-Homepage-WIP/attachments/266476

## **Requisitos de desarrollo** 💻

    ● Usa `create-react-app` para este proyecto
    ● Usar la última versión de React
    ● Proporcionar todos los pasos necesarios para iniciar la aplicación

### `-----------------------------------------------------------------`

### Clonar

Cloná el proyecto usando

- git clone https://github.com/LuisGerezM/challenge-react-cine.git

Parate en el directorio dónde está el proyecto y corré

### `npm install`

y luego :

### `npm start`

Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

### `Atención 👀` 

No olvides de completar el .env, para ello vas a tener que crearte una cuenta en:

- https://www.themoviedb.org/login

- base url: https://api.themoviedb.org/3
- url image : https://image.tmdb.org/t/p/w500

### **_Herramientas utilizadas:_**

    ● React.
    ● React router dom v6.
    ● React Hooks.
    ● Context API.
    ● API Fetch.
    ● Styled Components
    ● React Bootastrap
    ● SweetAlert2
