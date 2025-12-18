import { Link } from "react-router-dom";

export const LearnMore = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-12 md:py-16 px-6 lg:px-20 bg-[#F5F7FA]">
      <div className="mb-10 lg:mb-0 lg:mr-12">
        <img
          src="learn-more.svg"
          alt="Алгоритмы оптимизации"
          className="w-full lg:w-170 h-auto"
        />
      </div>

      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Научная основа наших решений
        </h2>

        <p className="text-gray-700 mb-8">
          Мы используем только проверенные математические методы, которые
          доказали свою эффективность в промышленности и науке. Каждый алгоритм
          тщательно оптимизирован для быстрой работы с реальными бизнес-данными.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">
              Линейное программирование
            </h3>
            <p className="text-sm text-gray-600">
              Симплекс-метод, двойственный симплекс, метод внутренней точки
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">
              Дискретная оптимизация
            </h3>
            <p className="text-sm text-gray-600">
              Целочисленное программирование, метод ветвей и границ
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Теория игр</h3>
            <p className="text-sm text-gray-600">
              Матричные игры, равновесие Нэша, кооперативные игры
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">
              Нечеткая логика
            </h3>
            <p className="text-sm text-gray-600">
              Для задач с неопределенными параметрами и оценками
            </p>
          </div>
        </div>
        <div>
          <Link
            to={"/methods"}
            className="mt-8 text-green-600 hover:text-green-800 font-medium flex items-center md:justify-center"
          >
            Подробнее о методах
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
