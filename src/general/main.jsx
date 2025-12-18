import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRouter } from "../Router/MainRouter.jsx";
import { FilterProvider } from "../context/filterContext.jsx/FilterContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterProvider>
      <MainRouter />
    </FilterProvider>
  </StrictMode>
);
