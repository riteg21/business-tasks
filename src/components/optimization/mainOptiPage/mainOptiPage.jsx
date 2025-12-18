import { NavOptiBar } from "./leftSideBar/Bar";
import TextType from "./textType/TextType";
import { useFilter } from "../../../context/filterContext.jsx/FilterContext";

export const MainOptiPage = () => {
  const { activeCategory, whichMethodComponent } = useFilter();
  return (
    <div className="min-h-screen bg-[#F5F7FA]/30 flex">
      <div className="py-3 ps-3 shrink-0">
        <NavOptiBar />
      </div>

      <div className="flex-1 flex justify-center items-center p-4">
        {!activeCategory ? (
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <img
              src="startOpti.svg"
              alt="Оптимизация"
              className="max-w-[70%] max-h-[70%] object-contain"
            />
            <TextType
              text={[
                "Добро пожаловать в раздел оптимизации!",
                "Здесь вы сможете улучшить производительность вашего бизнеса.",
                "Начните оптимизировать прямо сейчас!",
              ]}
              typingSpeed={65}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="font-semibold text-2xl"
            />
          </div>
        ) : (
          whichMethodComponent()
        )}
      </div>
    </div>
  );
};
