import { Outlet, useLocation, Link } from "react-router-dom";
import { useMemo } from "react";

export function Layout() {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);
  const isOptimizationPage = useMemo(
    () => pathname === "/optimization",
    [pathname]
  );
  const showHeader = useMemo(
    () => !isHomePage && !isOptimizationPage,
    [isHomePage, isOptimizationPage]
  );
  return (
    <div>
      {showHeader && (
        <header className="sticky top-0 z-50 py-5 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to={"/"} className="flex items-center">
              <img
                src="logo.svg"
                alt="Логотип Вектор Цели"
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
            </Link>

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
            </div>
          </div>
        </header>
      )}
      <Outlet />
    </div>
  );
}
