import { Link } from "react-router-dom";

export const GoToStart = () => {
  return (
    <div className="py-8 md:py-12 lg:py-15 px-4 sm:px-6 lg:px-8 xl:px-40 bg-[#F5F7FA]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="max-w-full lg:max-w-lg order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-center lg:text-left">
            Оптимизируйте бизнес-процессы с помощью математических методов
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed text-center lg:text-left">
            Наш сервис использует передовые алгоритмы оптимизации, включая
            симплекс-метод, для решения сложных бизнес-задач. Увеличьте прибыль,
            сократите издержки и найдите оптимальное распределение ресурсов с
            точностью до <span className="text-green-700 font-bold">99%</span>.
          </p>

          <div className="space-y-3 md:space-y-4 mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="min-w-2 w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <span className="text-sm sm:text-base text-gray-800">
                Автоматический расчет оптимальных решений
              </span>
            </div>
            <div className="flex items-center">
              <div className="min-w-2 w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <span className="text-sm sm:text-base text-gray-800">
                Визуализация результатов и рекомендации
              </span>
            </div>
            <div className="flex items-center">
              <div className="min-w-2 w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <span className="text-sm sm:text-base text-gray-800">
                Поддержка множества ограничений и переменных
              </span>
            </div>
          </div>

          <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
            <Link
              to={"/optimization"}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
            >
              Начать оптимизацию
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 w-full lg:w-auto">
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 from-blue-400/20 to-cyan-400/20 rounded-2xl blur-lg md:blur-xl"></div>
          <img
            src="Illustration.svg"
            alt="Визуализация процесса оптимизации"
            className="w-full sm:max-w-sm md:max-w-md lg:w-190 xl:w-120 h-auto relative z-10 drop-shadow-lg mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
};
