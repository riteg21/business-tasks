import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 py-5 px-6 lg:px-25 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center sm:justify-center md: justify-center lg:justify-between">
        <div className="flex items-center">
          <img
            src="logo.svg"
            alt="Вектор Цели"
            className="w-12 h-12 lg:w-15 lg:h-auto"
          />
          <div className="ms-3 lg:ms-4">
            <h2 className="font-bold text-xl lg:text-2xl text-gray-800">
              Вектор Цели
            </h2>
            <p className="text-sm text-gray-600 hidden lg:block">
              Оптимизация бизнес-процессов
            </p>
          </div>
        </div>

        <div className="flex space-x-10">
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Возможности
            </a>
            <Link
              to={"/methods"}
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Методы
            </Link>
            <a
              href="#cases"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Кейсы
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
