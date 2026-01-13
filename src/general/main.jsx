import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRouter } from "../Router/MainRouter.jsx";
import { FilterProvider } from "../context/filterContext/FilterContext";
import { ORMMethodProvider } from "../context/ORMMethodContext/ORMMethodContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterProvider>
      <ORMMethodProvider>
        <MainRouter />
      </ORMMethodProvider>
    </FilterProvider>
  </StrictMode>
);
