import { Suspense, lazy } from "react";
import { routes } from "./models/routes.models";

import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";

import { SpinnerLoad } from "@/components/SpinnerLoad";

import { GlobalStyle } from "./styled-components/GlobalStyle.styled";

const Home = lazy(() => import("./pages/Home"));
const AnswerVideos = lazy(() => import("./pages/AnswerVideos"));

function App() {
  return (
    <div className='main'>
      <GlobalStyle />
      <Suspense fallback={<SpinnerLoad />}>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.ANSWER_VIDEOS} element={<AnswerVideos />} />
          <Route path='*' element={<Navigate to={routes.HOME} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
