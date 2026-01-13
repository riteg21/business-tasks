import { useForm } from "react-hook-form";
import { useORMMethod } from "../../../../context/ORMMethodContext/ORMMethodContext";

export const ORM = () => {
  const { onSubmitMethod, methodData } = useORMMethod();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      lengthOfStartingMaterials: 6000,
      lengthsOfNecessaryMaterials: "1000, 2000, 3000",
      quantitiesOfNecessaryMaterials: "50, 30, 20",
    },
  });

  const onSubmit = (data) => {
    onSubmitMethod(data);
  };

  if (methodData) {
    if (methodData.error) {
      return (
        <div className="w-full h-full flex flex-col justify-center items-center from-gray-50 to-gray-100 py-8 px-4">
          <div className="max-w-4sxl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-red-500 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  Ошибка расчета
                </h2>
              </div>
              <div className="p-8">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-6 h-6 text-red-600 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-red-800">
                      {methodData.message}
                    </h3>
                  </div>
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() => window.location.reload()}
                      className="px-8 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Вернуться к форме
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    console.log(methodData);
    return (
      <div className="w-full h-full flex flex-col justify-center items-center from-gray-50 to-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-green-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">
                Результаты расчета
              </h2>
              <p className="text-blue-100 mt-2">
                Оптимальный план раскроя материалов
              </p>
            </div>
            <div className="p-5">
              <div className="rounded-xl mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-sm text-gray-500">
                      Исходных заготовок использовано
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {methodData.solution?.totalStock || 0}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-sm text-gray-500">Общие отходы</div>
                    <div className="text-2xl font-bold text-orange-600">
                      {methodData.solution?.totalWaste?.toFixed(1) || 0} мм
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-sm text-gray-500">Эффективность</div>
                    <div className="text-2xl font-bold text-green-600">
                      {methodData.solution?.efficiency?.toFixed(1) || 0}%
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Оптимальные схемы раскроя:
                </h3>
                <div className="space-y-3">
                  {methodData.solution?.patterns?.map((pattern, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          Схема №{index + 1} : {pattern.count} заготовок
                        </span>
                        <span className="text-sm text-gray-500">
                          Отходы: {pattern.waste} мм на заготовку
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pattern.cuts.map((cut, idx) => (
                          <div
                            key={idx}
                            className="bg-white px-3 py-1 rounded shadow"
                          >
                            {cut.count} × {cut.length} мм
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Новый расчет
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-green-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              Симплекс-метод оптимизации раскроя материалов
            </h2>
            <p className="text-blue-100 mt-2">
              Введите параметры для расчета оптимального плана раскроя с
              минимальными отходами
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <div className="space-y-6">
              {/* секция исходных данных */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-6 bg-blue-600 rounded-l-lg mr-3"></div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Исходные данные
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {/* длина исходных заготовок */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="lengthOfStartingMaterials"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Длина исходных заготовок (мм)
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Число с точностью
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        {...register("lengthOfStartingMaterials", {
                          required: "Обязательное поле",
                          min: { value: 0.1, message: "Минимум 0.1 мм" },
                          max: {
                            value: 1000000,
                            message: "Максимум 1000000 мм",
                          },
                          pattern: {
                            value: /^[0-9]+(\.[0-9]+)?$/,
                            message: "Только числа",
                          },
                        })}
                        type="text"
                        placeholder="Например: 6000"
                        className={`w-full px-4 py-3 pl-11 rounded-lg border-2 transition-all duration-200 outline-none bg-white ${
                          errors.lengthOfStartingMaterials
                            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                            : "border-gray-200 focus:border-blue-300 focus:ring-1 focus:ring-blue-100"
                        }`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.lengthOfStartingMaterials && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.lengthOfStartingMaterials.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Данные для раскроя
                  </span>
                </div>
              </div>

              {/* секция требуемых деталей */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-6 bg-green-600 rounded-l-lg mr-3"></div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Требуемые детали
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* длины потребных заготовок */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="lengthsOfNecessaryMaterials"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Длины деталей (мм)
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Через запятую
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        {...register("lengthsOfNecessaryMaterials", {
                          required: "Обязательное поле",
                          pattern: {
                            value:
                              /^[0-9]+(\.[0-9]+)?(,\s*[0-9]+(\.[0-9]+)?)*$/,
                            message: "Формат: 1000, 2000, 3000",
                          },
                          validate: {
                            validNumbers: (value) => {
                              const numbers = value
                                .split(",")
                                .map((item) => parseFloat(item.trim()))
                                .filter((item) => !isNaN(item) && item > 0);
                              return (
                                numbers.length > 0 ||
                                "Введите хотя бы одно число"
                              );
                            },
                          },
                        })}
                        type="text"
                        placeholder="Например: 1000, 2000, 3000"
                        className={`w-full px-4 py-3 pl-11 rounded-lg border-2 transition-all duration-200 outline-none bg-white ${
                          errors.lengthsOfNecessaryMaterials
                            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                            : "border-gray-200 focus:border-green-200 focus:ring-1 focus:ring-green-100"
                        }`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.lengthsOfNecessaryMaterials && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.lengthsOfNecessaryMaterials.message}
                      </p>
                    )}
                  </div>

                  {/* количество каждой детали */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="quantitiesOfNecessaryMaterials"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Количество деталей
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Через запятую
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        {...register("quantitiesOfNecessaryMaterials", {
                          required: "Обязательное поле",
                          pattern: {
                            value: /^[0-9]+(,\s*[0-9]+)*$/,
                            message: "Формат: 50, 30, 20",
                          },
                          validate: {
                            validNumbers: (value) => {
                              const numbers = value
                                .split(",")
                                .map((item) => parseInt(item.trim()))
                                .filter((item) => !isNaN(item) && item > 0);
                              return (
                                numbers.length > 0 ||
                                "Введите хотя бы одно число"
                              );
                            },
                          },
                        })}
                        type="text"
                        placeholder="Например: 50, 30, 20"
                        className={`w-full px-4 py-3 pl-11 rounded-lg border-2 transition-all duration-200 outline-none bg-white ${
                          errors.quantitiesOfNecessaryMaterials
                            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                            : "border-gray-200 focus:border-green-200 focus:ring-1 focus:ring-green-100"
                        }`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.quantitiesOfNecessaryMaterials && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.quantitiesOfNecessaryMaterials.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`px-8 py-3 font-semibold rounded-xl duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 ${
                      isValid
                        ? "bg-green-500 text-white hover:bg-green-600 transition-all"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Рассчитать оптимальный раскрой
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
