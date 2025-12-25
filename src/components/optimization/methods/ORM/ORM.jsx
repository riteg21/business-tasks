import { useForm } from "react-hook-form";
import { useState } from "react";

// прямой симплекс метод для решения задач раскроя - из полученных входных данных составляем наиболее оптимизированный план раскроя минимизирующей функции с минимальными отходами

// input type data: кол-во исходных деталей, длина исходных заготовок, количество типов заготовок, длины потребных заготовок

export const ORM = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      countOfStartingMaterials: "",
      lengthOfStartingMaterials: "",
      countOfNecessaryMaterials: "",
      lengthsOfNecessaryMaterials: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Данные для симплекс-метода:", data);
  };

  return (
    <div className="min-h-screen from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* количество исходных заготовок */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="countOfStartingMaterials"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Количество исходных заготовок
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Целое число
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        {...register("countOfStartingMaterials", {
                          required: "Обязательное поле",
                          min: { value: 1, message: "Минимум 1 заготовка" },
                          max: {
                            value: 1000,
                            message: "Максимум 1000 заготовок",
                          },
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "Только целые числа",
                          },
                        })}
                        type="number"
                        placeholder="Например: 100"
                        className={`w-full px-4 py-3 pl-11 rounded-lg border-2 transition-all duration-200 outline-none bg-white ${
                          errors.countOfStartingMaterials
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.countOfStartingMaterials && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.countOfStartingMaterials.message}
                      </p>
                    )}
                  </div>

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
                          max: { value: 10000, message: "Максимум 10000 мм" },
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
                  {/* количество типов заготовок */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="countOfNecessaryMaterials"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Количество типов заготовок
                      </label>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Типы деталей
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        {...register("countOfNecessaryMaterials", {
                          required: "Обязательное поле",
                          min: { value: 1, message: "Минимум 1 тип" },
                          max: { value: 20, message: "Максимум 20 типов" },
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "Только целые числа",
                          },
                        })}
                        type="number"
                        placeholder="Например: 3"
                        className={`w-full px-4 py-3 pl-11 rounded-lg border-2 transition-all duration-200 outline-none bg-white ${
                          errors.countOfNecessaryMaterials
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
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.countOfNecessaryMaterials && (
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
                        {errors.countOfNecessaryMaterials.message}
                      </p>
                    )}
                  </div>

                  {/* длины потребных заготовок */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="lengthsOfNecessaryMaterials"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Длины потребных заготовок (мм)
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
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
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
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      isValid
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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

                <div className="mt-6 p-4  from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-green-800 mb-1">
                        Как работает симплекс-метод?
                      </p>
                      <p className="text-green-700 text-sm">
                        На основе введенных данных будет построена
                        математическая модель и найден оптимальный план раскроя,
                        минимизирующий отходы материала. Алгоритм рассмотрит все
                        возможные комбинации раскроя и выберет наиболее
                        эффективную.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
