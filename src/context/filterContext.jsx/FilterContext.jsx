import { createContext, useContext, useState } from "react";
import { ORM } from "../../components/optimization/methods/ORM/ORM";

const FilterContext = createContext();

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}

export const FilterProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (id) => {
    if (activeCategory === id) {
      setActiveCategory(null);
    } else {
      setActiveCategory(id);
    }
  };

  const whichMethodComponent = () => {
    switch (activeCategory) {
      case 1:
        return <ORM />;
      case 2:
        return <div>Метод 2</div>;
      case 3:
        return <div>Метод 3</div>;
      case 4:
        return <div>Метод 4</div>;
      case 5:
        return <div>Метод 5</div>;
      case 6:
        return <div>Метод 6</div>;
      default:
        return null;
    }
  };

  const value = {
    handleCategoryClick,
    activeCategory,
    whichMethodComponent,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
