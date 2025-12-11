export const ExampleCard = ({ title, description, metrics, image, color }) => {
  return (
    <div className="shadow-[#ABBED1]/40 shadow-md rounded-3xl sm:rounded-4xl p-4 sm:p-4 lg:p-4 bg-white duration-300 hover:shadow-[#ABBED1]/50 hover:shadow-lg transition-all ease-in-out hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-20 md:h-35 lg:h-50 object-cover bg-gray-200 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 line-clamp-2">
        {title}
      </h2>
      <div
        className="h-1 w-full rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 line-clamp-3 sm:line-clamp-4">
        {description}
      </p>
      <div className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-green-600">
        {metrics}
      </div>
    </div>
  );
};
