import {
  addNewFood,
  bookMark,
  dashboardIcon,
  infoIcon,
  loginIcon,
  newPossibleMemberIcon,
  ordersIcon,
  productsIcon,
  registerNewUserIcon,
  showPossibleMembersIcon,
} from "assets/images";
import { AdminRoutes, PrivateRoutes, PublicRoutes } from "models/routes";
import { lenguageAppSchema } from "./app.schema";

export const loginRoute = {
  name: lenguageAppSchema("login"),
  path: `${PublicRoutes.LOGIN}`,
  icon: loginIcon,
};

export const pubRoutes = [
  {
    name: "ADN",
    path: `${PublicRoutes.HOME}`,
    icon: infoIcon,
  },
  {
    name: lenguageAppSchema("noticeADN"),
    path: `${PublicRoutes.NEWS}`,
    icon: bookMark,
  },
  {
    name: lenguageAppSchema("giveYourSupport"),
    path: `${PublicRoutes.PRODANDDONATE}`,
    icon: productsIcon,
  },
];

export const privRoutes = [
  {
    name: lenguageAppSchema("seeOrders"),
    path: `${PrivateRoutes.PRIVATE}/${PrivateRoutes.SEEORDER}`,
    icon: ordersIcon,
  },
  {
    name: lenguageAppSchema("addFoodText"),
    path: `${PrivateRoutes.PRIVATE}/${PrivateRoutes.REGISTERNEWFOOD}`,
    icon: addNewFood,
  },
  {
    name: lenguageAppSchema("seePossibleMembresADN"),
    path: `${PrivateRoutes.PRIVATE}/${PrivateRoutes.SEEPOSSIBLEMEMBERS}`,
    icon: showPossibleMembersIcon,
  },
  {
    name: lenguageAppSchema("newPossibleMemberADN"),
    path: `${PublicRoutes.FORMNEWPOSSIBLEMEMBER}`,
    icon: newPossibleMemberIcon,
  },
];

export const admRoutes = [
  {
    name: lenguageAppSchema("registerNewUserText"),
    path: `${AdminRoutes.PRIVATEAUTH}/${AdminRoutes.REGISTERNEWUSER}`,
    icon: registerNewUserIcon,
  },
  {
    name: lenguageAppSchema("dashboard"),
    path: `${AdminRoutes.PRIVATEAUTH}/${AdminRoutes.DASHBOARD}`,
    icon: dashboardIcon,
  },
];
