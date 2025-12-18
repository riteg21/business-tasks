import { filterItems } from "../../../../../data/filterItemsOpti";
import { useFilter } from "../../../../../context/filterContext.jsx/FilterContext";

export const Filter = () => {
  const { handleCategoryClick, activeCategory } = useFilter();
  return (
    <div className="flex flex-col gap-9 mb-10 w-full max-w-xs">
      {filterItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleCategoryClick(item.id)}
          className={`group relative font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 ${
            activeCategory === item.id
              ? "bg-white border-l-5 border-emerald-500 shadow-md shadow-emerald-50 pl-5"
              : "bg-white/90 border-l-4 border-transparent hover:bg-white hover:border-l-4 hover:border-emerald-300 hover:shadow-sm hover:shadow-emerald-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg transition-transform duration-200 group-hover:scale-120">
              {item.icon}
            </span>
            <span className="text-gray-800 group-hover:text-green-800 transition-colors duration-200 text-left">
              {item.title}
            </span>
          </div>
          <div className="absolute inset-0 rounded-xl from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500 -z-10" />
        </button>
      ))}
    </div>
  );
};
