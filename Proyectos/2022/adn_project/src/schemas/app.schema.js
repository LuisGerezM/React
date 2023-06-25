const lenguageNavigator = window.navigator.language.slice(0, 2);

const appSchema = {
  addArticleAuthor: {
    es: "Agrega el autor del artículo",
    en: "Add article author",
  },
  addArticleBody: {
    es: "Agrega el cuerpo del artículo",
    en: "Add article body",
  },
  addArticleTitle: {
    es: "Agrega el título del artículo",
    en: "Add article title",
  },
  addFoodText: {
    es: "Nuevo producto",
    en: "ANew Product",
  },
  areYouSureText: {
    es: "Estás seguro",
    en: "Are you sure",
  },
  areYouSurePleaseConfirmAgainText: {
    es: "Estás seguro que deseas confirmar esta acción? presioná nuevamente 'confirmar'",
    en: "Are you sure you want to confirm this action? press 'confirm' again",
  },
  areYouSureDeleteText: {
    es: "Estás seguro que deseas eliminar: ",
    en: "Are you sure want to delete: ",
  },
  authorText: {
    es: "Autor",
    en: "Author",
  },
  cancelText: {
    es: "Cancelar",
    en: "Cancel",
  },
  clickHereText: {
    es: "Click aquí",
    en: "Click here",
  },
  confirmText: {
    es: "Confirmar",
    en: "Confirm",
  },
  confirmActionText: {
    es: "Confirmar Acción",
    en: "Confirm action",
  },
  contactTheAdmin: {
    es: "Comunicate con el administrador",
    en: "Contact the administrator",
  },
  createdBy: {
    es: "Creado por",
    en: "Created by",
  },
  createNewsSuccess: {
    es: "Noticia creada satisfactoriamente",
    en: "News created successfully",
  },
  closeGooglePopUp: {
    es: "Para iniciar sesión ingresá tus credenciales",
    en: "To log in enter your credentials",
  },
  closeSessionText: {
    es: "Cerrar sesión",
    en: "Close session",
  },
  date: {
    es: "Fecha",
    en: "Date",
  },
  dashboard: {
    es: "Dashboard",
    en: "Dashboard",
  },
  deleteNewsText: {
    es: "Eliiminar Noticia",
    en: "Delete New",
  },
  doNotIdentifyDocument: {
    es: "No pudimos identificar el documento",
    en: "we could not identify the document",
  },
  doYouWantToBePartTeam: {
    es: "Quieres formar parte del equipo de ADN, o, colaborar con el mismo? hace",
  },
  editedBy: {
    es: "Editado por",
    en: "Edited by",
  },
  editNewsText: {
    es: "Editar Noticia",
    en: "Edit New",
  },
  editUserText: {
    es: "Editar usuario",
    en: "Edited user",
  },
  filterToText: {
    es: "Filtrar por: ",
    en: "Filter to: ",
  },
  findOnTheNetworks: {
    es: "Encontranos en las redes con un click",
  },
  giveYourSupport: { es: "Danos tu apoyo" },
  login: {
    es: "Iniciar sesión",
  },
  loginSuccess: {
    es: "Inicio de sesión exitoso",
    en: "Successful login",
  },
  loginWith: {
    es: "Inicia sesión con",
  },
  newNews: { es: "Nueva noticia" },
  newsBodyText: {
    es: "newsBody",
    en: "newsBody",
  },
  newOrder: { es: "Nueva orden" },
  newPossibleMemberADN: { es: "Nuevo Prospecto" },
  newsToShare: {
    es: "Noticias",
    en: "News",
  },
  newUserADN: { es: "Nuevo usuario ADN" },
  noticeADN: { es: "Noticias", en: "Notices" },
  operationSuccess: {
    es: "Operación realizada satisfactoriamente",
    en: "operation successfully",
  },
  registerNewUserText: { es: "Registrar usuario", en: "User register" },
  searchResultsText: { es: "Resultados de la búsqueda", en: "Search result" },
  seeNews: { es: "Ver noticias" },
  seeOrders: { es: "Ver pedidos", en: "See order" },
  seePossibleMembresADN: { es: "Ver posibles miembros ADN" },
  sendText: { es: "Enviar", en: "Send" },
  thanksToSponsors: {
    es: "Agradecimiento a nuestros patrocinadores",
    en: "Thanks to our sponsors",
  },
  thereAreProblemsContactAdministrator: {
    es: "Upss, tuvimos unos inconvenientes, por favor comunicate con el administrador ",
  },
  thereAreProblemsTryLater: {
    es: "Upss, tuvimos unos problemas, intenta más tarde.",
  },
  titleText: {
    es: "Título",
    en: "Title",
  },
  unidentifiedUser: {
    es: "Usuario no identificado",
    en: "Unidentified user",
  },
  unAuthorizationUser: {
    es: "Usuario no identificado",
    en: "Unidentified user",
  },
  weNotFindItThatSearch: {
    es: "No encontramos esa búsqueda",
    en: "We not find it that search",
  },
};

const lenguageAppSchema = (text) => {
  return appSchema[text][lenguageNavigator]
    ? appSchema[text][lenguageNavigator]
    : appSchema[text]["en"];
};
export { lenguageAppSchema };
