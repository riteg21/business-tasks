import { tasks } from "../../../data/tasks";
import { ExampleCard } from "./exampleCard/ExampleCard";

export const ExamplesOfTasks = () => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="flex flex-col">
        <div className="flex justify-center flex-col text-center">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Какие бизнес-задачи мы решаем?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6">
            От задач раскроя материалов до оптимизации логистических цепочек —
            наш алгоритм находит оптимальные решения для любых бизнес-процессов
          </p>
        </div>
        <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl px-4 sm:px-0">
            {tasks.map((task) => (
              <ExampleCard
                key={task.id}
                title={task.title}
                description={task.description}
                metrics={task.metrics}
                image={task.image}
                color={task.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
