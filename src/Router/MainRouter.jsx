import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../components/main/Home";
import { AboutMethodsFull } from "../components/aboutMethodsFull/AboutMethodsFull";
import { MainOptiPage } from "../components/optimization/mainOptiPage/mainOptiPage";

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/methods" element={<AboutMethodsFull />} />
          <Route path="/optimization" element={<MainOptiPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
