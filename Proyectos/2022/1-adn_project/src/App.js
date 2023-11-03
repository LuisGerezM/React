import { lazy, Suspense } from "react";
import { Header } from "components/Header/Header";
import { useThemeApp } from "hooks/useThemeApp";
import { ThemeProvider } from "styled-components";
import { RowStyled } from "styled-components/App.styled";
import { GlobalStyle } from "styled-components/GlobalStyle.styled";
import { Route } from "react-router-dom";
import { windowSize } from "utilities/windowSize.util";
import { AdminRoutes, PrivateRoutes, PublicRoutes } from "models/routes";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import { NewsProvider } from "views/News/context/NewsProvider";
import { ModalConfirmProvier } from "context/ModalConfirmProvier";
import { ModalConfirm } from "components/Modals/ModalConfirm/ModalConfirm";
import { AlertUserFeedback } from "components/Alerts/AlertUserFeedback/AlertUserFeedback";

const AuthenticationGuard = lazy(() => import("guards/authentication.guard"));
const AuthorizationGuard = lazy(() => import("guards/authorization.guard"));
const Home = lazy(() => import("views/Home/Home"));
const Login = lazy(() => import("views/Login/Login"));
const News = lazy(() => import("views/News/News"));
const RoutesWithAuthentication = lazy(() =>
  import("views/Private/Authentication/RoutesWithAuthentication")
);
const RoutesWithAuthorization = lazy(() =>
  import("views/Private/Authorization/RoutesWithAuthorization")
);
const SectionProductAndDonate = lazy(() =>
  import("views/SectionProductAndDonate/SectionProductAndDonate")
);
const FormPossibleNewMember = lazy(() =>
  import("views/FormPossibleNewMember/FormPossibleNewMember")
);

function App() {
  const { themeSelect, themesStyled, handleChangeTheme } = useThemeApp();

  return (
    <ThemeProvider theme={themesStyled[themeSelect]}>
      <GlobalStyle windowSize={windowSize()} />
      <ModalConfirmProvier>
        <Header
          themeSelect={themeSelect}
          handleChangeTheme={handleChangeTheme}
        />
        <Suspense fallback={<SpinnerLoad />}>
          <RowStyled className="RowStyled">
            <ModalConfirm />
            <AlertUserFeedback />
            <RoutesNoMatch>
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route
                path={PublicRoutes.FORMNEWPOSSIBLEMEMBER}
                element={<FormPossibleNewMember />}
              />
              <Route
                path={PublicRoutes.PRODANDDONATE}
                element={<SectionProductAndDonate />}
              />

              <Route
                path={PublicRoutes.NEWS}
                element={
                  <NewsProvider>
                    <News />
                  </NewsProvider>
                }
              />

              <Route element={<AuthenticationGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<RoutesWithAuthentication />}
                />
              </Route>

              <Route element={<AuthorizationGuard />}>
                <Route
                  path={`${AdminRoutes.PRIVATEAUTH}/*`}
                  element={<RoutesWithAuthorization />}
                />
              </Route>
            </RoutesNoMatch>
          </RowStyled>{" "}
        </Suspense>
      </ModalConfirmProvier>
    </ThemeProvider>
  );
}

export default App;
