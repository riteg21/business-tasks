import { Outlet, useLocation, Link } from "react-router-dom";
import { useMemo } from "react";

export function Layout() {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);
  return (
    <div>
      {!isHomePage && (
        <header className="sticky top-0 z-50 py-5 px-6 lg:px-25 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="logo.svg"
                alt="Логотип Вектор Цели"
                className="w-12 h-12 lg:w-15 lg:h-auto"
              />
              <div className="ms-3 lg:ms-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-gray-800">
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
                <a
                  href="#methods"
                  className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                >
                  Методы
                </a>
                <a
                  href="#cases"
                  className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                >
                  Кейсы
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium  shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-300 transition-all">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </header>
      )}
      <Outlet />
    </div>
  );
}
