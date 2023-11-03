import { instagramIcon, facebookIcon, whatsappIcon } from "assets/images";
import logoElBaharat from "assets/img/imgSponsors/logoElBaharat.svg";
import directorsAdn from "assets/img/directors.svg";
import { ImageStyled } from "styled-components/App.styled";

const aboutBodyOrder = [
  {
    subtitle: "Visión general",
    text: "ADN - Asociación Civil Acción por los Derechos Naturales, Rio Negro con Personería Jurídica de la Provincia de Rio Negro N° 3740 – Res DGPC N° 151, se conforma a partir de la necesidad de restaurar en la cultura y la sociedad, el valor de la vida humana desde la concepción hasta la muerte natural, de la familia y de la Patria",
  },
  {
    subtitle: "Objetivos",
    text: [
      "Defender la vida humana desde su inicio con la concepción hasta la muerte natural.",
      "Defender la familia natural.",
      "Defender los principios y valores morales básicos de una sociedad.",
      "Promover buenos hábitos y denunciar aquellos que no lo son.",
      "Ejercer injerencia en cuestiones políticas, sociales y legales.",
      "Brindar asistencia social a grupos vulnerables: embarazadas, mujeres víctimas de violencia, jóvenes con adicciones, personas con necesidades básicas insatisfechas, padres cuyos hijos son adoctrinados, etc.",
      "Gestionar y enlazar cada necesidad social con ejecutores, a fin de actuar como un canal.",
      "Contar con presencia en los medios de comunicación y redes sociales para generar contenidos, promover actividades de otras organizaciones, elaborar partes de prensa con actividades y distribuir a medios de información masiva y/o periodistas personalmente.",
      "Organizar actividades ProVida: charlas, conferencias, cursos, capacitaciones, marchas, medios de difusión (canales, revistas, documentos).",
      "Realizar trabajo inter-organizacional para unir conocimientos y esfuerzos con otras organizaciones nacionales y/o locales.",
    ],
  },
  {
    subtitle: "Visión general",
    text: "Con esfuerzo de muchas personas, quedó establecida en la provincia de Río Negro la primera asociación civil Provida de la Patagonia que tiene por objeto asociarse, trabajar en conjunto y de forma coordinada con todos los grupos provida de la zona. A través de esta asociación sin fines de lucro, seguiremos más fuertes que nunca, defendiendo el derecho a la vida del inocente, desde la concepción hasta la muerte natural, defendiendo la familia natural, como unidad básica y primera de toda sociedad, así como los principios y valores que hacen grande a nuestra querida Argentina. Nuestra propuesta consiste en formar un equipo con distintas organizaciones que compartan nuestros objetivos, con el fin de multiplicar los recursos disponibles, incluido el potencial humano, proponiendo planificar sabiamente todas las actividades para tener una llegada más profunda a la vida de la población y alertar sobre los avances de ideas anticientíficas, contrarias a la vida, la familia, los valores y la Patria, subordinadas a poderes económicos internacionales que manipulan nuestro pensamiento para confundirnos y someternos.",
  },
  {
    subtitle: "1° COMISIÓN DIRECTIVA de A.D.N",
    text: (
      <ImageStyled
        image={directorsAdn}
        backgroundSize="contain"
        alt="ADN directors"
      />
    ),
  },
];

const termsAndCondition = [
  {
    titleTerm: "INFORMACIÓN RELEVANTE",
    description: [
      "Es requisito necesario para INTERACTUAR en este sitio, así como su eventual colaboración económica con nosotros que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento.",
      "En algunos casos, para interactuar en la página, será necesario el registro por su parte como usuario, con ingreso de datos personales fidedignos y definición de una contraseña.",
      "El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento. A.D.N. no asume la responsabilidad en caso de que entregue dicha clave a terceros.",
    ],
  },
  {
    titleTerm: "PROPIEDAD",
    description: [
      "Usted no puede declarar propiedad intelectual o exclusiva a ninguno de los contenidos incluyendo, pero no limitándose a nuestros productos, servicios, publicaciones, etc. modificado o sin modificar. Todos los contenidos son propiedad de los proveedores o de los autores firmantes.",
    ],
  },
  {
    titleTerm: "Información Relevante",
    description: [
      "A.D.N garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario  en el caso de requerir una validación no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.",
      "La suscripción a boletines de correos electrónicos u otros medios, publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.",
      "A.D.N se reserva los derechos de cambiar o de modificar estos términos sin previo aviso.",
    ],
  },
];

const infoModalTermsAndConditions = {
  title: "Términos y Condiciones",
  body: termsAndCondition,
};

const sponsorsData = [
  {
    name: <strong>ElBaharat</strong>,
    text: "Exquisitas comidas Árabes!",
    image: logoElBaharat,
    contacts: [
      {
        href: "https://www.instagram.com/_elbaharat/",
        icon: instagramIcon,
      },
      {
        href: "https://www.facebook.com/profile.php?id=100081904998861",
        icon: facebookIcon,
      },
      {
        number: "2996157521",
        message:
          "Hola, Mi nombre es __________, y quisiera información sobre sus productos.",
        icon: whatsappIcon,
      },
    ],
  },
  {
    name: <strong>Nombre de ejemplo</strong>,
    text: "Texto de Ejemplo!",
    image: logoElBaharat,
    contacts: [
      {
        href: "https://www.instagram.com/_elbaharat/",
        icon: instagramIcon,
      },
      {
        href: "https://www.facebook.com/profile.php?id=100081904998861",
        icon: facebookIcon,
      },
      {
        number: "2996157521",
        message:
          "Hola, Mi nombre es __________, y quisiera información sobre sus productos.",
        icon: whatsappIcon,
      },
    ],
  },
];

const informationDonateSection = [
  "ADN se compromete a que las donaciones serán utilizadas exclusivamente para su crecimiento.",
  "Sólo debes que pulsar en el botón “Donar” y rellenar los datos que requiera 'Mercado Pago'.",
];

export {
  aboutBodyOrder,
  termsAndCondition,
  infoModalTermsAndConditions,
  sponsorsData,
  informationDonateSection,
};
