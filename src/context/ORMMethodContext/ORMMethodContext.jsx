import { createContext, useContext, useState } from "react";
import Solver from "javascript-lp-solver";

const ORMMethodContext = createContext();

export function useORMMethod() {
  const context = useContext(ORMMethodContext);
  if (!context) {
    throw new Error("useORMMethod must be used within a ORMMethodProvider");
  }
  return context;
}

export const ORMMethodProvider = ({ children }) => {
  const [methodData, setMethodData] = useState(null);

  const parseStringToArray = (str) => {
    if (!str || typeof str !== "string") return [];
    return str
      .split(",")
      .map((item) => parseFloat(item.trim()))
      .filter((item) => !isNaN(item) && item > 0);
  };

  const parseStringToIntArray = (str) => {
    if (!str || typeof str !== "string") return [];
    return str
      .split(",")
      .map((item) => parseInt(item.trim()))
      .filter((item) => !isNaN(item) && item > 0);
  };

  const calculateCuttingPlan = (stockLength, partLengths, demands) => {
    const generatePatterns = () => {
      const patterns = [];
      const partCount = partLengths.length;

      const generate = (index, currentPattern, remaining) => {
        if (index >= partCount) {
          const totalUsed = currentPattern.reduce(
            (sum, count, i) => sum + count * partLengths[i],
            0
          );
          const waste = stockLength - totalUsed;

          if (totalUsed > 0 && waste < Math.min(...partLengths)) {
            patterns.push([...currentPattern]);
          }
          return;
        }

        const maxCount = Math.floor(remaining / partLengths[index]);

        for (let count = 0; count <= maxCount; count++) {
          currentPattern[index] = count;
          generate(
            index + 1,
            currentPattern,
            remaining - count * partLengths[index]
          );
        }

        currentPattern[index] = 0;
      };

      generate(0, new Array(partCount).fill(0), stockLength);
      return patterns;
    };

    const patterns = generatePatterns();

    const model = {
      optimize: "stock",
      opType: "min",
      constraints: {},
      variables: {},
      ints: {},
    };

    demands.forEach((demand, index) => {
      model.constraints[`part_${index}`] = { min: demand };
    });

    patterns.forEach((pattern, patternIndex) => {
      const varName = `pattern_${patternIndex}`;

      model.variables[varName] = { stock: 1 };

      pattern.forEach((count, partIndex) => {
        if (count > 0) {
          model.variables[varName][`part_${partIndex}`] = count;
        }
      });

      model.ints[varName] = 1;
    });

    const solution = Solver.Solve(model);

    const resultPatterns = [];
    let totalStock = 0;
    let totalWaste = 0;

    Object.keys(solution).forEach((key) => {
      if (key.startsWith("pattern_") && solution[key] > 0) {
        const patternIndex = parseInt(key.replace("pattern_", ""));
        const count = Math.round(solution[key]);
        const pattern = patterns[patternIndex];

        const usedLength = pattern.reduce(
          (sum, cnt, idx) => sum + cnt * partLengths[idx],
          0
        );
        const waste = stockLength - usedLength;

        const cuts = pattern
          .map((cnt, idx) =>
            cnt > 0
              ? {
                  count: cnt,
                  length: partLengths[idx],
                }
              : null
          )
          .filter((item) => item !== null);

        resultPatterns.push({
          count: count,
          waste: waste,
          cuts: cuts,
        });

        totalStock += count;
        totalWaste += waste * count;
      }
    });

    const totalUsedLength = totalStock * stockLength - totalWaste;
    const efficiency =
      totalStock > 0 ? (totalUsedLength / (totalStock * stockLength)) * 100 : 0;

    return {
      solution: {
        totalStock: totalStock,
        totalWaste: totalWaste,
        totalUsedLength: totalUsedLength,
        efficiency: parseFloat(efficiency.toFixed(1)),
        patterns: resultPatterns,
      },
      inputData: {
        stockLength,
        partLengths,
        demands,
      },
    };
  };

  const onSubmitMethod = (data) => {
    try {
      const stockLength = parseFloat(data.lengthOfStartingMaterials);
      const partLengths = parseStringToArray(data.lengthsOfNecessaryMaterials);
      const demands = parseStringToIntArray(
        data.quantitiesOfNecessaryMaterials
      );

      const tooLongParts = partLengths.filter((length) => length > stockLength);

      if (tooLongParts.length > 0) {
        throw new Error(
          `Детали ${tooLongParts.join(
            ", "
          )}мм длиннее заготовки ${stockLength}мм`
        );
      }

      const result = calculateCuttingPlan(stockLength, partLengths, demands);

      const finalResult = {
        ...result,
        inputData: {
          ...result.inputData,
          rawData: data,
        },
      };

      setMethodData(finalResult);

      return finalResult;
    } catch (error) {
      const errorResult = {
        error: true,
        message: error.message,
      };

      setMethodData(errorResult);
      return errorResult;
    }
  };

  const value = {
    onSubmitMethod,
    methodData,
  };

  return (
    <ORMMethodContext.Provider value={value}>
      {children}
    </ORMMethodContext.Provider>
  );
};
