import { lazy, useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import BaseStyles from "./styles/BaseStyles";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = lazy(() => import("./pages/landingPage"));

function App() {
  useEffect(function () {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <BaseStyles />
    </Layout>
  );
}

export default App;
