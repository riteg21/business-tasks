import { tasks } from "../../../data/tasks";
import { ExampleCard } from "./exampleCard/ExampleCard";

export const ExamplesOfTasks = () => {
  return (
    <div className="bg-white py-20 px-50">
      <div className="flex flex-col">
        <div className="flex justify-center flex-col text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Какие бизнес-задачи мы решаем?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            От задач раскроя материалов до оптимизации логистических цепочек —
            наш алгоритм находит оптимальные решения для любых бизнес-процессов
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-7">
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
