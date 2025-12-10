export const ExampleCard = ({ title, description, metrics, image, color }) => {
  return (
    <div className="shadow-[#ABBED1]/40 shadow-md rounded-4xl py-8 px-5 bg-white duration-300 hover:shadow-[#ABBED1]/50 hover:shadow-lg">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-2xl bg-gray-200"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{title}</h2>
      <div
        className="h-1 w-full rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-gray-600 mt-3">{description}</p>
      <div className="mt-4 text-sm font-medium text-green-600">{metrics}</div>
    </div>
  );
};
