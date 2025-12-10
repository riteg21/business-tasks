import Header from "../header/Header";
import { Footer } from "../footer/Footer";
import { GoToStart } from "./let's start/GoToStart";
import { ExamplesOfTasks } from "./examples/ExamplesOfTasks";
import { LearnMore } from "./aboutMethods/LearnMoreAboutMeth";

export const Home = () => {
  return (
    <div>
      <Header />
      <GoToStart />
      <ExamplesOfTasks />
      <LearnMore />
      <Footer />
    </div>
  );
};
