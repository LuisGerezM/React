import { Suspense } from "react";
import { lazy } from "react";
import { Header } from "./components/Header/Header";
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad";
import { Footer } from "components/Footer/Footer";
import { MoviesProvider } from "contexts/MoviesContext/MoviesProvider";
import Discovery from "views/Discovery/Discovery";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { utilTransition } from "utilities/utilTransition";
import { GlobalStyle } from "App.styles";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const MovieDetails = lazy(() => import("views/MovieDetails/MovieDetails"));

function App() {
  const pageTransition = utilTransition("pageTransition");
  const location = useLocation();

  return (
    <MoviesProvider>
      <GlobalStyle />
      <motion.div  initial="out" animate="in" exit="out" variants={pageTransition}>
        <Header />
      </motion.div>

      <Container className="mt-3">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Discovery />} />
          <Route
            path="/movie-details/:movieId"
            element={
              <Suspense fallback={<SpinnerLoad />}><MovieDetails /></Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>

      <motion.div  initial="out" animate="in" exit="out" variants={pageTransition}>
        <Footer />
      </motion.div>
    </MoviesProvider>
  );
}

export default App;
