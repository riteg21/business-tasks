import { useForm } from "react-hook-form";

// прямой симплекс метод для решения задач раскроя - из полученных входных данных составляем наиболее оптимизированный план раскроя минимизирующей функции с минимальными отходами

// input type data: кол-во исходных деталей, длина исходных заготовок, количество типов заготовок, длины потребных заготовок

export const ORM = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      countOfStartingMaterials: "",
      lengthOfStartingMaterials: "",
      countOfNecessaryMaterials: "",
      lengthsOfNecessaryMaterials: "",
    },
  });

  return (
    <div className="bg-[#F5F7FA] rounded-2xl px-20 py-30">
      <form onSubmit={handleSubmit()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="countOfStartingMaterials"
              className="block text-sm font-medium text-gray-700"
            >
              Количество исходных заготовок
            </label>
            <input
              {...register("countOfStartingMaterials", {
                required: "Введите количество исходных заготовок",
                maxLength: {
                  value: 4,
                  message: "Слишком много заготовок",
                },
              })}
              type="number"
              className={`w-full px-4 py-3 rounded-xl border focus:ring-2 transition-all duration-200 outline-none bg-white/50 ${
                errors.countOfStartingMaterials
                  ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:border-green-200 focus:ring-green-100"
              }`}
            />
            {errors.countOfStartingMaterials && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
                {errors.countOfStartingMaterials.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
