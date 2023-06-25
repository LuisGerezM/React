import { PrivateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import RegisterNewFood from "./RegisterNewFood/RegisterNewFood";
import SeeOrders from "./SeeOrders/SeeOrders";
import SeePossibleNewMembers from "./SeePossibleNewMembers/SeePossibleNewMembers";

const RoutesWithAuthentication = () => {
  return (
    <RoutesNoMatch>
      <Route path={PrivateRoutes.SEEORDER} element={<SeeOrders />} />
      <Route
        path={PrivateRoutes.REGISTERNEWFOOD}
        element={<RegisterNewFood />}
      />
      <Route
        path={PrivateRoutes.SEEPOSSIBLEMEMBERS}
        element={<SeePossibleNewMembers />}
      />
    </RoutesNoMatch>
  );
};
export default RoutesWithAuthentication;
